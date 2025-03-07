const express = require("express");
const multer = require("multer");
const {
  createApplicant,
  getAllApplicants,
  getApplicantById,
  approveApplicant,
  rejectApplicant
} = require("../controllers/applicantController");

const router = express.Router();

// Configure multer for handling multiple file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define the fields for file uploads
const uploadFields = upload.fields([
  { name: "medicalLicense", maxCount: 5 },
  { name: "geriatricCertification", maxCount: 5 },
  { name: "indemnityInsurance", maxCount: 5 },
  { name: "profilePhoto", maxCount: 1 },
]);

// Routes (pass `req.io` to controllers)
// Use arrow functions to explicitly pass `req.io` to controllers
router.post("/", uploadFields, (req, res) => createApplicant(req, res, req.app.get("io")));
router.get("/", (req, res) => getAllApplicants(req, res, req.app.get("io")));
router.get("/:id", (req, res) => getApplicantById(req, res, req.app.get("io")));
router.put("/approve/:id", (req, res) => approveApplicant(req, res, req.app.get("io")));
router.put("/reject/:id", (req, res) => rejectApplicant(req, res, req.app.get("io")));

module.exports = router;
