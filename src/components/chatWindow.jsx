import { useState } from "react";

function ChatWindow() {
  // store messages in chat (user and bot)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I help you today?" },
  ]);
  // store the text user is typing
  const [input, setInput] = useState("");
  // loading state (used to show typing...)
  const [loading, setLoading] = useState(false);

  // This function sends the message to the backend
  const handleSend = async () => {
    if (!input.trim()) return; // do nothing if empty input

    // add user message to chat
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput(""); // clear input
    setLoading(true); // show typing...

    try {
      // send to backend (you'll build this in next steps)
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }), // send user text
      });

      const data = await res.json(); // get reply from backend
      const botReply = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botReply]); // show bot message
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Error" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto h-screen p-4">
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg w-fit ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {/* Show "Typing..." when waiting for bot */}
        {loading && <div className="text-gray-500">Typing...</div>}
      </div>

      {/* Input and Send Button */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-2 rounded border"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
