import React from "react";

function MessageForm({ onSubmit, isTyping }) {
  return (
    <form className="form-control m-5 items-center" onSubmit={onSubmit}>
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
  );
}

export default MessageForm;
