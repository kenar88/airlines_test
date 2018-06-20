import React from 'react';

import classes from './Logo.css';

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={props.logo} width="90px" height="90px" alt="Plain" />
    </div>
  );
}

export default logo;