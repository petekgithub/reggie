import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      content: "Hey there. Reggie is here.",
      role: "assistant",
    },
    {
      content: "Let's begin.",
      role: "user",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = e.target.elements[0].value; // Get the value of the first input element

    if (!userInput.trim()) return; // Prevent empty inputs

    e.target.reset(); // Immediately clear the input field after the message is sent

    const userMessage = {
      content: `${userInput}`,
      role: "user",
    };

    setMessages((messages) => [...messages, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch(
        `https://regai-app-mock-1483.azurewebsites.net/chat?user_input=${encodeURIComponent(
          userInput
        )}`
      );
      const text = await response.text();

      const botResponseText = text.split("I say:")[1].trim();
      const botResponse = {
        content: [`You say: ${userInput}`, `I say: ${botResponseText}`],
        role: "assistant",
      };

      setMessages((messages) => [...messages, botResponse]);
    } catch (error) {
      console.error("Fetching error:", error);
      setMessages((messages) => [
        ...messages,
        { content: "Error fetching response.", role: "assistant" },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <section className="container mx-auto p-5 fixed inset-0">
      <div className="mockup-window border bg-base-300 w-full h-full flex flex-col">
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
                        marginBottom:
                          idx < msg.content.length - 1 ? "10px" : "0",
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

        <form className="form-control m-5 items-center" onSubmit={handleSubmit}>
          <div className="input-group max-w-full w-[800px] relative">
            {isTyping && (
              <small className="absolute -top-5 left-0.5 animate-pulse">
                Reggie is Typing...
              </small>
            )}

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a question for Reggie, ask anything!"
                className="input input-bordered flex-grow custom-input"
                required
              />
              <button
                className="btn btn-square"
                type="submit"
                style={{ marginLeft: "1rem" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
