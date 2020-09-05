import React from 'react';
import './Copyright.css';

// MUI
import { Typography } from '@material-ui/core';

function Copyright() {
  return (
    <div className="copyright">
      <Typography>
        Developed by{' '}
        <a
          href="https://github.com/Panos-JC"
          target="_blank"
          rel="noopener noreferrer"
        >
          me
        </a>
        , designed by{' '}
        <a
          href="https://www.uplabs.com/posts/covid-19-live-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          designmamba
        </a>
      </Typography>
    </div>
  );
}

export default Copyright;
