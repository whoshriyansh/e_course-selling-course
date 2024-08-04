import mongoose, { Schema } from "mongoose";

const CurriculumSchema = new Schema({
  moduleTitle: { type: String, required: true },
  lessons: [
    {
      title: { type: String, required: true },
      duration: { type: String, required: true },
      videoUrl: { type: String, required: true },
    },
  ],
});

const CourseSchema = new Schema({
  mainTitle: { type: String, required: true },
  subTitle: { type: String, required: true },
  keywords: [{ type: String, required: true }],
  startingVideoUrl: { type: String, required: true },
  curriculum: [CurriculumSchema],
  description: { type: String, required: true },
  overview: { type: String, required: true },
  whatYouWillLearn: [{ type: String, required: true }],
  price: {
    originalPrice: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
  },
  courseDuration: { type: String, required: true },
  courseLevel: { type: String, required: true },
  studentsEnrolled: { type: Number, default: 0 },
  language: { type: String, required: true },
  subtitleLanguage: { type: String, required: true },
  reviews: [
    {
      student: { type: Schema.Types.ObjectId, ref: "Student" },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  creationDate: { type: Date, default: Date.now },
});

export default mongoose.model("Course", CourseSchema);
