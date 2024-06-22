import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MapComponent from './component/MapComponent';
import Menu from "./component/Menu"
import Menu2 from "./component/Menu2"
import Button from "./component/Button"
import TimeComponent from "./component/TimeComponent.jsx"
import DroneList from './component/DroneList.jsx';
import "./component/css/Button.css"
import { droneLocations } from './component/LocationMarker.jsx';
import { FaTimes } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";






function App() {

  const [alert, setAlert] = useState(false);
  const [selectedDroneId, setSelectedDroneId] = useState(null);

  const onToggle = (droneId) => {
    setAlert(!alert);
    setSelectedDroneId(droneId);
  };

  useEffect(() => {
    if (selectedDroneId !== null) {
      console.log(`Drone ${selectedDroneId} durumu: ${alert ? "KALKIŞ BAŞARISIZ" : "KALKIŞ BAŞARILI"}`);
    }
  }, [alert, selectedDroneId]);



  return (

    <div>
      {selectedDroneId !== null ? (
        <div>
          {alert ? (
            <div style={{ backgroundColor: "red", display: "inline-block" }}>
              <FaTimes />
              {"DRONE " + selectedDroneId + " KALKIŞ BAŞARISIZ"}
            </div>
          ) : (
            <div style={{ backgroundColor: "green", display: "inline-block" }}>
              <AiOutlineCheck />
              {"DRONE " + selectedDroneId + " KALKIŞ BAŞARILI"}
            </div>
          )}
        </div>
      ) : null}
      <div>
        <Menu />
        <MapComponent onToggle={onToggle} />
      </div>
    </div>
  );
}







export default App;
