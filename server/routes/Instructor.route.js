import express from "express";
import {
  getInstructorProfile,
  updateInstructorProfile,
  deleteInstructorProfile,
} from "../controllers/Instructor.controller.js";
import { verifyToken, requireRole } from "../middleware/Auth.middleware.js";

const router = express.Router();

router.get(
  "/profile",
  verifyToken,
  requireRole("instructor"),
  getInstructorProfile
);
router.put(
  "/profile",
  verifyToken,
  requireRole("instructor"),
  updateInstructorProfile
);
router.delete(
  "/profile",
  verifyToken,
  requireRole("instructor"),
  deleteInstructorProfile
);

export default router;
