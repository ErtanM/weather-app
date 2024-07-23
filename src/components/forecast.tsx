import React, { useState } from "react";
import useWeather from "../hooks/useWeather";
import WeatherCard from "./weatherCard";
import SearchBar from "./searchBar";

const Forecast: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const { weatherData, error, loading } = useWeather(result);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(cityName);
    console.log(weatherData);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCityName(e.target.value);
    setResult("");
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col mb-auto md:w-[500px] bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <SearchBar
        onSubmit={handleSubmit}
        onChange={handleChange}
        cityName={cityName}
      />
      {error ? (
        <p>{error}</p>
      ) : (
        weatherData && (
          <WeatherCard
            icon={weatherData.weather[0].icon}
            degree={weatherData.main.temp}
            location={weatherData.name}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            country={weatherData.sys.country}
            weatherDate={weatherData.dt}
          />
        )
      )}
    </div>
  );
};

export default Forecast;
