import { useEffect, useState } from "react";
import WeatherDataInterface from "../config/weatherData";

//Custom hook for weather api's data to display information inside another component.
const useWeather = (cityName: string) => {
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //Checking if the location and apiKey data is successfully stored and fetching the weather api's data depending on the location.
  useEffect(() => {
    const fetchData = async (cityName: string) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setWeatherData(result);
        setError("");
      } catch (error: unknown) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
        setWeatherData(null); //clearing data fetched before
      } finally {
        setLoading(false);
      }
    };

    if (cityName) {
      fetchData(cityName);
    }
  }, [cityName]);

  return { weatherData, error, loading };
};

export default useWeather;
