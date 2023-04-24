// //Create custom hook here to fetch data.
// import { useState, useCallback } from "react";
// import axios from "axios";

// const useWeather = () => {
//   const [weather, setWeather] = useState("");
//   const [city, setCity] = useState("");

//   const apiCall = useCallback(async (e) => {
//     e.preventDefault();
//     const loc = e.target.elements.loc.value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${
//       import.meta.env.VITE_API_KEY
//     }&units=metric`;
//     const req = axios.get(url);
//     const res = await req;
//     setWeather({
//       descp: res.data.weather[0].main,
//       temp: res.data.main.temp,
//       city: res.data.name,
//       feels_like: res.data.main.feels_like,
//       humidity: res.data.main.humidity,
//       press: res.data.main.pressure,
//     });
//     setCity(res.data.name);

//     console.log(res.data);
//   }, []);

//   return [weather, city, apiCall];
// };

// export default useWeather;
import { useState, useCallback } from "react";
import axios from "axios";

const useWeather = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const apiCall = useCallback(async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`;

    try {
      const req = axios.get(url);
      const res = await req;
      setWeather({
        descp: res.data.weather[0].main,
        temp: res.data.main.temp,
        city: res.data.name,
        feels_like: res.data.main.feels_like,
        humidity: res.data.main.humidity,
        press: res.data.main.pressure,
      });
      setCity(res.data.name);
      setError("");
    } catch (err) {
      setError("Unable to retrieve weather data for the provided location.");
    }

    console.log(res.data);
  }, []);

  return [weather, city, apiCall, error];
};

export default useWeather;
