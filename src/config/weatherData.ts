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
  visibility: number;
  wind: {
    speed: number;
  };
  dt: number;
}

export default WeatherDataInterface;
