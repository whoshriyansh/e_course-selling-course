import express from "express";
import {
  getStudentProfile,
  updateStudentProfile,
  deleteStudentProfile,
} from "../controllers/Student.controller.js";
import { verifyToken, requireRole } from "../middleware/Auth.middleware.js";

const router = express.Router();

router.get("/profile", verifyToken, requireRole("student"), getStudentProfile);
router.put(
  "/profile",
  verifyToken,
  requireRole("student"),
  updateStudentProfile
);
router.delete(
  "/profile",
  verifyToken,
  requireRole("student"),
  deleteStudentProfile
);

export default router;
