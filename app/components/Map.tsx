import React from 'react'
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import mapStyles from '../styles/map-styles';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    streetViewControl: true,
}

const Map = ({locale, coordinates = [52.5102, 13.3834]}) => {

    const { isLoaded, loadError } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCq9XpVQMtB0rLVqgjgWwQgcTJmDu5mRLc",
        language: locale
    })

    const [lat, lng] = coordinates;
    const center = {lat, lng};

    if (loadError) {
        return "Error loading maps";
    }

    if (!isLoaded) {
        return "Loading maps";
    }

    const renderMap = () => (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
            options={options}
        >
            <Marker position={center} icon={{
                url: '/images/pin.svg',
                scaledSize: new window.google.maps.Size(40, 40)
            }} />
        </GoogleMap>
    );

    return renderMap();


}

export default Map;
