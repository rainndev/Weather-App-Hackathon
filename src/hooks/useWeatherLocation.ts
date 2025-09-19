import { fetchLocation } from "@/api/weatherApi";
import { useQuery } from "@tanstack/react-query";

export const useWeatherLocation = (city: string) => {
  // 1. Fetch location data
  const { data: locationData, isLoading: isLoadingLocation } = useQuery({
    queryKey: ["location", city],
    queryFn: () => fetchLocation(city),
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  return {
    isLoadingLocation,
    locationData,
    currentPHlocation: "Unknown",
  };
};
