import React from 'react';
import './Table.css';

import { Typography, Card, Avatar } from '@material-ui/core';

import numeral from 'numeral';

function Table({ countries }) {
  return (
    <Card className="table">
      {countries.map(({ country, cases, countryInfo }) => (
        <div className="app__country" key={country}>
          <div>
            <Avatar className="avatar" src={countryInfo.flag}></Avatar>
            <Typography className="countryName">{country}</Typography>
          </div>
          <Typography className="number">
            {numeral(cases).format('0,0')}
          </Typography>
        </div>
      ))}
    </Card>
  );
}

export default Table;
