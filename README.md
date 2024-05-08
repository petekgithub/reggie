# Act Regtech Assignment

## Overview

- **Objective**: Create a simple chat interface with our "Conversational AI" bot named Reggie.
- **User Interaction**: Users should be able to write messages and receive replies from Reggie.
- **Design Flexibility**: The 'look and feel' of the chat interface is entirely up to your discretion.

## API Details

- **API URL**: [Reggie's Chat API](https://regai-app-mock-1483.azurewebsites.net/chat?user_input=hello)
- **Usage**: Append user messages to the `user_input` query parameter to fetch responses.
- **Fallback**: If the API is unreachable, simulating the bot's responses is acceptable.

## Technical Requirements

### Frontend

- **UI Framework**: Utilize ReactJS, enhanced with DaisyUI and TailwindCSS for styling.
- **Responsive Design**: The chatbot interface must adapt seamlessly to both desktop and mobile devices.
- **Chat Interface Features**:
  - Clear display of user and chatbot messages.
  - An input field for user text.
  - Support for rich content, such as quick reply buttons and images, if applicable.

### Backend

- **API Endpoint**: [Reggie's Chat API](https://regai-app-mock-1483.azurewebsites.net/chat?user_input=hello)
- **Parameter**: Use the `user_input` parameter to send messages to the API.
- **Error Handling**: Implement fallback mechanisms for handling API failures or unavailability.
