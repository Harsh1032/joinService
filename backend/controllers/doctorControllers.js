const aws = require("aws-sdk");
const NewDoctor = require("../models/addDoctorModel");
require("dotenv").config();

// AWS S3 Configuration
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});


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
  