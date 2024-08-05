import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import ConnectDB from "./config/ConfigDB.js";
import studentRoutes from "./routes/Student.route.js";
import instructorRoutes from "./routes/Instructor.route.js";
import adminRoutes from "./routes/Admin.route.js";
import courseRoutes from "./routes/Course.route.js";
import authRoutes from "./routes/Course.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/courses", courseRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  res
    .status(errorStatus)
    .json({ success: false, status: errorStatus, message: errorMessage });
});

app.listen(process.env.PORT, () => {
  ConnectDB();
  console.log(`App is listening on PORT ${process.env.PORT}`);
});
