import { useEffect, useState } from "react";

//Type for geolocation's info. Altho it's Number initially, fixed to String to use it inside fetch.
interface Location {
  lat: string;
  lon: string;
}

//Custom hook for weather api's data to display information inside another component.
const useWeather = (apiKey: string) => {
  const [location, setLocation] = useState<Location>({ lat: "", lon: "" });

  const [weatherData, setWeatherData] = useState<any>({});

  const [error, setError] = useState<string | null>(null);

  //Getting user's location coordinates before fetching.
  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      setLocation({
        lat: position.coords.latitude.toFixed(4),
        lon: position.coords.longitude.toFixed(4),
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  //Checking if the location and apiKey data is successfully stored and fetching the weather api's data depending on the location.
  useEffect(() => {
    const fetchData = async (lat: string, lon: string) => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=3`
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

    if (location.lat && location.lon) {
      fetchData(location.lat, location.lon);
    }
  }, [location, apiKey]);

  return { weatherData, error };
};

export default useWeather;
