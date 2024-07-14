import React, { useState } from "react";
import useWeather from "./useWeather";

//Create form component and data showing component with specific props

const Forecast: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const { weatherData, error } = useWeather(result);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(cityName);
    console.log(weatherData);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCityName(e.target.value);
    setResult("");
  }

  const renderForecast = () => {
    if (weatherData) {
      return (
        <>
          <div>
            <h1>
              {weatherData.location.name}, {weatherData.location.country}
            </h1>
          </div>
          <div>
            <h2>{weatherData.location.localtime}</h2>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={cityName} onChange={(e) => handleChange(e)} />
        <button>Seach</button>
      </form>
      {error ? <p>{error}</p> : renderForecast()}
    </div>
  );
};

export default Forecast;
