import mongoose, { Schema } from "mongoose";

const InstructorSchema = new Schema({
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
  title: { type: String },
  education: { type: String },
  experience: { type: Number },
  profilePicture: { type: String },
  bio: { type: String },
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export default mongoose.model("Instructor", InstructorSchema);
