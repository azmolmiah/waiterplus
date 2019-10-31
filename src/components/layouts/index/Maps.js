import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = ({ latitude, longitude }) => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <Fragment>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCGtdrDMCUB9W9yXVoai4pSS1wmrCHeegg' }}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={11}
        >
          <AnyReactComponent lat={latitude} lng={longitude} text='My Marker' />
        </GoogleMapReact>
      </div>
    </Fragment>
  );
};

export default Maps;
