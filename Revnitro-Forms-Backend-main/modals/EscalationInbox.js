const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const escalationSchema = new mongoose.Schema(
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
    problematicService: {
      type: String,
    },
    issueFaced: {
      type: String,
    },
    tieupPerson: {
      type: String,
    },
    status: {
      type: String,
      default: "NotViewed",
    },
  },
  {
    timestamps: true,
    collection: "escalation",
  }
);

module.exports = mongoose.model("escalation", escalationSchema);
