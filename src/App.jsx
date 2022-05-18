import "./css/App.css";
import React, { Component } from "react";
import WeatherCard from "./css/components/Weather.component";
import axios from "axios";
import Inf from "./Inf.json";

class App extends Component {
  //passing down to json data down to the WeatherCard

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="outer-card">
          <div className="container">
            <div className="title-container">
              <h1>Weather NOW</h1>
            </div>
            <WeatherCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
