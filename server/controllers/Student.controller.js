import Student from "../models/Student.model.js";
import { createError } from "../middleware/Error.js";

// Get student profile
export const getStudentProfile = async (req, res, next) => {
  try {
    const student = await Student.findById(req.user.id);
    if (!student) return next(createError(404, "Student not found"));
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

// Update student profile
export const updateStudentProfile = async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    next(err);
  }
};

// Delete student profile
export const deleteStudentProfile = async (req, res, next) => {
  try {
    await Student.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "Student account has been deleted" });
  } catch (err) {
    next(err);
  }
};
