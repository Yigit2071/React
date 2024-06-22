import React, { useState, useEffect } from 'react'
import "./css/time.css"

function timeComponent() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);


    }, []);

    return (
        <div className='time-container'>
            <div className='current-time'>
                Zaman: {currentTime.toLocaleTimeString()}
            </div>

        </div>
    )
}

export default timeComponent