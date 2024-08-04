import express from "express";
import {
  studentSignup,
  studentSignin,
  getStudentProfile,
  updateStudentProfile,
} from "../controllers/Student.controller.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post("/signup", studentSignup);
router.post("/signin", studentSignin);
router.get("/profile", verifyToken, getStudentProfile);
router.put("/profile", verifyToken, updateStudentProfile);

export default router;
