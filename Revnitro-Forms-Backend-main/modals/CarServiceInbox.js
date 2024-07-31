const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const carServiceSchema = new mongoose.Schema(
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
    carName: {
      type: String,
    },
    carModel: {
      type: String,
    },
    issue: {
      type: String,
    },
    serviceLocation: {
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
    collection: "carService",
  }
);

module.exports = mongoose.model("carService", carServiceSchema);
