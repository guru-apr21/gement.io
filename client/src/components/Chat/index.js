import React, { useState, useEffect } from 'react';
import InfoBar from '../InfoBar';
import Input from '../Input';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css';

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.disconnect();
    };
  }, [location.search, ENDPOINT]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    const message = e.target.value;
    if (message) {
      socket.emit('sendMessage', message, () => (e.target.value = ''));
    }
  };

  console.log(messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Input />
        {/* <input
          type="text"
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
        /> */}
      </div>
    </div>
  );
};

export default Chat;
