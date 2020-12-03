import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './infoBar.css';

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt=" " className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <Link to="/">
          <img src={closeIcon} alt=" " />
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
