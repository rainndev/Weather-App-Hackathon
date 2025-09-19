// src/types/weather.d.ts

// Define the units for the weather data
export type WeatherUnits = {
  time: string;
  interval: string;
  temperature_2m: string;
};

// Define the structure of the current weather data
export type CurrentWeather = {
  time: number;
  interval: number;
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
};

// Define the structure of the hourly forecast
export type HourlyForecast = {
  time: number[];
  temperature_2m: number[];
};

// Define the structure of the daily forecast
export type DailyForecast = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
};

// Define the top-level API response type
export type WeatherApiResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: WeatherUnits;
  current: CurrentWeather;
  hourly_units: Omit<WeatherUnits, "interval">;
  hourly: HourlyForecast;
  daily_units: Omit<WeatherUnits, "interval"> & {
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: DailyForecast;
};
