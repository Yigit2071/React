import React, { useState } from 'react'
import "./css/Button.css"
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import ReactDOMServer from 'react-dom/server';
import DroneList from './DroneList';
import { IoIosAddCircle } from "react-icons/io";
import Menu from './Menu';
import { droneLocations } from './LocationMarker';







function Button({ onToggle, droneId }) {




    return (
        //Eğer side-panel klasını kaldırırsan Popup paneli ile çakışmaz ve popup paneline düzgünce oturur
        <div >
            <ul>
                <li>Longitude: 51° 45' 2.545''</li>
                <li>Latitude: -9° 23' 5.545''</li>
                <li>Altitude: 0m</li>
                <li>Status: Disarm </li>
            </ul>


            <button className="side-button" onClick={onToggle}>
                <LuPlaneTakeoff size={40} /> <br /> TAKEOFF
            </button>




            <button className="side-button"><LuPlaneLanding size={40} /> <br /> <div style={{ color: "white" }}>LANDING</div>
            </button>
            <button className="side-button"><ImCross size={40} /> <br /> DİSARM
            </button>
            <button style={{ marginTop: "-1px", paddingRight: "20px", paddingBottom: "10px" }} className="side-button" ><IoIosAddCircle size={40} /> <br /> ADD <br />DRONE
            </button>



        </div>

    );
}


export default Button
