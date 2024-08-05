import express from "express";
import {
  getAllUsers,
  getProfileById,
  deleteProfileById,
} from "../controllers/Admin.controller.js";
import { verifyToken, requireRole } from "../middleware/Auth.middleware.js";

const router = express.Router();

router.get("/users", verifyToken, requireRole("admin"), getAllUsers);
router.get("/profile/:id", verifyToken, requireRole("admin"), getProfileById);
router.delete(
  "/profile/:id",
  verifyToken,
  requireRole("admin"),
  deleteProfileById
);

export default router;
