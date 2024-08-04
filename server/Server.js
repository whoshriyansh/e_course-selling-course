import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/ConfigDB.js";

import authRoutes from "./routes/Auth.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT, () => {
  ConnectDB();
  console.log(`App is listening on PORT ${process.env.PORT}`);
});
