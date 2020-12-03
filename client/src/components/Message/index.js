import React from 'react';
import ReactEmoji from 'react-emoji';
import {
  MessageContainer,
  MessageBox,
  MessageText,
  MessageSentBy,
} from './MessageElements';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <MessageContainer $style={{ 'justify-content': 'flex-end' }}>
      <MessageSentBy $style={{ 'padding-right': '10px' }}>
        {trimmedName}
      </MessageSentBy>
      <MessageBox $style={{ background: '#2979ff' }}>
        <MessageText $style={{ color: 'white' }}>
          {ReactEmoji.emojify(text)}
        </MessageText>
      </MessageBox>
    </MessageContainer>
  ) : (
    <MessageContainer>
      <MessageBox>
        <MessageText>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
      <MessageSentBy>{user}</MessageSentBy>
    </MessageContainer>
  );
};

export default Message;
