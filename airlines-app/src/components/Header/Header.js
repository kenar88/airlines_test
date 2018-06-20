import React, { Component } from 'react';

import Logo from '../Logo/Logo';

import plain from '../assets/images/21-512.png';
import classes from './Header.css';

class Header extends Component {
  render () {
    return (
      <div className={classes.Header}>
        <Logo logo={plain} />
      </div>
    );
  }
}

export default Header;