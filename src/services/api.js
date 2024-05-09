// encodeURIComponent, whatever text users enter is safely and accurately transmitted to the server as part of the URL.
export const fetchBotResponse = async (userInput) => {
  const response = await fetch(
    `https://regai-app-mock-1483.azurewebsites.net/chat?user_input=${encodeURIComponent(
      userInput
    )}`
  );
  const text = await response.text();
  return text.split("I say:")[1].trim();
};
