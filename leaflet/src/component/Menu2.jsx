

import React, { useState } from "react";
import LocationMarker, { droneLocations } from "./LocationMarker";






function Menu2() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (

        <div className="relative">
            <label className="mt-4">Assign user(s) to as task:</label>

            <div className="absolute top-0 right-0">
                <button
                    className="px-4 py-2 flex items-center justify-between rounded border border-[#828FA340] hover:border-primary cursor-pointer"
                    onClick={toggleDropdown}>
                    { }
                    <span className="block">

                    </span>
                </button>

                {isOpen && (
                    <div className="absolute top-full right-0 mt-2 w-max">
                        <ul className="bg-[#20212c] rounded p-2">
                            {droneLocations.map((drone) => (
                                <li key={drone.id} className="text-white">
                                    <span>Drone ID: {drone.id}</span> <br />
                                    <span>Latitude: {drone.lat}</span> <br />
                                    <span>Longitude: {drone.lng}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
};



export default Menu2