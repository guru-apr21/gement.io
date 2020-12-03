import React from 'react';
import './input.css';

const Input = ({ socket }) => {
  const sendMessage = (e) => {
    e.preventDefault();
    const message = e.target.value;
    if (message) {
      socket.emit('sendMessage', message, () => (e.target.value = ''));
    }
  };

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
