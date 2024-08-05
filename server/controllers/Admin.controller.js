import Student from "../models/Student.model.js";
import Instructor from "../models/Instructor.model.js";
import { createError } from "../middleware/Error.js";

// Get all students and instructors
export const getAllUsers = async (req, res, next) => {
  try {
    const students = await Student.find();
    const instructors = await Instructor.find();
    res.status(200).json({ students, instructors });
  } catch (err) {
    next(err);
  }
};

// Get a specific profile by ID
export const getProfileById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    const instructor = await Instructor.findById(req.params.id);
    if (!student && !instructor)
      return next(createError(404, "Profile not found"));
    res.status(200).json(student || instructor);
  } catch (err) {
    next(err);
  }
};

// Delete a specific profile by ID
export const deleteProfileById = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    const instructor = await Instructor.findByIdAndDelete(req.params.id);
    if (!student && !instructor)
      return next(createError(404, "Profile not found"));
    res.status(200).json({ message: "Profile has been deleted" });
  } catch (err) {
    next(err);
  }
};
