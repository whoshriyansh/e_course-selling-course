import Instructor from "../models/Instructor.model.js";
import { createError } from "../middleware/Error.js";

// Get instructor profile
export const getInstructorProfile = async (req, res, next) => {
  try {
    const instructor = await Instructor.findById(req.user.id);
    if (!instructor) return next(createError(404, "Instructor not found"));
    res.status(200).json(instructor);
  } catch (err) {
    next(err);
  }
};

// Update instructor profile
export const updateInstructorProfile = async (req, res, next) => {
  try {
    const updatedInstructor = await Instructor.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedInstructor);
  } catch (err) {
    next(err);
  }
};

// Delete instructor profile
export const deleteInstructorProfile = async (req, res, next) => {
  try {
    await Instructor.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "Instructor account has been deleted" });
  } catch (err) {
    next(err);
  }
};
