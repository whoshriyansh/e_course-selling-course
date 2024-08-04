import express from "express";
import passport from "passport";
import "../config/passport.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Student from "../models/Student.model.js";
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

export default router;

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    student.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    student.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
    await student.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        student: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: student.email,
      subject: "Password Reset Request",
      html: message,
    };

    transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, data: "Email Sent" });
  } catch (error) {
    student.resetPasswordToken = undefined;
    student.resetPasswordExpire = undefined;
    await student.save();
    return next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");
  try {
    const student = await Student.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!student) {
      return res.status(400).json({ message: "Invalid Token" });
    }

    student.password = req.body.password;
    student.resetPasswordToken = undefined;
    student.resetPasswordExpire = undefined;
    await student.save();

    res
      .status(201)
      .json({ success: true, data: "Password Updated Successfully" });
  } catch (error) {
    next(error);
  }
};
