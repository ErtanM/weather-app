import React from "react";
import Forecast from "./components/forecast";

const App: React.FC = () => {
  return (
    <div className="h-screen md:flex md:items-center p-[20px] flex flex-col text-center gap-5">
      <p className="text-2xl text-gray-700 mb-auto">Weather App</p>
      <Forecast />
      <p className=" text-gray-700 font-thin">updated by Ertan 2024</p>
    </div>
  );
};

export default App;
