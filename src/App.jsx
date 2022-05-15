import "./css/App.css";
import React, { Component } from "react";

class App extends Component {
  //Gets the data for our api call. We need lat and lon.
  getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Lan:" + position.coords.latitude);
      console.log("Lon:" + position.coords.longitude);
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Weather App</h1>
          <p>Made by Ertan</p>
          <button onClick={this.getLocation}>Get Location</button>
        </div>
      </div>
    );
  }
}

export default App;
