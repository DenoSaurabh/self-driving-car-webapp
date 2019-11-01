import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <h1>
      <span role="img" aria-label="redcar">
        🚗🚗
      </span>
      Self Driving Car Webapp Made by Saurabh
      <span role="img" aria-label="redcar">
        🚗🚗
      </span>
      <a href='https://github.com/Saurabh-FullStackDev/self-driving-car-webapp' className='github-icon' target='new'>
        <GitHubIcon />
      </a>
    </h1>
  </div>
);

export default Header;
