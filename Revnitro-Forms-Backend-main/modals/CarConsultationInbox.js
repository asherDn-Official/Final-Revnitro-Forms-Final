const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const carConsultationSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    carType: {
      type: String,
    },
    carBrand: {
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
    collection: "carConsultation",
  }
);

module.exports = mongoose.model("carConsultation", carConsultationSchema);
