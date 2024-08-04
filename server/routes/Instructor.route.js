import express from "express";
import {
  instructorSignup,
  instructorSignin,
  getInstructorProfile,
  updateInstructorProfile,
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/Instructor.controller.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post("/signup", instructorSignup);
router.post("/signin", instructorSignin);
router.get("/profile", verifyToken, getInstructorProfile);
router.put("/profile", verifyToken, updateInstructorProfile);
router.post("/course", verifyToken, createCourse);
router.get("/courses", verifyToken, getCourses);
router.get("/course/:courseId", verifyToken, getCourse);
router.put("/course/:courseId", verifyToken, updateCourse);
router.delete("/course/:courseId", verifyToken, deleteCourse);

export default router;
