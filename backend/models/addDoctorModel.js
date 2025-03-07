const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    providerType: { type: String, default: "Primary Care Providers"},
    specialization: { type: String, default: "Dentist" },
    practiceType: {
      type: String,
      enum: ["Private Clinic", "Telehealth"],
      required: true,
    },
    profilePhoto: [{ type: String, required: true }]
  },
  { timestamps: true }
);

const NewDoctor = mongoose.model("NewDoctor", doctorSchema);

module.exports = NewDoctor;
