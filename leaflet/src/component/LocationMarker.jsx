import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { GiDeliveryDrone } from "react-icons/gi";
import ReactDOMServer from 'react-dom/server';
import { Menu, MenuItem } from '@mui/material';
import Button from './Button.jsx';

const customIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<GiDeliveryDrone size={64} color="black" />),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const droneLocations = [{ id: 1, lat: 51.505, lng: -0.09 }, { id: 2, lat: 51.51, lng: -0.1 },];

function LocationMarker({ alert, onToggle }) {
    const [position, setPosition] = useState(null);


    return (
        <div>
            {droneLocations.map((drone) => (
                <Marker key={drone.id} position={[drone.lat, drone.lng]} icon={customIcon}>
                    <Popup>
                        <Button
                            onToggle={() => onToggle(drone.id)}
                            droneId={drone.id}



                        />
                    </Popup>
                </Marker>
            ))}
        </div>
    );
}

export default LocationMarker;
