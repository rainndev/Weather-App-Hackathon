import { fetchWeather, fetchWeatherWithDate } from "@/api/weatherApi";
import { useQuery } from "@tanstack/react-query";
import { useWeatherLocation } from "./useWeatherLocation";
import { useSearchCity } from "@/context/SearchCity";

export const useWeatherData = (startDate?: string, endDate?: string) => {
  const { locationResult, city } = useSearchCity();
  const { isLoadingLocation, locationData } = useWeatherLocation(city);

  // 2. Fetch weather data only when location is ready
  const {
    data: weatherData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["weather", locationResult?.latitude, locationResult?.longitude],
    queryFn: () => {
      return fetchWeather(
        locationResult?.latitude,
        locationResult?.longitude,
        "celsius",
      );
    },
    enabled: !!locationResult?.latitude,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  const {
    data: hourlyDataDate,
    isLoading: isHourlyDataDateLoading,
    error: hourlyDataDateError,
    isError: isHourlyDataDate,
  } = useQuery({
    queryKey: [
      "weather-data-x-date",
      locationResult?.latitude,
      locationResult?.longitude,
      startDate,
      endDate,
    ],
    queryFn: () => {
      return fetchWeatherWithDate(
        startDate,
        endDate,
        locationResult?.latitude,
        locationResult?.longitude,
        "celsius",
      );
    },
    enabled: !!locationData?.results?.length,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  return {
    locationResult,
    weatherData,
    isLoading,
    error,
    isError,
    isLoadingLocation,
    hourlyDataDate,
    isHourlyDataDateLoading,
    hourlyDataDateError,
    isHourlyDataDate,
  };
};
