const express = require("express");
const {
    createFilter,
    getAllFilters
} = require("../controllers/filterController");

const router = express.Router();

// Routes (pass `req.io` to controllers)
// Use arrow functions to explicitly pass `req.io` to controllers

router.post("/filters", (req, res) => createFilter(req, res, req.app.get("io")));
router.get("/filters", (req, res) => getAllFilters(req, res, req.app.get("io")));


module.exports = router;
