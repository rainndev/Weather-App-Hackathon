import { fetchWeather } from "@/api/weatherApi";
import { useQuery } from "@tanstack/react-query";
import { useWeatherLocation } from "./useWeatherLocation";
import { useSearchCity } from "@/context/SearchCity";

export const useWeatherData = () => {
  const { locationResult, city } = useSearchCity();
  const { isLoadingLocation } = useWeatherLocation(city);

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

  return {
    locationResult,
    weatherData,
    isLoading,
    error,
    isError,
    isLoadingLocation,
  };
};
