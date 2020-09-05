import React, { useState, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';

import fever from './images/Fever.png';
import cough from './images/Cough.png';
import sore_throat from './images/sore_throat.png';

// MUI
import {
  FormControl,
  Select,
  MenuItem,
  Grid,
  Typography
} from '@material-ui/core';
import { Language } from '@material-ui/icons';

// Components
import Header from './components/Header/Header';
import Stat from './components/Stats/Stat';
import VirusIcon from './components/VirusIcon';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

// Utility functions
import { sortData, prettyPrintStat } from './util';
import CustomCard from './components/CustomCard/CustomCard';

function App() {
  const worldwideCoordnates = { lat: 34.80746, lng: -40.4796 };
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  const [mapCenter, setMapCenter] = useState(worldwideCoordnates);
  const [mapCountries, setMapCountries] = useState([]);

  const [casesType, setCasesType] = useState('cases');

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter({
          lat: data?.countryInfo?.lat || worldwideCoordnates.lat,
          lng: data?.countryInfo?.long || worldwideCoordnates.lng
        });
      });
  };

  return (
    <div className="app" id="home">
      <Header />
      <div className="stats container" id="tracker">
        <Stat
          icon={<Language className="globeIcon" />}
          title="Stats Overview"
          number={
            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                onChange={onCountryChange}
                value={country}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          }
        ></Stat>
        <Stat
          active={casesType === 'cases'}
          icon={<VirusIcon className="icon" htmlColor="#FF3E29" />}
          title="Total Coronavirus Cases"
          number={prettyPrintStat(countryInfo.cases)}
          daily={prettyPrintStat(countryInfo.todayCases)}
          onClick={(e) => setCasesType('cases')}
        />
        <Stat
          active={casesType === 'recovered'}
          icon={<VirusIcon className="icon" htmlColor="#00DB75" />}
          title="Total Recovered"
          number={prettyPrintStat(countryInfo.recovered)}
          daily={prettyPrintStat(countryInfo.todayRecovered)}
          onClick={(e) => setCasesType('recovered')}
        />
        <Stat
          active={casesType === 'deaths'}
          icon={<VirusIcon className="icon" htmlColor="#3D3F52" />}
          title="Total Deathes"
          number={prettyPrintStat(countryInfo.deaths)}
          daily={prettyPrintStat(countryInfo.todayDeaths)}
          onClick={(e) => setCasesType('deaths')}
        />
      </div>
      <div className="app__map container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <div className="app__map__inner">
              <Map
                casesType={casesType}
                countries={mapCountries}
                center={mapCenter}
                zoom={3}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <div className="app__countries">
              <Table countries={tableData} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="app__title container" id="symptoms">
        <Typography variant="h4">Common Covid-19 Symptoms</Typography>
      </div>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <CustomCard
              img={fever}
              title="Fever"
              body="High Fever – this means you feel hot to touch on your chest or back (you
        do not need to measure your temperature). It is a common sign and also
        may appear in 2-10 days if you affected."
            />
          </Grid>
          <Grid item xs={4}>
            <CustomCard
              img={cough}
              title="Cough"
              body="Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual)."
            />
          </Grid>
          <Grid item xs={4}>
            <CustomCard
              img={sore_throat}
              title="Sore Throat"
              body="A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing."
            />
          </Grid>
        </Grid>
      </div>
      <footer>
        <div className="container padding">
          <Footer />
        </div>
        <div className="footer2">
          <Copyright />
        </div>
      </footer>
    </div>
  );
}

export default App;
