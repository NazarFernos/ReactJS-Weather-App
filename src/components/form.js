import React from "react";

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Name of the city"/>
        <button className="btn btn-primary">
            Get Weather Forecast
        </button>
    </form>
)

export default Form;