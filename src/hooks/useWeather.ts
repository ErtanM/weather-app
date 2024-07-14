import { useEffect, useState } from "react";
//Custom hook for weather api's data to display information inside another component.
const useWeather = (cityName: string) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  //Checking if the location and apiKey data is successfully stored and fetching the weather api's data depending on the location.
  useEffect(() => {
    const fetchData = async (cityName: string) => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${cityName}&days=7`
        );
        const result = await response.json();
        setWeatherData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    if (cityName) {
      fetchData(cityName);
    }
  }, [cityName]);

  return { weatherData, error };
};

export default useWeather;
