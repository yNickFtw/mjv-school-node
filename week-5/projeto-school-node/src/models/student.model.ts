import mongoose from "mongoose";
import { Schema } from "mongoose";

export const studentSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  document: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Student = mongoose.model("Student", studentSchema);
