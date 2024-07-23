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
  visibility: number;
}
const WeatherCard: React.FC<WeatherCardProps> = ({
  icon,
  degree,
  location,
  humidity,
  windSpeed,
  country,
  weatherDate,
  visibility,
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

  const formattedVisibility = visibility / 1000;

  return (
    <div className="p-[10px] flex flex-col">
      <div className="flex flex-col items-start gap-3">
        <p className="text-lg font-bold">
          {location}, {country}
        </p>
        <span className="text-xs text-gray-400">{formattedDate}</span>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather Icon"
        />
        <p className="text-3xl">{degree.toFixed(0)} °C</p>
      </div>
      <div className="flex gap-5 justify-center">
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed:{windSpeed}m/s</p>
        <p>Wind Speed:{formattedVisibility}km</p>
      </div>
    </div>
  );
};

export default WeatherCard;
