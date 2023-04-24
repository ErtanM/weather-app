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
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              name="loc"
              className="flex-grow py-2 px-4 bg-gray-800 border border-gray-700 rounded-full text-gray-400 outline-none"
            />
            <button className="ml-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>
        {error && (
          <div className="bg-red-500 rounded-lg p-6 text-white flex flex-col items-center space-y-8">
            <h2 className="text-2xl font-bold">Error</h2>
            <p>{error.message}</p>
          </div>
        )}
        {city && (
          <div className="bg-gray-800 rounded-lg p-6 text-white flex flex-col items-center space-y-8">
            <h2 className="text-2xl font-bold">{city}</h2>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-sm">Temperature</p>
                <p className="text-lg font-bold">{Math.round(weather.temp)}°</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-sm">Feels like</p>
                <p className="text-lg font-bold">
                  {Math.round(weather.feels_like)}°
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-sm">Humidity</p>
                <p className="text-lg font-bold">{weather.humidity}%</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-400 text-sm">Description</p>
              <p className="text-lg font-bold">{weather.descp}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
