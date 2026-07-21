import { useEffect, useState } from "react";
import { getMessages } from "../../services/chatService";

import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow({ selectedConversation }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedConversation) {
      loadMessages();
    }
  }, [selectedConversation]);

  const loadMessages = async () => {
    const data = await getMessages(selectedConversation._id);
    setMessages(data);
  };

  if (!selectedConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl text-gray-500">
          Select a conversation
        </h2>
      </div>
    );
  }

 const otherUser = selectedConversation?.members?.find(
  (member) => member._id !== localStorage.getItem("userId")
);

  return (
    <div className="flex-1 flex flex-col bg-gray-50">

      {/* Header */}
      <div className="p-4 border-b bg-white">
        <h2 className="font-bold text-xl">
          {otherUser?.name || "Chat"}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">
            No messages yet.
          </p>
        ) : (
          messages.map((message) => (
            <MessageBubble
              key={message._id}
              text={message.text}
              own={
                message.sender._id ===
                localStorage.getItem("userId")
              }
            />
          ))
        )}
      </div>

      {/* Input */}
      {selectedConversation?._id && (
  <MessageInput
    conversationId={selectedConversation._id}
    onMessageSent={loadMessages}
  />
)}
    </div>
  );
}