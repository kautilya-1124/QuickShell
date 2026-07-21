import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/chat",
});

// Token automatically add
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Get Conversations
export const getConversations = async () => {
  try {
    const res = await API.get("/conversation");
    return res.data.conversations || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Get Messages
export const getMessages = async (conversationId) => {
  try {
    const res = await API.get(`/message/${conversationId}`);
    return res.data.messages || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Send Message
export const sendMessage = async (data) => {
  try {
    const res = await API.post("/message", data);
    return res.data.message;
  } catch (error) {
    console.error(error);
    return null;
  }
};


// Create Conversation
// Create Conversation
export const createConversation = async (receiverId) => {
  try {
    const res = await API.post("/conversation", {
      receiverId,
    });

    return res.data.conversation;
  } catch (error) {
    console.error("Create Conversation Error:", error);
    return null;
  }
};