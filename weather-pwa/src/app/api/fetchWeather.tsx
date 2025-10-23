import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || "f33a484cf794d08d0148764789aaba32";

//  Weather data interface
export interface WeatherResponse {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

export const fetchWeather = async (query: string): Promise<WeatherResponse> => {
  const { data } = await axios.get<WeatherResponse>(BASE_URL, {
    params: {
      q: query,
      units: "metric",
      appid: API_KEY, 
    },
  });

  return data;
};
