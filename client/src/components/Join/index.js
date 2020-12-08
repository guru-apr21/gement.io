import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  JoinOuterContainer,
  JoinInnerContainer,
  Heading,
  Input,
  Button,
} from './JoinElements';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('http://localhost:5000/api/login', { name, room });
      history.push(`/chat?name=${name}&room=${room}`);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <Heading>Join Room</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            required
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            required
            $style={{ 'margin-top': '20px' }}
            placeholder="Room"
            type="text"
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <Button type="submit">Sign In</Button>
        </form>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
};

export default Join;
