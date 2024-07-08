import React from "react";
import Navbar from "./components/navbar";
import useWeather from "./hooks/useWeather";

const apiKey = import.meta.env.VITE_API_KEY;

const App: React.FC = () => {
  const { weatherData, error } = useWeather(apiKey);
  return (
    <div className=" bg-gradient-to-b from-blue-700 to-blue-300 h-screen">
      <div className="p-[20px]">
        <Navbar />
        {error ? <p>{error}</p> : <div>{weatherData.location.name}</div>}
      </div>
    </div>
  );
};

export default App;
