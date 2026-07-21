import { useEffect, useState } from "react";
import { getConversations } from "../../services/chatService";

export default function ChatSidebar({
  selectedConversation,
  setSelectedConversation,
}) {
  const [conversations, setConversations] = useState([]);

 useEffect(() => {
  loadConversations();
}, [selectedConversation?._id]);

  const loadConversations = async () => {
  const data = await getConversations();

  setConversations(data);

  if (
    selectedConversation &&
    selectedConversation._id &&
    data.length > 0
  ) {
    const current = data.find(
      (item) => item._id === selectedConversation._id
    );

    if (current) {
      setSelectedConversation(current);
    }
  }
};

  return (
    <div className="w-full md:w-80 border-r bg-white h-full overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold text-[#002F34]">
          Chats
        </h2>
      </div>

      {conversations.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          No conversations found
        </div>
      ) : (
        conversations.map((conversation) => {
          const otherUser = conversation.members.find(
            (member) => member._id !== localStorage.getItem("userId")
          );

          return (
            <div
              key={conversation._id}
              onClick={() => setSelectedConversation(conversation)}
              className={`p-4 border-b cursor-pointer transition hover:bg-gray-100 ${
                selectedConversation?._id === conversation._id
                  ? "bg-gray-100"
                  : ""
              }`}
            >
              <h3 className="font-semibold">
                {otherUser?.name || "Unknown User"}
              </h3>

              <p className="text-sm text-gray-500">
                Click to open chat
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}