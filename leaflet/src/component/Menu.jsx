import React, { useState } from "react";
import LocationMarker, { droneLocations } from "./LocationMarker";
import "./dropdown.css"


function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                Dropdown Menü
            </button>
            {isOpen && (
                <ul>{droneLocations.map((drone) => (

                    <li key={drone.id}> drone id: {drone.id} <br />
                        Latitude: {drone.lat} <br />
                        Longitude: {drone.lat}

                    </li>))}


                </ul>
            )}
        </div>
    );
}

export default Menu