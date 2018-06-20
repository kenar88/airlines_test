import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';
import classes from './MainLayout.css';

class MainLayout extends Component {
  render () {
    return (
      <div>
        <Header />
        <Filters />
      </div>
    );
  }
}

export default MainLayout;