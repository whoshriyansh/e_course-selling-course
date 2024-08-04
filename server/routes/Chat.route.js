import express from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import Chat from "../models/Chat.model.js";

const router = express.Router();

// Get all chats for a student
router.get("/", verifyToken, async (req, res) => {
  const chats = await Chat.find({ participants: req.student.id }).populate(
    "participants",
    "studentname"
  );
  res.json(chats);
});

// Send a message
router.post("/send", verifyToken, async (req, res) => {
  const { recipientId, content } = req.body;
  let chat = await Chat.findOne({
    participants: { $all: [req.student.id, recipientId] },
  });

  if (!chat) {
    chat = new Chat({
      participants: [req.student.id, recipientId],
      messages: [],
    });
  }

  chat.messages.push({
    sender: req.student.id,
    recipient: recipientId,
    content,
  });
  await chat.save();

  res.json(chat);
});

export default router;
