import { fetchLocation } from "@/api/weatherApi";
import { useQuery } from "@tanstack/react-query";

export const useWeatherLocation = (city: string) => {
  // 1. Fetch location data
  const locationData = useQuery({
    queryKey: ["location", city],
    queryFn: () => fetchLocation(city),
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  const locationPH = locationData?.data?.results?.filter(
    (data) => data.country_code === "PH",
  )[0];

  const currentPHlocation =
    `${locationPH?.name}, ${locationPH?.country}` || "Unknown Location";

  return {
    locationData,
    locationPH,
    currentPHlocation,
  };
};
