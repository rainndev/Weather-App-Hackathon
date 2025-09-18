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

  const locationPH = locationData?.results?.filter(
    (data) => data.country_code === "PH",
  )[0];

  const currentPHlocation =
    `${locationPH?.name}, ${locationPH?.country}` || "Unknown Location";

  return {
    isLoadingLocation,
    locationData,
    locationPH,
    currentPHlocation,
  };
};
