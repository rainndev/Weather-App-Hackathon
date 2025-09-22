import { fetchWeather } from "@/api/weatherApi";
import { useQuery } from "@tanstack/react-query";
import { useWeatherLocation } from "@/hooks/useWeatherLocation";
import { useSearchCity } from "@/context/SearchCity";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useImperialSwitcher } from "@/context/ImperialSwitcherContext";

export const useWeatherData = () => {
  const { locationResult, city } = useSearchCity();
  const { isLoadingLocation } = useWeatherLocation(city);
  const { latitude, longitude, error: geoError } = useGeolocation();
  const { isImperial } = useImperialSwitcher();

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
    queryKey: [
      "weather",
      locationResult?.latitude,
      locationResult?.longitude,
      isImperial,
    ],
    queryFn: () => {
      return fetchWeather(
        latitudeToUse ?? undefined,
        longitudeToUse ?? undefined,
        isImperial ? "fahrenheit" : "celsius",
        isImperial ? "mph" : "kmh",
        isImperial ? "inch" : "mm",
      );
    },
    enabled: !!latitudeToUse && !!longitudeToUse,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  const isWeatherUndefined = typeof weatherData === "undefined";

  return {
    locationResult,
    weatherData,
    isLoading,
    error: error || geoError,
    isError,
    isLoadingLocation,
    isCityUsed,
    isWeatherUndefined,
  };
};
