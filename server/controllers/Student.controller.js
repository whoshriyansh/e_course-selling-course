import Student from "../models/Student.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../middlewares/Error.js";
import { generateToken } from "../utils/GenerateToken.js";

export const studentSignup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newStudent = new Student({ ...req.body, password: hash });

    await newStudent.save();
    res.status(201).json("Student has been created");
  } catch (err) {
    next(err);
  }
};

export const studentSignin = async (req, res, next) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    if (!student) return next(createError(404, "Student not found"));

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      student.password
    );
    if (!isCorrectPassword) return next(createError(400, "Wrong password"));

    const token = generateToken(student, "student");
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

export const getStudentProfile = async (req, res, next) => {
  try {
    const student = await Student.findById(req.student.id).select("-password");
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

export const updateStudentProfile = async (req, res, next) => {
  try {
    const student = await Student.findById(req.student.id);
    if (!student) return next(createError(404, "Student not found"));

    const { firstname, lastname, email, profilePicture } = req.body;
    student.firstname = firstname || student.firstname;
    student.lastname = lastname || student.lastname;
    student.email = email || student.email;
    student.profilePicture = profilePicture || student.profilePicture;

    await student.save();
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
