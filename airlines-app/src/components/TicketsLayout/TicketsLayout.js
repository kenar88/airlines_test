import React, { Component } from 'react';
import axios from 'axios';

import Ticket from '../Ticket/Ticket';

import classes from './TicketsLayout.css';

class TicketsLayout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentDidMount () {
    axios.get('https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json')
      .then(response => {
        console.log(response);
        this.setState({data: response.data});
        let arr = this.state.data.tickets;
        console.log(arr);
      })
      .catch(error => {
        console.log('ERROR:', error);
      })
  }

  render () {
    let tickets = <p>Loading...</p>
    if(this.state.data.tickets) {
      let arr = this.state.data.tickets;
      tickets = arr.map((item, i) => {
        return <Ticket
                  key={i}
                  arrivalDate={item.arrival_date}
                  arrivalTime={item.arrival_time}
                  departureDate={item.departure_date}
                  departureTime={item.departure_time}
                  originName={item.origin_name}
                  origin={item.origin}
                  destinationName={item.destination_name}
                  destination={item.destination}
                  stops={item.stops}
                  price={item.price}
                />
      });
    }

    return (
      <div className={classes.TicketsLayout}>
        {tickets}
      </div>
    );
  }
}

export default TicketsLayout;