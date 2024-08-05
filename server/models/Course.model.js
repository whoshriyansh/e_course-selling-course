import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  introVideo: { type: String, required: true },
  modules: [{ type: String, required: true }],
  whatYouWillLearn: [{ type: String, required: true }],
  requirements: [{ type: String, required: true }],
  content: [
    {
      title: { type: String, required: true },
      videoUrl: { type: String, required: true },
      isLocked: { type: Boolean, default: true },
    },
  ],
  price: { type: Number, required: true },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  reviews: [
    {
      student: { type: Schema.Types.ObjectId, ref: "Student" },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  keywords: [{ type: String }],
});

export default mongoose.model("Course", CourseSchema);
