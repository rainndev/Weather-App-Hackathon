import { fetchWeather, fetchWeatherWithDate } from "@/api/weatherApi";
import { useQuery } from "@tanstack/react-query";
import { useWeatherLocation } from "./useWeatherLocation";

export const useWeatherData = (
  city: string,
  startDate?: string,
  endDate?: string,
) => {
  const { locationData, locationPH, currentPHlocation } =
    useWeatherLocation(city);

  // 2. Fetch weather data only when location is ready
  const {
    data: weatherData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => {
      const latitude = locationPH?.latitude;
      const longitude = locationPH?.longitude;

      return fetchWeather(latitude, longitude, "celsius");
    },
    enabled: !!locationData.data?.results?.length,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  const {
    data: hourlyDataDate,
    isLoading: isHourlyDataDateLoading,
    error: hourlyDataDateError,
    isError: isHourlyDataDate,
  } = useQuery({
    queryKey: ["weather-data-x-date", city, startDate, endDate],
    queryFn: () => {
      const latitude = locationPH?.latitude;
      const longitude = locationPH?.longitude;

      return fetchWeatherWithDate(
        startDate,
        endDate,
        latitude,
        longitude,
        "celsius",
      );
    },
    enabled: !!locationData.data?.results?.length,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  return {
    weatherData,
    currentPHlocation,
    isLoading,
    error,
    isError,
    hourlyDataDate,
    isHourlyDataDateLoading,
    hourlyDataDateError,
    isHourlyDataDate,
  };
};
