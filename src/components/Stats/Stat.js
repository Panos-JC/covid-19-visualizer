import React from 'react';
import './stat.css';

import { Typography } from '@material-ui/core';

function Stat({ icon, title, number, daily, active, ...props }) {
  return (
    <div
      className={`stats__overview ${active && 'stats__overview--selected'}`}
      onClick={props.onClick}
    >
      {icon}
      <div className="text">
        <Typography className="text__overview">{title}</Typography>
        <Typography className="text__global">{number}</Typography>
        {daily && (
          <Typography className="text__daily">+{daily} Today</Typography>
        )}
      </div>
    </div>
  );
}

export default Stat;
