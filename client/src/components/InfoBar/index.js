import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import {
  InfoBarLeftContainer,
  InfoBarRightContainer,
  InfoBarWrapper,
  Image,
  IsTyping,
} from './InfoBarElements';

const InfoBar = ({ room, isTyping: { user, text }, name }) => {
  let isSentByCurrentUser = true;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = false;
  }

  return (
    <InfoBarWrapper>
      <InfoBarLeftContainer>
        <Image src={onlineIcon} alt=" " />
        <h3>{room}</h3>
        {isSentByCurrentUser && <IsTyping>{text}</IsTyping>}
      </InfoBarLeftContainer>
      <InfoBarRightContainer>
        <Link to="/">
          <img src={closeIcon} alt=" " />
        </Link>
      </InfoBarRightContainer>
    </InfoBarWrapper>
  );
};

export default InfoBar;
