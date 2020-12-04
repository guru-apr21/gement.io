import React from 'react';
import ReactEmoji from 'react-emoji';
import {
  MessageContainer,
  MessageBox,
  MessageText,
  MessageSentBy,
  MessageSentAt,
} from './MessageElements';

const Message = ({ message: { user, text, time }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <MessageContainer $style={{ 'justify-content': 'flex-end' }}>
      <MessageSentBy $style={{ 'padding-right': '10px' }}>
        <MessageSentAt>{time}</MessageSentAt>
        {trimmedName}
      </MessageSentBy>
      <MessageBox $style={{ background: '#9b59b6' }}>
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
      <MessageSentBy>
        <MessageSentAt style={{ fontSize: '0.6em', fontWeight: 'bolder' }}>
          {time}
        </MessageSentAt>
        {user}
      </MessageSentBy>
    </MessageContainer>
  );
};

export default Message;
