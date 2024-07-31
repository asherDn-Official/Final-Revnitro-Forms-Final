const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const applyJobSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    jobType: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    applicantName: {
      type: String,
    },
    age: {
      type: Number,
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
    Resume: {
      type: String,
    },
    status: {
      type: String,
      default: "NotViewed",
    },
  },
  {
    timestamps: true,
    collection: "applyJob",
  }
);

module.exports = mongoose.model("applyJob", applyJobSchema);
