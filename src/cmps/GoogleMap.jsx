import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ fontSize: '3em' }}>{text}</div>;

export function GoogleMap() {
    const [coords, setCoords] = useState({ lat: 31.927641, lng: 34.805302 })
    const zoom = 11

    function handleClick({ lat, lng }) {
        setCoords({ lat, lng })
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDpQLH-jeyCxrhaCOaPgN6eSwM7seybvSI" }}
                center={coords}
                defaultZoom={zoom}
                onClick={handleClick}
            >
                <AnyReactComponent
                    {...coords}
                    text="🚩"
                />
            </GoogleMapReact>
        </div>
    );
}