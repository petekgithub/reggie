import React from "react";

function MessageList({ messages }) {
  return (
    <div className="p-5 pb-8 flex-grow overflow-auto">
      {messages.map((msg, index) => (
        <div
          className={`chat ${
            msg.role === "assistant" ? "chat-start" : "chat-end"
          }`}
          key={index}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="avatar"
                src={
                  msg.role === "assistant"
                    ? "/images/assistant.png"
                    : "/images/user.png"
                }
              />
            </div>
          </div>
          <div className="chat-bubble">
            {Array.isArray(msg.content) ? (
              msg.content.map((line, idx) => (
                <p
                  key={idx}
                  style={{
                    marginBottom: idx < msg.content.length - 1 ? "10px" : "0",
                  }}
                >
                  {line}
                </p>
              ))
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
