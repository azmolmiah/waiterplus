import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Grid from '@material-ui/core/Grid';

const GoogleMaps = ({ latitude, longitude }) => {
  const [showMap, setShowMap] = useState(false);

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map
    });
    return marker;
  };

  return (
    <div
      style={{
        height: '50vh',
        width: '100%'
      }}
    >
      {!showMap ? (
        <div
          style={{
            background: 'url("/google-map.png") no-repeat center center',
            backgroundSize: 'cover',
            padding: '10%',
            height: '100%'
          }}
        >
          <Grid container justify='center'>
            <h1
              style={{ cursor: 'pointer', textAlign: 'center' }}
              onClick={() => {
                setShowMap(true);
              }}
            >
              Click to View
            </h1>
          </Grid>
        </div>
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_SECRET }}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            renderMarkers(map, maps);
          }}
        ></GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMaps;
