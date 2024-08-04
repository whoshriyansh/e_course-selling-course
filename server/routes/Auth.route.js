import express from "express";
import {
  AdminSignin,
  AdminSignup,
  InstructorSignin,
  InstructorSignup,
  StudentSignin,
  StudentSignup,
} from "../controllers/Auth.controller.js";

const router = express.Router();

router.post("/student/signup", StudentSignup);
router.post("/student/signin", StudentSignin);

router.post("/instructor/signup", InstructorSignup);
router.post("/instructor/signin", InstructorSignin);

router.post("/admin/signup", AdminSignup);
router.post("/admin/signin", AdminSignin);

export default router;
