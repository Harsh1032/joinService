const express = require("express");
const multer = require("multer");
const {
  createDoctor,
  getAllDoctors
} = require("../controllers/doctorControllers");

const router = express.Router();

// Configure multer for handling multiple file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define the fields for file uploads
const uploadFields = upload.fields([
  { name: "profilePhoto", maxCount: 1 },
]);

// Routes (pass `req.io` to controllers)
// Use arrow functions to explicitly pass `req.io` to controllers

router.post("/doctors", uploadFields, (req, res) => createDoctor(req, res, req.app.get("io")));
router.get("/doctors", (req, res) => getAllDoctors(req, res, req.app.get("io")));

module.exports = router;
