import React, { useState } from "react";
import ChatWindow from './ChatWindow';

// Parent component (Simulating chat input)
const UseRef = () => {
    const [messages, setMessages] = useState([
      "Hi there",
      "Welcome to the chat!",
    ]);
    const [newMessage, setNewMessage] = useState("");
  
    const handleSend = () => {
      if (newMessage.trim() !== "") {
        setMessages((prev) => [...prev, newMessage]);
        setNewMessage("");
      }
    };
  
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>useRef + useEffect Example – Chat Window Auto Scroll</h2>
  
        <ChatWindow messages={messages} />
  
        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            style={{
              padding: "8px",
              width: "220px",
              marginRight: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend} style={{ padding: "8px 12px" }}>
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default UseRef;