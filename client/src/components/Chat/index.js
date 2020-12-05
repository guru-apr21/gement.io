import React, { useState, useEffect } from 'react';
import InfoBar from '../InfoBar';
import MessageComposer from '../MessageComposer';
import queryString from 'query-string';
import io from 'socket.io-client';
import Messages from '../Messages';
import TextContainer from '../TextContainer/index';
import SERVER_URI from '../../utils/config';
import { ChatOuterContainer, ChatInnerContainer } from './ChatElements';

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(SERVER_URI);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.disconnect();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => setMessages([...messages, message]));
    });

    socket.on('roomData', ({ users }) => setUsers(users));
  }, []);

  return (
    <ChatOuterContainer>
      <ChatInnerContainer>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <MessageComposer socket={socket} />
      </ChatInnerContainer>
      <TextContainer users={users} />
    </ChatOuterContainer>
  );
};

export default Chat;
