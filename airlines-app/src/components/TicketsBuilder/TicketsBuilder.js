import React, { Component } from 'react';


import CurrencyFilter from '../CurrencyFilter/CurrencyFilter';
import TicketsLayout from '../TicketsLayout/TicketsLayout';

import classes from './TicketsBuilder.css';

class TicketsBuilder extends Component {
  constructor (props) {
    super(props);
    this.state = {
      usd: 63,
      eur: 73,
    }
  }

  render () {
    return (
      <div className={classes.TicketsBuilder}>
        <CurrencyFilter />
        <TicketsLayout ticketsData={this.state.tickets} />
      </div>
    );
  }
}

export default TicketsBuilder;