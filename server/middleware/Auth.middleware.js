import jwt from "jsonwebtoken";
import { createError } from "./Error.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid"));
    // console.log("User info from token:", user);
    req.user = user;
    next();
  });
};

export const requireRole = (role) => (req, res, next) => {
  // console.log("User role:", req.user.role);
  if (req.user.role !== role) return next(createError(403, "Forbidden"));
  next();
};
