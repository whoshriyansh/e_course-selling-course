import Course from "../models/Course.model.js";
import { createError } from "../middlewares/Error";

/*CREATE COURSE*/
export const createCourse = async (res, res, next) => {
  try {
    const newCourse = new Course({ ...req.body, instructor: req.student.id });
    await newCourse.save();
    res.status(201).send("New Course Added");
  } catch (err) {
    next(err);
  }
};

/*UPDATE COURSE*/
export const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return next(createError(404, "Course not found"));

    if (course.instructor.toString() !== req.student.id)
      return next(createError(403, "You can only update your courses"));

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (err) {
    next(err);
  }
};

/* DELETE COURSE */
export const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return next(createError(404, "Course not found"));

    if (course.instructor.toString() !== req.student.id)
      return next(createError(403, "You can only delete your courses"));

    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json("Course has been deleted");
  } catch (err) {
    next(err);
  }
};

/* GET ALL COURSES */
export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().populate(
      "instructor",
      "firstname lastname title"
    );
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
};

/* GET COURSE BY ID */
export const getCourseById = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "instructor",
      "firstname lastname title"
    );
    if (!course) return next(createError(404, "Course not found"));
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};
