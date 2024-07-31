const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const bikeConsultationSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    bikeType: {
      type: String,
    },
    bikeBrand: {
      type: String,
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
    questions: {
      type: String,
    },
    slot: {
      type: String,
    },
    status: {
      type: String,
      default: "NotViewed",
    },
  },
  {
    timestamps: true,
    collection: "bikeConsultation",
  }
);

module.exports = mongoose.model("bikeConsultation", bikeConsultationSchema);
