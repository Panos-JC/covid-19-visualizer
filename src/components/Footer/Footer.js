import React from 'react';
import './Footer.css';

import logo from '../../images/logo.png';
import { Typography, IconButton } from '@material-ui/core';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon
} from '@material-ui/icons';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__column">
        <div className="logo">
          <img src={logo} alt="" />
          <Typography variant="subtitle1">COVID-19 Visualizer</Typography>
        </div>
        <Typography className="text" variant="body2">
          This project was created for learning purposes. If you are looking for
          robust data and graphs about Covid-19 please use a well known and
          trusted source.
        </Typography>
      </div>
      <div className="footer__column">
        <div className="title">
          <Typography variant="subtitle1">USEFUL LINKS</Typography>
        </div>
        <ul>
          <li>
            <a
              href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC
            </a>
          </li>
          <li>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHO
            </a>
          </li>
          <li>
            <a
              href="https://coronavirus.jhu.edu/map.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Johns Hopkins
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <div className="title">
          <Typography variant="subtitle1">CONTACT</Typography>
        </div>
        <ul>
          <li>phatziioannou@gmail.com</li>
        </ul>
      </div>
      <div className="footer__column">
        <div className="title">
          <Typography variant="subtitle1">WHERE YOU CAN FIND ME</Typography>
        </div>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/panos-j-chatziioannou-34920198/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="https://github.com/Panos-JC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
