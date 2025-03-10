const NewFilter = require("../models/addFilterModel");
exports.createFilter = async (req, res, io) => {
  try {
    const { filterName } = req.body;

    // Create new doctor object
    const newFilter = new NewFilter({
      filterName,
    });

    await newFilter.save();

    // ✅ Emit event when a doctor is added
    if (io) {
      console.log("🔴 Emitting newFilter event:", newFilter); // Add Debug Log
      io.emit("newFilter", newFilter);
    }

    res.status(201).json({ success: true, filter: newFilter });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all doctors
exports.getAllFilters = async (req, res) => {
  try {
    const filters = await NewFilter.find();
    res.status(200).json({ success: true, filters });
  } catch (error) {
    console.error("❌ Error fetching doctors:", error); // Add this log
    res.status(500).json({ success: false, error: error.message });
  }
};