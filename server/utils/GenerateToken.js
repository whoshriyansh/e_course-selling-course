import jwt from "jsonwebtoken";

export const generateToken = (student, role) => {
  return jwt.sign({ id: student._id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
