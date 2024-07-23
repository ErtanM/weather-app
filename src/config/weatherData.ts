interface WeatherDataInterface {
  weather: {
    main: string;
    icon: string;
  }[];
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  wind: {
    speed: number;
  };
  dt: number;
}

export default WeatherDataInterface;
