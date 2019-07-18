import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "b1f1603a38ea0f9b274bd49b626243c3";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        pressure: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if(city) {
            const api_url = await
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            const date = new Date();
            const sunrise = data.sys.sunrise;
            date.setTime(sunrise);
            const sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temperature: Math.round(data.main.temp) + " ℃" ,
                city: data.name,
                country: data.sys.country,
                sunrise: "0" + sunrise_date,
                pressure: data.main.pressure,
                error: undefined
                });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                pressure: undefined,
                error: "Enter name of the city"
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
                                <Form weatherMethod={this.gettingWeather}/>
                                <Weather
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    sunrise={this.state.sunrise}
                                    pressure={this.state.pressure}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;