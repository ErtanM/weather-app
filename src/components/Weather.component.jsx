import React from "react";
import Input from "./input.component";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <Input />
      <h2>Sofia</h2>
      <div className="temp">
        <p>24.85°C</p>
        <p>Clouds</p>
      </div>
      <div className="icon">ICON</div>

      <div className="feels-like">
        <p className="first">Feels like: 24.85°C</p>
        <p className="second">
          Humidity: 59
          <br />
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
