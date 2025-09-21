import { fetchWeather } from "@/api/weatherApi";
import { useQuery } from "@tanstack/react-query";
import { useWeatherLocation } from "@/hooks/useWeatherLocation";
import { useSearchCity } from "@/context/SearchCity";
import { useGeolocation } from "@/hooks/useGeolocation";

export const useWeatherData = () => {
  const { locationResult, city } = useSearchCity();
  const { isLoadingLocation } = useWeatherLocation(city);

  const { latitude, longitude, error: geoError } = useGeolocation();

  const latitudeToUse = locationResult?.latitude || latitude;
  const longitudeToUse = locationResult?.longitude || longitude;
  const isCityUsed = !!locationResult?.latitude && !!locationResult?.longitude;

  console.log("first load weather data");
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
        latitudeToUse ?? undefined,
        longitudeToUse ?? undefined,
        "celsius",
      );
    },
    enabled: !!latitudeToUse && !!longitudeToUse,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  return {
    locationResult,
    weatherData,
    isLoading,
    error: error || geoError,
    isError,
    isLoadingLocation,
    isCityUsed,
  };
};
