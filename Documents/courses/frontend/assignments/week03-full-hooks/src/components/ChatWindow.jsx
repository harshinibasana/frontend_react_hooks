import React, { useState, useEffect, useRef } from "react";

// Child component (Chat Window)
const ChatWindow = ({ messages }) => {
  const bottomRef = useRef(null);

  // Automatically scroll to the bottom whenever new messages are added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="chat-container"
      style={{
        height: "200px",
        width: "300px",
        border: "2px solid #ccc",
        borderRadius: "8px",
        overflowY: "auto",
        padding: "10px",
        backgroundColor: "#f8f8f8",
      }}
    >
      {messages.map((msg, i) => (
        <p
          key={i}
          style={{
            background: "#e3f2fd",
            padding: "6px 10px",
            borderRadius: "5px",
            marginBottom: "6px",
          }}
        >
          {msg}
        </p>
      ))}
      {/* This invisible div is used as the scroll target */}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ChatWindow;

