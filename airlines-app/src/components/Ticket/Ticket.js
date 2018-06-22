import React from 'react';

import turair from '../assets/images/turk-air.png';

import classes from './Ticket.css';

const ticket = (props) => {
  
  const stopsHandler = (stops) => {
    let stopage = 'без пересадок';
    if (stops === 1) {
      stopage = `${stops} пересадка`;
    } else if (stops > 1) {
      stopage = `${stops} пересадки`;
    }
    return stopage;
  }

  return (
    <div className={classes.Ticket}>
      <div className={classes.TicketLeft}>
        <img src={turair} height='80px' alt="turkish-airlane" />
        <button className={classes.Button}>Купить за {props.price} Р</button>
      </div>
      <div className={classes.TicketRight}>
        <div className={classes.FlightInfoDep}>
          <p className={classes.Time}>{props.arrivalTime}</p>
          <p className={classes.Departure}>{props.origin}, {props.originName}</p>
          <p className={classes.Date}>{props.arrivalDate}</p>
        </div>
        <div className={classes.Transfer}>
          <p>{stopsHandler(props.stops)}</p>
        </div>
        <div className={classes.FlightInfoArrival}>
          <p className={classes.Time}>{props.departureTime}</p>
          <p className={classes.Departure}>{props.destinationName},{props.destination}</p>
          <p className={classes.Date}>{props.departureDate}</p>
        </div>
      </div>
    </div>
  );
}

export default ticket;