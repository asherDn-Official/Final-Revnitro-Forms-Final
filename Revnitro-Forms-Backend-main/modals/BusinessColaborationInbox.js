const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const businessColaborationSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    customerName: {
      type: String,
    },
    companyName: {
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
    additionalDetails: {
      type: String,
    },
    status: {
      type: String,
      default: "NotViewed",
    },
  },
  {
    timestamps: true,
    collection: "businessColaboration",
  }
);

module.exports = mongoose.model("businessColaboration", businessColaborationSchema);
