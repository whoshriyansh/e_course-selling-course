import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: "{VALUE} is not a valid email!",
    },
  },
  password: { type: String, required: true },
  profilePicture: { type: String },
});

export default mongoose.model("Admin", AdminSchema);
