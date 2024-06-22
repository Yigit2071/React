import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./LocationMarker"




function MapComponent({ alert, onToggle }) {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "80vh", width: "84%", border: "3px solid", top: "220px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <LocationMarker alert={alert} onToggle={onToggle} />


        </MapContainer>
    );
}

export default MapComponent
