import { useState } from "react";
import { sendMessage } from "../../services/chatService";

export default function MessageInput({
  conversationId,
  onMessageSent,
}) {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    const message = await sendMessage({
      conversationId,
      text,
    });

    if (message) {
      setText("");

      if (onMessageSent) {
        onMessageSent();
      }
    }
  };

  return (
    <div className="border-t bg-white p-4 flex gap-3">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        className="flex-1 border rounded-full px-5 py-3 outline-none"
      />

      <button
        onClick={handleSend}
        className="bg-[#002F34] text-white px-6 rounded-full hover:bg-[#01464d] transition"
      >
        Send
      </button>
    </div>
  );
}