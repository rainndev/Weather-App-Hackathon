import type { LocationResponse } from "@/types/weather-location.types";
import type { WeatherApiResponse } from "@/types/weather.types";
import axios from "axios";

const API_BASE_URL = "https://api.open-meteo.com/v1/forecast";
const API_LOCATION_BASE_URL = "https://geocoding-api.open-meteo.com/v1";

export type temperatureType = "fahrenheit" | "celsius";
export type windSpeedType = "kmh" | "mph";
export type precipitationType = "mm" | "inch";

export const fetchWeather = async (
  latitude: number | undefined,
  longitude: number | undefined,
  temperature_unit: temperatureType,
  wind_speed_unit: windSpeedType,
  precipitation_unit: precipitationType,
): Promise<WeatherApiResponse> => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        latitude,
        longitude,
        daily: "temperature_2m_max,temperature_2m_min,weather_code",
        hourly: "temperature_2m,weather_code",
        temperature_unit,
        wind_speed_unit,
        precipitation_unit,
        current:
          "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code",
      },
    });

    console.log("data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchLocation = async (
  city: string,
): Promise<LocationResponse> => {
  try {
    const response = await axios.get(`${API_LOCATION_BASE_URL}/search`, {
      params: {
        name: city,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
