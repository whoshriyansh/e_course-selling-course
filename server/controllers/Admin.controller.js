import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../middlewares/Error.js";
import { generateToken } from "../utils/GenerateToken.js";
import Student from "../models/Student.model.js";
import Instructor from "../models/Instructor.model.js";
import Course from "../models/Course.model.js";

export const adminSignup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newAdmin = new Admin({ ...req.body, password: hash });

    await newAdmin.save();
    res.status(201).json("Admin has been created");
  } catch (err) {
    next(err);
  }
};

export const adminSignin = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) return next(createError(404, "Admin not found"));

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!isCorrectPassword) return next(createError(400, "Wrong password"));

    const token = generateToken(admin, "admin");
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

export const getAdminProfile = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.student.id).select("-password");
    res.status(200).json(admin);
  } catch (err) {
    next(err);
  }
};

export const updateAdminProfile = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.student.id);
    if (!admin) return next(createError(404, "Admin not found"));

    const { firstname, lastname, email, profilePicture } = req.body;
    admin.firstname = firstname || admin.firstname;
    admin.lastname = lastname || admin.lastname;
    admin.email = email || admin.email;
    admin.profilePicture = profilePicture || admin.profilePicture;

    await admin.save();
    res.status(200).json(admin);
  } catch (err) {
    next(err);
  }
};

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find().select("-password");
    res.status(200).json(students);
  } catch (err) {
    next(err);
  }
};

export const getAllInstructors = async (req, res, next) => {
  try {
    const instructors = await Instructor.find().select("-password");
    res.status(200).json(instructors);
  } catch (err) {
    next(err);
  }
};

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().populate("instructor", "-password");
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
};
