import React from 'react';
import './header.css';

import logo from '../../images/logo.png';
import virus1 from '../../images/virus1.png';
import virus2 from '../../images/virus2.png';
import ghost1 from '../../images/ghost1.png';
import ghost2 from '../../images/ghost2.png';
import ghost3 from '../../images/ghost3.png';
import ghost4 from '../../images/ghost4.png';
import ghost5 from '../../images/ghost5.png';

import { Link } from 'react-scroll';

// MUI
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { ArrowForwardIos as ArrowForwardIosIcon } from '@material-ui/icons/';

function Header() {
  return (
    <div className="header">
      <AppBar elevation={0}>
        <Toolbar>
          <img className="header__logo" src={logo} alt="" />
          <Typography className="header__title" varian="h5">
            COVID-19 Visualizer
          </Typography>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={300}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="tracker"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <Button color="inherit">Tracker</Button>
          </Link>
          <Link
            to="symptoms"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <Button color="inherit">Symptoms</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <div className="container">
          <div className="header__text">
            <Typography className="header__title2" variant="h1">
              COVID-19 Visualizer
            </Typography>
            <Typography>
              The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,
              China in December 2019, the outbreak was later recognized as a
              pandemic by the World Health Organization (WHO) on 11 March 2020.
            </Typography>
            <div className="header__actions">
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="header__cta"
                  endIcon={<ArrowForwardIosIcon />}
                >
                  How to Protect
                </Button>
              </a>
              <a
                href="https://www.google.com/search?q=test+for+covid+19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
                  GET TESTED
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="header__virus">
          <img src={virus1} alt="" />
          <img className={['virus2', 'rotate'].join(' ')} src={virus2} alt="" />
        </div>
        <img className="ghost ghost1" src={ghost1} alt="" />
        <img className="ghost ghost2 rotate" src={ghost2} alt="" />
        <img className="ghost ghost3" src={ghost3} alt="" />
        <img className="ghost ghost4" src={ghost4} alt="" />
        <img className="ghost ghost5" src={ghost5} alt="" />
      </main>
    </div>
  );
}

export default Header;
