import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "50vh",
    width: "100%"
  },
  bg: {
    background: 'url("/google-map.png") no-repeat center center',
    backgroundSize: "cover",
    padding: "10%",
    height: "100%"
  },
  click: {
    cursor: "pointer",
    textAlign: "center"
  }
}));

const GoogleMaps = ({ latitude, longitude }) => {
  const classes = useStyles();

  const [showMap, setShowMap] = useState(false);

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map
    });
    return marker;
  };

  return (
    <div className={classes.root}>
      {!showMap ? (
        <div className={classes.bg}>
          <Grid container justify="center">
            <h1
              className={classes.click}
              onClick={() => {
                setShowMap(true);
              }}
            >
              Click here to view
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
