import React, { useState } from "react";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import { fetchBotResponse } from "./services/api";

function App() {
  const initialMessages = [
    {
      content: "Hey there. Reggie is here.",
      role: "assistant",
    },
    {
      content: "Let's begin.",
      role: "user",
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = e.target.elements[0].value; // Get the value of the first input element

    if (!userInput.trim()) return; // Prevent empty inputs

    e.target.reset(); // Immediately clear the input field after the message is sent

    const userMessage = {
      content: userInput,
      role: "user",
    };

    setMessages((messages) => [...messages, userMessage]);
    setIsTyping(true);

    try {
      const botResponseText = await fetchBotResponse(userInput);
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
        <MessageList messages={messages} />
        <MessageForm onSubmit={handleSubmit} isTyping={isTyping} />
      </div>
    </section>
  );
}

export default App;
