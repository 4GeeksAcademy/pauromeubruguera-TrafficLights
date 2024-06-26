import React, { useState } from "react";
import '../../styles/trafficLights.css';


export const TrafficLights = () => {
    const [color, setColor] = useState("");

    return (
        <div className="container justify-content-around mt-5">
            <div className="trafficLightContainer">
                <div className={"trafficLight bg-danger " + (color === 'red' ? 'glow-red' : '')}
                    onClick={() => setColor('red')}></div>
                <div className={"trafficLight bg-warning " + (color === 'yellow' ? 'glow-yellow' : '')}
                    onClick={() => setColor('yellow')}></div>
                <div className={"trafficLight bg-success" + (color === 'green' ? " glow-green" : '')}
                    onClick={() => setColor('green')}></div>
            </div>
        </div>
    )
}