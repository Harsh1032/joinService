const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema(
  {
    filterName: { type: String, required: true },
  },
  { timestamps: true }
);

const NewFilter = mongoose.model("NewFilter", filterSchema);

module.exports = NewFilter;
