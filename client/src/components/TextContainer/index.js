import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import {
  ActiveContainer,
  ActiveIcon,
  ActiveItem,
  Heading,
  TextWrapper,
} from './TextContainerElements';

const TextContainer = ({ users }) => (
  <TextWrapper>
    {users ? (
      <>
        <Heading>Online users:</Heading>
        <ActiveContainer>
          <h2>
            {users.map(({ name }, i) => (
              <ActiveItem key={i}>
                {name}
                <ActiveIcon alt="Online" src={onlineIcon} />
              </ActiveItem>
            ))}
          </h2>
        </ActiveContainer>
      </>
    ) : null}
  </TextWrapper>
);

export default TextContainer;
