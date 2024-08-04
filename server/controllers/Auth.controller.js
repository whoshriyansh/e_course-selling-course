import Student from "../models/Student.model.js";
import Admin from "../models/Admin.model.js";
import Instructor from "../models/Instructor.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../middleware/Error.js";
import { generateToken } from "../utils/GenerateToken.js";

/*STUDENT AUTH CONTROLLERS*/
// Student Sign-up
export const StudentSignup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newStudent = new Student({ ...req.body, password: hash });

    await newStudent.save();
    res.status(200).send("Student has been created");
    // const token = generateToken(newStudent, "student");
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

// Student Sign-in
export const StudentSignin = async (req, res, next) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    if (!student)
      return next(
        createError(404, "Student not found with this Email Address")
      );

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      student.password
    );
    if (!isCorrectPassword) return next(createError(404, "Wrong Password"));

    const token = generateToken(student, "student");
    const { password, ...others } = student._doc;

    res.status(200).json({ ...others, token });
  } catch (err) {
    next(err);
  }
};

/*INSTRUCTOR AUTH CONTROLLERS*/
// Instructor Sign-up
export const InstructorSignup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newInstructor = new Instructor({ ...req.body, password: hash });

    await newInstructor.save();
    res.status(200).send("Instructor has been created");
    // const token = generateToken(newInstructor, "instructor");
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

// Instructor Sign-in
export const InstructorSignin = async (req, res, next) => {
  try {
    const instructor = await Instructor.findOne({ email: req.body.email });
    if (!instructor)
      return next(
        createError(404, "Instructor not found with this Email Address")
      );

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      instructor.password
    );
    if (!isCorrectPassword) return next(createError(404, "Wrong Password"));

    const token = generateToken(instructor, "instructor");
    const { password, ...others } = instructor._doc;

    res.status(200).json({ ...others, token });
  } catch (err) {
    next(err);
  }
};

/*ADMIN AUTH CONTROLLERS*/
// Admin Sign-up
export const AdminSignup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newAdmin = new Admin({ ...req.body, password: hash });

    await newAdmin.save();
    res.status(200).send("Adminn has been created");
    // const token = generateToken(newAdmin, "admin");
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

// Admin Sign-in
export const AdminSignin = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin)
      return next(createError(404, "Admin not found with this Email Address"));

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!isCorrectPassword) return next(createError(404, "Wrong Password"));

    const token = generateToken(admin, "admin");
    const { password, ...others } = admin._doc;

    res.status(200).json({ ...others, token });
  } catch (err) {
    next(err);
  }
};
