const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    specialization: { type: String, default: "Geriatric Care" },
    yearsOfExperience: { type: Number, required: true },
    certificationStatus: {
      type: String,
      enum: ["Verified", "Pending"],
      required: true,
    },
    applicationStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    medicalDegree: { type: String, required: true },
    mmcRegistrationNumber: { type: String, required: true },
    geriatricCertification: {
      type: String,
      enum: ["Certified", "Not Certified"],
      required: true,
    },
    practiceType: {
      type: String,
      enum: ["Private Clinic", "Telehealth"],
      required: true,
    },
    medicalLicense: [{ type: String, required: true }],
    geriatricCertification: [{ type: String, required: true }],
    indemnityInsurance: [{ type: String, required: true }],
    profilePhoto: [{ type: String, required: true }],
    approvalStatus: {
      type: String,
      enum: ["Not Reviewed", "Approved", "Rejected", "Feedback Provided"],
      default: "Not Reviewed", // This can track the action status
    },
  },
  { timestamps: true }
);

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
