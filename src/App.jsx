import "./css/App.css";
import React, { Component } from "react";
import Weather from "./Weather";

class App extends Component {
  //Gets the data for our api call. We need lat and lon.
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Weather App</h1>
          <p>Made by Ertan</p>
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
