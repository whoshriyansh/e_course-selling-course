import Course from "../models/Course.model.js";
import { createError } from "../middleware/Error.js";

// Create a new course (Instructor only)
export const createCourse = async (req, res, next) => {
  try {
    const newCourse = new Course({
      ...req.body,
      instructor: req.user.id,
    });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    next(err);
  }
};

// Get all courses (Admin only)
export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().populate("instructor reviews.student");
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
};

// Get a course by ID
export const getCourseById = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId).populate(
      "instructor reviews.student"
    );
    if (!course) return next(createError(404, "Course not found"));
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};

// Update a course (Instructor only)
export const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return next(createError(404, "Course not found"));

    if (course.instructor.toString() !== req.user.id)
      return next(
        createError(403, "You are not authorized to update this course")
      );

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.courseId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (err) {
    next(err);
  }
};

// Delete a course (Instructor only)
export const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return next(createError(404, "Course not found"));

    if (course.instructor.toString() !== req.user.id)
      return next(
        createError(403, "You are not authorized to delete this course")
      );

    await course.remove();
    res.status(200).json({ message: "Course has been deleted" });
  } catch (err) {
    next(err);
  }
};

// Add a review (Student only)
export const addReview = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return next(createError(404, "Course not found"));

    const alreadyReviewed = course.reviews.find(
      (r) => r.student.toString() === req.user.id.toString()
    );

    if (alreadyReviewed)
      return next(createError(400, "Course already reviewed"));

    const review = {
      student: req.user.id,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };

    course.reviews.push(review);

    course.numReviews = course.reviews.length;
    course.rating =
      course.reviews.reduce((acc, item) => item.rating + acc, 0) /
      course.reviews.length;

    await course.save();
    res.status(201).json({ message: "Review added" });
  } catch (err) {
    next(err);
  }
};
