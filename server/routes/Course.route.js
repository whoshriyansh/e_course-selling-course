import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addReview,
} from "../controllers/Course.controller.js";
import { verifyToken, requireRole } from "../middleware/Auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, requireRole("instructor"), createCourse);
router.get("/", verifyToken, requireRole("admin"), getAllCourses);
router.get("/:courseId", verifyToken, getCourseById);
router.put("/:courseId", verifyToken, requireRole("instructor"), updateCourse);
router.delete(
  "/:courseId",
  verifyToken,
  requireRole("instructor"),
  deleteCourse
);
router.post(
  "/:courseId/review",
  verifyToken,
  requireRole("student"),
  addReview
);

export default router;
