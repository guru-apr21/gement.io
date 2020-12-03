import React, { useRef } from 'react';
import './input.css';

const Input = ({ socket }) => {
  const inputRef = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    const message = inputRef.current.value;
    if (message) {
      socket.emit('sendMessage', message, () => (inputRef.current.value = ''));
    }
  };

  return (
    <form className="form">
      <input
        ref={inputRef}
        className="input"
        type="text"
        placeholder="Type a message..."
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
};

export default Input;
