import React from "react";

const Weather = props => (
    <div className="infoWeath">
        {props.city &&
            <div>
                <p>Location: {props.city}, {props.country}</p>
                <p>Temperature: {props.temperature}</p>
                <p>Sunrise: {props.sunrise}</p>
                <p>Pressure: {props.pressure}</p>
            </div>
        }
                <p className="error">{props.error}</p>
    </div>
)

export default Weather;