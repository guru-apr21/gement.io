import React, { useRef } from 'react';
import {
  MessageComposerForm,
  MessageComposerInput,
  MessageComposerButton,
} from './MessageComposerElements';

const MessageComposer = ({ socket }) => {
  const inputRef = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    const message = inputRef.current.value;
    if (message) {
      socket.emit('sendMessage', message, () => (inputRef.current.value = ''));
    }
  };

  return (
    <MessageComposerForm>
      <MessageComposerInput
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        onKeyPress={(e) =>
          e.key === 'Enter' ? sendMessage(e) : socket.emit('typing')
        }
      />
      <MessageComposerButton onClick={sendMessage}>Send</MessageComposerButton>
    </MessageComposerForm>
  );
};

export default MessageComposer;
