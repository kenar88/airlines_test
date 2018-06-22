import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import TicketsBuilder from '../../components/TicketsBuilder/TicketsBuilder';

// import classes from './MainLayout.css';

class MainLayout extends Component {
  render () {
    return (
      <div>
        <Header />
        <TicketsBuilder />  
      </div>
    );
  }
}

export default MainLayout;