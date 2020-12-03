import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import {
  InfoBarLeftContainer,
  InfoBarRightContainer,
  InfoBarWrapper,
  Image,
} from './InfoBarElements';

const InfoBar = ({ room }) => {
  return (
    <InfoBarWrapper>
      <InfoBarLeftContainer>
        <Image src={onlineIcon} alt=" " />
        <h3>{room}</h3>
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
