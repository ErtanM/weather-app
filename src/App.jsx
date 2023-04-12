import React, { useState } from "react";
import useWeather from "./utils/weatherHook";

const App = () => {
  const [loc, setLoc] = useState("");
  const [weather, city, apiCall] = useWeather();

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
              placeholder="City"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              name="loc"
              className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              Search
            </button>
          </div>
        </form>
        {city && (
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-xl font-medium">{city}</h2>
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 text-lg">Temperature:</p>
              <p className="text-4xl font-medium">{Math.round(weather.temp)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 text-lg">Feels like:</p>
              <p className="text-lg font-medium">
                {Math.round(weather.feels_like)}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 text-lg">Humidity:</p>
              <p className="text-lg font-medium">{weather.humidity}</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 text-lg">Description:</p>
              <p className="text-lg font-medium">{weather.descp}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
