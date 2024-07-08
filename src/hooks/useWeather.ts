import React, { useEffect, useState } from "react";
const BASE_API = import.meta.env.VITE_API_KEY;

interface Location {
  lat: string;
  lon: string;
}

const useWeather = (apiKey: string) => {
  const [location, setLocation] = useState<Location>({ lat: "", lon: "" });

  const [weatherData, setWeatherData] = useState<any>({});

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude.toFixed(4).toString(),
        lon: position.coords.longitude.toFixed(4).toString(),
      });
    });
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchData(location.lat, location.lon);
    }

    console.log(weatherData);
  }, [location]);

  const fetchData = async (lat: string, lon: string) => {
    await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${BASE_API}&q=${lat},${lon}&days=3`
    )
      .then((res) => res.json())
      .then((result) => setWeatherData(result))
      .catch((err) => setError(err));
  };

  return { weatherData, error };
};

export default useWeather;
