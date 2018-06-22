import React from 'react';

import classes from './CurrencyFilter.css';

const currencyFilter = (props) => {
  return (
    <div className={classes.Filter}>
      <div className={classes.FilterContainer}>
        <p>ВАЛЮТА</p>
        <table className={classes.Table}>
          <tbody>
            <tr>
              <th className={`${classes.Cell} ${classes.active}`}>RUB</th>
              <th className={`${classes.Cell} ${classes.active}`}>USD</th> 
              <th className={classes.active}>EUR</th>
            </tr>
        </tbody>
        </table>
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <label className={classes.container}>Все
          <input type="checkbox" />
          <span className={classes.checkmark}></span>
        </label>

        <label className={classes.container}>Без пересадок
          <input type="checkbox" />
          <span className={classes.checkmark}></span>
        </label>

        <label className={classes.container}>Одна пересадка
          <input type="checkbox" />
          <span className={classes.checkmark}></span>
        </label>

        <label className={classes.container}>Две пересадки
          <input type="checkbox" />
          <span className={classes.checkmark}></span>
        </label>
      </div>
    </div>

  );
}

export default currencyFilter;