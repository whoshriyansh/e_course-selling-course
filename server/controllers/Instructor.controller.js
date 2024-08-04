import Instructor from "../models/Instructor.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../middlewares/Error.js";
import { generateToken } from "../utils/GenerateToken.js";
import Course from "../models/Course.model.js";

export const instructorSignup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newInstructor = new Instructor({ ...req.body, password: hash });

    await newInstructor.save();
    res.status(201).json("Instructor has been created");
  } catch (err) {
    next(err);
  }
};

export const instructorSignin = async (req, res, next) => {
  try {
    const instructor = await Instructor.findOne({ email: req.body.email });
    if (!instructor) return next(createError(404, "Instructor not found"));

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      instructor.password
    );
    if (!isCorrectPassword) return next(createError(400, "Wrong password"));

    const token = generateToken(instructor, "instructor");
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

export const getInstructorProfile = async (req, res, next) => {
  try {
    const instructor = await Instructor.findById(req.student.id).select(
      "-password"
    );
    res.status(200).json(instructor);
  } catch (err) {
    next(err);
  }
};

export const updateInstructorProfile = async (req, res, next) => {
  try {
    const instructor = await Instructor.findById(req.student.id);
    if (!instructor) return next(createError(404, "Instructor not found"));

    const {
      firstname,
      lastname,
      email,
      profilePicture,
      title,
      education,
      experience,
      bio,
    } = req.body;
    instructor.firstname = firstname || instructor.firstname;
    instructor.lastname = lastname || instructor.lastname;
    instructor.email = email || instructor.email;
    instructor.profilePicture = profilePicture || instructor.profilePicture;
    instructor.title = title || instructor.title;
    instructor.education = education || instructor.education;
    instructor.experience = experience || instructor.experience;
    instructor.bio = bio || instructor.bio;

    await instructor.save();
    res.status(200).json(instructor);
  } catch (err) {
    next(err);
  }
};

export const createCourse = async (req, res, next) => {
  try {
    const newCourse = new Course({ ...req.body, instructor: req.student.id });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    next(err);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ instructor: req.student.id });
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
};

export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return next(createError(404, "Course not found"));
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return next(createError(404, "Course not found"));

    Object.assign(course, req.body);
    await course.save();
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.courseId);
    if (!course) return next(createError(404, "Course not found"));
    res.status(200).json("Course has been deleted");
  } catch (err) {
    next(err);
  }
};
