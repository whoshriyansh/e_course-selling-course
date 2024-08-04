import express from "express";
import {
  adminSignup,
  adminSignin,
  getAdminProfile,
  updateAdminProfile,
  getAllStudents,
  getAllInstructors,
  getAllCourses,
} from "../controllers/Admin.controller.js";
import { verifyToken, requireRole } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post("/signup", adminSignup);
router.post("/signin", adminSignin);
router.get("/profile", verifyToken, requireRole("admin"), getAdminProfile);
router.put("/profile", verifyToken, requireRole("admin"), updateAdminProfile);
router.get("/students", verifyToken, requireRole("admin"), getAllStudents);
router.get(
  "/instructors",
  verifyToken,
  requireRole("admin"),
  getAllInstructors
);
router.get("/courses", verifyToken, requireRole("admin"), getAllCourses);

export default router;
