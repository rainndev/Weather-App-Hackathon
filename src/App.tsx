import { useQuery } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import WeatherDataMain from "./components/WeatherData/WeatherDataMain";
import { useState } from "react";
import { fetchLocation, fetchWeather } from "./api/weatherApi";

const App = () => {
  const [city, setCity] = useState("Arayat");

  // 1. Fetch location data
  const locationData = useQuery({
    queryKey: ["location", city],
    queryFn: () => fetchLocation(city),
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  const locationResult = locationData?.data?.results?.filter(
    (data) => data.country_code === "PH",
  )[0];

  const currentlocation =
    `${locationResult?.name}, ${locationResult?.country}` || "Unknown Location";

  // 2. Fetch weather data only when location is ready
  const {
    data: weatherData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => {
      const latitude = locationResult?.latitude;
      const longitude = locationResult?.longitude;

      return fetchWeather(latitude, longitude, "celsius");
    },
    enabled: !!locationData.data?.results?.length,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  if (isError) {
    console.error("error occured", error?.message);
  }

  console.log("data result", weatherData);

  return (
    <div className="bg-WEATHER-neutral-900 flex min-h-screen w-full justify-center p-12">
      <div className="flex h-full w-7xl flex-col items-center justify-center">
        <Navigation />
        <SearchBar city={city} setCity={setCity} />
        <WeatherDataMain
          location={currentlocation}
          weatherData={weatherData}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default App;
