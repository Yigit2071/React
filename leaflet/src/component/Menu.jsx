import React, { useState } from "react";
import LocationMarker, { droneLocations } from "./LocationMarker";
import "./css/dropdown.css"
import Button from "./Button.jsx"
import TimeComponent from "./TimeComponent.jsx";


function Menu({ alert, onToggle }) {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                Flight Controller Menu
            </button>
            {isOpen ? (
                <ul>{droneLocations.map((drone) => (

                    <h3 key={drone.id}> drone id: {drone.id} <br />
                        Latitude: {drone.lat} <br />
                        Longitude: {drone.lat}

                    </h3>))}
                    <Button
                        alert={alert}
                        onToggle={onToggle}
                    />
                    <TimeComponent />

                </ul>
            ) : null}


        </div>
    );
}

export default Menu