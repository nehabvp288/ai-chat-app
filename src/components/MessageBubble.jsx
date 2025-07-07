function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-lg ${
        isUser ? "bg-blue-600 self-end ml-auto" : "bg-gray-700 self-start"
      }`}
    >
      {text}
    </div>
  );
}

export default MessageBubble;
