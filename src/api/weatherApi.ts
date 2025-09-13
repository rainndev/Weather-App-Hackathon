import type { WeatherApiResponse } from "@/components/types/weather.types";
import axios from "axios";

const API_BASE_URL = "https://api.open-meteo.com/v1/forecast";

export type temperatureType = "fahrenheit" | "celsius";

export const fetchWeather = async (
  latitude: string,
  longitude: string,
  temperature_unit: temperatureType,
): Promise<WeatherApiResponse> => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        latitude: latitude,
        longitude: longitude,
        daily: "temperature_2m_max,temperature_2m_min",
        hourly: "temperature_2m",
        temperature_unit: temperature_unit,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
