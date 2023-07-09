import React, { useState } from "react";
import useWeather from "./utils/weatherHook";

const App = () => {
  const [loc, setLoc] = useState("");
  const [weather, city, apiCall, error] = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall(e);
    setLoc("");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="absolute top-0 p-5 m-5 text-white text-2xl">
        Weather app
      </div>
      <div className="rounded-lg shadow-lg p-8 max-w-sm w-full space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                name="loc"
                className="py-2 pl-12 pr-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-full text-gray-400 outline-none w-[320px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute h-5 w-5 text-gray-400 top-1/2 transform -translate-y-1/2 left-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </form>
        {error && (
          <div className="bg-red-500 rounded-lg p-6 text-white flex flex-col items-center space-y-8">
            <h2 className="text-2xl font-bold">Error</h2>
            <p>{error.message}</p>
          </div>
        )}
        {city && (
          <div className="bg-white rounded-lg p-6 text-white flex flex-col items-center space-y-8 bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <div className="flex flex-col justify-center items-center text-center">
              <p>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt=""
                />
              </p>
              <p className="text-4xl font-bold">{Math.round(weather.temp)}°</p>
              <h2 className="text-2xl font-bold">{city}</h2>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-sm">Description</p>
                <p className="text-lg font-bold">{weather.descp}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-sm">Wind now</p>
                <p className="text-lg font-bold">
                  <span className="text-2xl">
                    {Math.round(Number(weather.wind))}
                  </span>
                  <span className="text-xs">km</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-sm">Humidity</p>
                <p className="text-2xl font-bold">
                  {weather.humidity}
                  <span className="text-xs">%</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="absolute bottom-0 text-white m-5 text-sm p-5">
        Powered by{" "}
        <span className="h-5 w-5 text-blue-600">
          <a href="https://openweathermap.org/">OpenWeather</a>{" "}
        </span>
        Made by Ertan - 2022
      </footer>
    </div>
  );
};

export default App;
