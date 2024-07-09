import { useEffect, useState } from "react";
const BASE_API = import.meta.env.VITE_API_KEY;

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
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude.toFixed(4).toString(),
        lon: position.coords.longitude.toFixed(4).toString(),
      });
    });
  }, []);

  //Checking if the location data is successfully stored and fetching the weather api's data depending on the location.
  useEffect(() => {
    if (location.lat && location.lon) {
      fetchData(location.lat, location.lon);
    }

    // console.log(weatherData);
  }, [location]);

  //Fetching function to be used inside useEffect.
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
