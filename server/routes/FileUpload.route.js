import express from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import upload from "../utils/awsS3.js";
import { uploadFile } from "../controllers/Upload.controller.js";

const router = express.Router();

router.post("/upload", verifyToken, upload.single("file"), uploadFile);

export default router;
