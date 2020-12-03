import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  JoinOuterContainer,
  JoinInnerContainer,
  Heading,
  Input,
  Button,
} from './JoinElements';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <Heading>Join Room</Heading>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          $style={{ 'margin-top': '20px' }}
          placeholder="Room"
          type="text"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button type="submit">Sign In</Button>
        </Link>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
};

export default Join;
