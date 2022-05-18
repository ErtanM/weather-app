import React from "react";
import Input from "./input.component";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <h2>Sofia</h2>
      <Input />
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
  );
};

export default WeatherCard;
