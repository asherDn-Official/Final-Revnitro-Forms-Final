const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ecuTuningSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    customerName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    location: {
      type: String,
    },
    address: {
      type: String,
    },
    vehiclename: {
      type: String,
    },
    vehiclemodel: {
      type: String,
    },
    issue: {
      type: String,
    },
    servicelocation: {
      type: String,
    },
    status: {
      type: String,
      default: "NotViewed",
    },
    assignedTo: {
      type: String,
    },
    assignedLocation: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "ecuTuning",
  }
);

module.exports = mongoose.model("ecuTuning", ecuTuningSchema);
