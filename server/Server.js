import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/ConfigDB.js";
import studentRoutes from "./routes/Student.route.js";
import instructorRoutes from "./routes/Instructor.route.js";
import adminRoutes from "./routes/Admin.route.js";
import uploadRoutes from "./routes/FileUpload.route.js";
import chatRoutes from "./routes/Chat.route.js";
import http from "http";
import { Server } from "socket.io";
import passport from "passport";
import session from "express-session";

// Import passport strategies
import "./config/Passport.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/students", studentRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/chats", chatRoutes);

// Auth routes for Google and Facebook login
import authRoutes from "./routes/Auth.route.js";
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

io.on("connection", (socket) => {
  console.log("A student connected");

  socket.on("joinRoom", ({ chatId }) => {
    socket.join(chatId);
  });

  socket.on(
    "sendMessage",
    async ({ chatId, senderId, recipientId, content }) => {
      const chat = await Chat.findById(chatId);
      if (chat) {
        const message = {
          sender: senderId,
          recipient: recipientId,
          content,
          timestamp: new Date(),
        };
        chat.messages.push(message);
        await chat.save();
        io.to(chatId).emit("newMessage", message);
      }
    }
  );

  socket.on("disconnect", () => {
    console.log("A student disconnected");
  });
});

server.listen(process.env.PORT, () => {
  ConnectDB();
  console.log(`App is listening on PORT ${process.env.PORT}`);
});
