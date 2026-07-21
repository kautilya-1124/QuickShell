import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../services/socket";

import ChatSidebar from "../components/chat/ChatSidebar";
import ChatWindow from "../components/chat/ChatWindow";

export default function Chat() {
    const { conversationId } = useParams();
 const [selectedConversation, setSelectedConversation] = useState({
  _id: conversationId,
});
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("🟢 Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="h-screen flex bg-gray-100">
      <ChatSidebar
        selectedConversation={selectedConversation}
        setSelectedConversation={setSelectedConversation}
      />

      <ChatWindow
        selectedConversation={selectedConversation}
      />
    </div>
  );
}