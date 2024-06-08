import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./LocationMarker"




function MapComponent() {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "90%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <LocationMarker />


        </MapContainer>
    );
}

export default MapComponent
