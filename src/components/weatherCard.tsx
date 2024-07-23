import React from "react";
import WeatherDataInterface from "../config/weatherData";

interface WeatherCardProps {
  icon: string;
  degree: number;
  location: string;
  humidity: number;
  windSpeed: number;
  country: string;
  weatherDate: number;
}
const WeatherCard: React.FC<WeatherCardProps> = ({
  icon,
  degree,
  location,
  humidity,
  windSpeed,
  country,
  weatherDate,
}) => {
  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formattedDate = convertTimestamp(weatherDate);

  return (
    <div className="p-[10px]">
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather Icon"
        />
        <p>{degree} °C</p>
        <p>{formattedDate}</p>
        <p>
          {location}, {country}
        </p>
      </div>
      <div>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed:{windSpeed}m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
