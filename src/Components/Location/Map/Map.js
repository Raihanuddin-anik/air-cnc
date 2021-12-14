import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '450px',
  height: '600px'
};

const center = {
  lat: 23.733348,
  lng: 90.4067
};

const Map = () => {
  const [locationItem, setLocationItem] = useState(null)
  return (
    <div>
      <LoadScript
        googleMapsApiKey='AIzaSyC5M_94lxlzHLTqTz5XcxGZq8eBv7jxkSM'
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          { /* Child components, such as markers, info windows, etc. */}

        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map;