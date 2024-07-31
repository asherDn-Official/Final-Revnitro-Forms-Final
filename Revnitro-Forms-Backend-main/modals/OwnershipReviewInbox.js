const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ownershipReviewSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    vehicleType: {
      type: String,
    },
    vehicleModel: {
      type: String,
    },
    makeYear: {
      type: Number,
    },
    ownerName: {
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
    slotDate: {
      type: String,
    },
    slotTime: {
      type: String,
    },
    status: {
      type: String,
      default: "NotViewed",
    },
  },
  {
    timestamps: true,
    collection: "ownershipReview",
  }
);

module.exports = mongoose.model("ownershipReview", ownershipReviewSchema);
