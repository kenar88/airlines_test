import React, { Component } from 'react';

import CurrencyFilter from './CurrencyFilter/CurrencyFilter';

import classes from './Filters.css';

class Filter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      usd: 63,
      eur: 73,
    }
  }

  render () {
    return (
      <div className={classes.FilterLayout}>
        <CurrencyFilter />
      </div>
    );
  }
}

export default Filter;