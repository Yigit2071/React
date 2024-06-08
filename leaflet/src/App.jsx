import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MapComponent from './component/MapComponent';
import Menu from "./component/Menu"
import Menu2 from "./component/Menu2"



function App() {
  return (
    <div>
      <MapComponent />
      <Menu />
      <Menu2 />


    </div>

  );
}

export default App;
