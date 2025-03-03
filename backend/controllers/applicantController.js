const aws = require("aws-sdk");
const Applicant = require("../models/applicantModel");
require("dotenv").config();

// AWS S3 Configuration
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.createApplicant = async (req, res, io) => {
  try {
    const {
      fullName,
      specialization,
      yearsOfExperience,
      certificationStatus,
      applicationStatus,
      medicalDegree,
      mmcRegistrationNumber,
      geriatricCertification, // This should be renamed or clarified in schema
      practiceType,
    } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ success: false, message: "No files uploaded" });
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

    // Upload multiple files
    const medicalLicenseUrls = await uploadFilesToS3(req.files.medicalLicense || []);
    const geriatricCertificationUrls = await uploadFilesToS3(req.files.geriatricCertification || []);
    const indemnityInsuranceUrls = await uploadFilesToS3(req.files.indemnityInsurance || []);
    const profilePhotoUrls = await uploadFilesToS3(req.files.profilePhoto || []);

    // Create applicant object with file URLs
    const newApplicant = new Applicant({
      fullName,
      specialization,
      yearsOfExperience,
      certificationStatus,
      applicationStatus,
      medicalDegree,
      mmcRegistrationNumber,
      geriatricCertification,
      practiceType,
      medicalLicense: medicalLicenseUrls,
      geriatricCertification: geriatricCertificationUrls,
      indemnityInsurance: indemnityInsuranceUrls,
      profilePhoto: profilePhotoUrls,
    });

    await newApplicant.save();

    // Emit event for real-time update
    if (io) {
      io.emit("newApplicant", newApplicant);
    }

    res.status(201).json({ success: true, applicant: newApplicant });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all applicants
exports.getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json({ success: true, applicants });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Approve Action
exports.approveApplicant = async (req, res, io) => {
  const applicationId = req.params.id;

  try {
    const application = await Applicant.findById(applicationId);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // Update the approvalStatus
    application.approvalStatus = "Approved";
    await application.save();

    // Emit event for real-time update
    if (io) {
      io.emit("applicationUpdated", application);
    }

    res.json({ success: true, application });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Reject applicant
exports.rejectApplicant = async (req, res, io) => {
  const applicationId = req.params.id;

  try {
    const application = await Applicant.findById(applicationId);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // Update the approvalStatus to Rejected
    application.approvalStatus = "Rejected";
    await application.save();

     // Emit event for real-time update
     if (io) {
      io.emit("applicationUpdated", application);
    }

    res.json({ success: true, application });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single applicant by ID
exports.getApplicantById = async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id);
    if (!applicant) {
      return res.status(404).json({ success: false, message: "Applicant not found" });
    }
    res.status(200).json({ success: true, applicant });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
