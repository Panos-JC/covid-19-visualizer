import React from 'react';
import './Map.css';

import { Map as LeafletMap, TileLayer } from 'react-leaflet';

// MUI
import { Card, Typography } from '@material-ui/core';

import { showDataOnMap } from '../../util';

function Map({ countries, casesType, center, zoom }) {
  console.log(countries);
  return (
    <Card className="map">
      <Typography variant="h6" className="map__title">
        Covid-19 Affected Areas
      </Typography>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {/* <GeoJSON data={geoJson} style={style} /> */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </Card>
  );
}

export default Map;
