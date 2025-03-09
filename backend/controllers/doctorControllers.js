const aws = require("aws-sdk");
const NewDoctor = require("../models/addDoctorModel");
require("dotenv").config();

// AWS S3 Configuration
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Process file uploads (S3 Upload)
const uploadFilesToS3 = async (files) => {
  return Promise.all(
    files.map(async (file) => {
      const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `uploads/${Date.now()}_${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const data = await s3.upload(uploadParams).promise();
      return data.Location; // Return S3 URL
    })
  );
};

exports.createDoctor = async (req, res, io) => {
  try {
    const { fullName, providerType, specialization, practiceType } = req.body;

    if (
      !practiceType ||
      !["Private Clinic", "Telehealth"].includes(practiceType)
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid practiceType" });
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No profile photo uploaded" });
    }

    // Upload profile photo
    const profilePhotoUrls = await uploadFilesToS3(
      req.files.profilePhoto || []
    );

    // Create new doctor object
    const newDoctor = new NewDoctor({
      fullName,
      providerType: providerType || "Primary Care Providers",
      specialization: specialization || "Dentist",
      practiceType,
      profilePhoto: profilePhotoUrls,
    });

    await newDoctor.save();

    // ✅ Emit event when a doctor is added
    if (io) {
      console.log("🔴 Emitting newDoctor event:", newDoctor); // Add Debug Log
      io.emit("newDoctor", newDoctor);
    }

    res.status(201).json({ success: true, doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await NewDoctor.find();
    res.status(200).json({ success: true, doctors });
  } catch (error) {
    console.error("❌ Error fetching doctors:", error); // Add this log
    res.status(500).json({ success: false, error: error.message });
  }
};

// ✅ Delete a doctor by ID (with real-time update)
exports.deleteDoctor = async (req, res, io) => {
  try {
    const { id } = req.params;
    const doctor = await NewDoctor.findById(id);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Delete profile photo from S3 if exists
    if (doctor.profilePhoto.length > 0) {
      await Promise.all(
        doctor.profilePhoto.map(async (photoUrl) => {
          const Key = photoUrl.split(".com/")[1]; // Extract S3 key from URL
          await s3
            .deleteObject({ Bucket: process.env.S3_BUCKET_NAME, Key })
            .promise();
        })
      );
    }

    await doctor.deleteOne();

    // Emit event when a doctor is deleted
    if (io) {
      console.log("🛑 Emitting doctorDeleted event:", id);
      io.emit("doctorDeleted", { doctorId: id });
    }

    res
      .status(200)
      .json({ success: true, message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ✅ Update a doctor by ID (with real-time update)
// ✅ Update Doctor (Fix)
exports.updateDoctor = async (req, res, io) => {
  try {
    const { id } = req.params;
    console.log("🔍 Update Request Received for ID:", id);
    console.log("📩 Request Body:", req.body);
    console.log("📸 Uploaded Files:", req.files);

    if (
      !req.body.fullName &&
      !req.body.providerType &&
      !req.body.specialization &&
      !req.body.practiceType
    ) {
      return res
        .status(400)
        .json({ success: false, message: "No update data received" });
    }

    let doctor = await NewDoctor.findById(id);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    console.log("✅ Found Doctor:", doctor);

    let profilePhotoUrls = doctor.profilePhoto;

    // ✅ Handle New Profile Photo Upload
    if (req.files && req.files.profilePhoto) {
      console.log("🖼️ New Profile Photo Detected");

      // Delete old profile photo from S3
      if (doctor.profilePhoto.length > 0) {
        await Promise.all(
          doctor.profilePhoto.map(async (photoUrl) => {
            const Key = photoUrl.split(".com/")[1];
            await s3
              .deleteObject({ Bucket: process.env.S3_BUCKET_NAME, Key })
              .promise();
          })
        );
      }

      // ✅ Now upload new profile photo
      profilePhotoUrls = await uploadFilesToS3(req.files.profilePhoto);
      console.log("✅ New Profile Photo Uploaded:", profilePhotoUrls);
    }

    // ✅ MongoDB Update Query (Fix)
    console.log("🔄 Updating Doctor in Database...");
    const updatedDoctor = await NewDoctor.findByIdAndUpdate(
      id,
      {
        fullName: req.body.fullName,
        providerType: req.body.providerType,
        specialization: req.body.specialization,
        practiceType: req.body.practiceType,
        profilePhoto: profilePhotoUrls,
        updatedAt: new Date(),
      },
      { new: true, runValidators: true } // ✅ Ensures validation & returns updated doc
    );

    if (!updatedDoctor) {
      console.log("❌ Doctor Update Failed");
      return res.status(500).json({ success: false, message: "Update failed" });
    }

    console.log("✅ Doctor Successfully Updated:", updatedDoctor);

    // Emit update event to frontend
    if (io) {
      io.emit("doctorUpdated", updatedDoctor);
    }

    res.status(200).json({ success: true, doctor: updatedDoctor });
  } catch (error) {
    console.error("❌ Error Updating Doctor:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
