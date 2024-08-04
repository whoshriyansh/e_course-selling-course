import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  studentname: { type: String, required: true, unique: true },
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
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  profilePicture: { type: String },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

export default mongoose.model("Student", StudentSchema);
