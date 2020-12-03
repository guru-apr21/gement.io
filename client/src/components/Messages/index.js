import React from 'react';
import { ScrollBottom } from './MessagesElements';
import Message from '../Message';

const Messages = ({ messages, name }) => {
  return (
    <ScrollBottom>
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
    </ScrollBottom>
  );
};

export default Messages;
