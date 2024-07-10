import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import useWeather from "./hooks/useWeather";

const apiKey = import.meta.env.VITE_API_KEY;

const App: React.FC = () => {
  const { weatherData, error } = useWeather(apiKey);

  useEffect(() => {
    console.log("Weather Data:", weatherData);
    console.log("Error:", error);
  }, [weatherData, error]);

  const renderForecast = () => {
    if (
      weatherData &&
      weatherData.forecast &&
      weatherData.forecast.forecastday
    ) {
      const forecastElements = [];
      for (let i = 0; i < weatherData.forecast.forecastday.length; i++) {
        const day = weatherData.forecast.forecastday[i];
        forecastElements.push(
          <p key={i}>
            Day {i + 1} Avg Temp: {day.day.avgtemp_c}°C
          </p>
        );
      }
      return forecastElements;
    }
    return <p>Loading...</p>;
  };

  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-300 h-screen">
      <div className="p-[20px]">
        <Navbar />
        {error ? <p>{error}</p> : renderForecast()}
      </div>
    </div>
  );
};

export default App;
