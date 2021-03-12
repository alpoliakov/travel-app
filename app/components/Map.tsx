import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

import mapStyles from '../styles/map-styles';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: true,
  streetViewControl: true,
};

const Map = ({ locale, coordinates = [52.5102, 13.3834] }) => {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json');
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [lat, lng] = coordinates;
  const center = { lat, lng };

  const image = '/images/pin.png';

  const renderMap = () => (
    <LoadScript googleMapsApiKey={'AIzaSyCq9XpVQMtB0rLVqgjgWwQgcTJmDu5mRLc'} language={locale}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        options={options}
        onLoad={onLoad}
        onUnmount={onUnmount}>
        <Marker position={center} icon={image} />
      </GoogleMap>
    </LoadScript>
  );

  return renderMap();
};

export default Map;
