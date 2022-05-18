import "./css/App.css";
import React, { Component } from "react";
import Weather from "./Weather";
import axios from "axios";
import Inf from "./Inf.json";

class App extends Component {
  //passing down to json data down
  render() {
    return (
      <div className="App">
        <div className="outer-card">
          <div className="container">
            <div className="title-container">
              <h1>Weather NOW</h1>
              <input type="search" name="city-search" id="city-search" />
            </div>
            <div className="weather-card">
              <h2>Sofia</h2>
              <div className="temp">
                <p>24.85 °C</p>
                <p>Clouds</p>
              </div>
              <div className="icon">ICON</div>
              <div className="feels-like">
                <p>Feels like: 24.85 °C</p>
                <p>Humidity: 59</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
