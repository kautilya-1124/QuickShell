export default function MessageBubble({
  text,
  own,
}) {
  return (
    <div
      className={`flex ${
        own ? "justify-end" : "justify-start"
      } mb-3`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-xs ${
          own
            ? "bg-green-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {text}
      </div>
    </div>
  );
}