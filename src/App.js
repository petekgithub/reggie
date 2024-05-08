import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      content: "It's over greenhead.",
      role: "assistant",
    },
    {
      content: "You underestimate my power!",
      role: "user",
    },
  ]);

  return (
    <section className="container mx-auto p-5 inset-0">
      <div className="mockup-window border bg-base-300 w-full h-full flex flex-col">
        <div className="p-5 pb-8 flex-grow overflow-auto">
          {messages.length &&
            messages.map((msg, index) => {
              return (
                <div
                  className={`chat ${
                    msg.role === "assistant" ? "chat-start" : "chat-end"
                  }`}
                  key={index}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="avatars"
                        src={
                          msg.role === "assistant"
                            ? "/images/assistant.png"
                            : "/images/user.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">{msg.content}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default App;
