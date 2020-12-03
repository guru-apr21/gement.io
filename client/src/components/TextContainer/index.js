import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './textContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {console.log(users)}
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }, i) => (
              <div key={i} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
