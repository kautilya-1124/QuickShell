const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../middleware/authMiddleware");

const {
  createConversation,
  getConversations,
  sendMessage,
  getMessages,
} = require("../controllers/chatController");

// Create conversation
router.post("/conversation", isAuthenticated, createConversation);

// Get all conversations of logged in user
router.get("/conversation", isAuthenticated, getConversations);

// Send message
router.post("/message", isAuthenticated, sendMessage);

// Get messages of a conversation
router.get("/message/:id", isAuthenticated, getMessages);

module.exports = router;