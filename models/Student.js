const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  batch: {
    type: Number,
    min:2023,
    max:2026,
  },
  id: {
    type: String,
    unique: true,
  },
  room: {
    type: String,
  },
  block: {
    type: String,
    enum: ['A', 'B', 'C', 'D'],
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    required: true,
  }
});

module.exports = Student = mongoose.model("student", StudentSchema);
