import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Maps = ({ center, zoom }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          text="Your Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

Maps.defaultProps = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 11,
};

export default Maps;
