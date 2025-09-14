import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import WeatherDataMain from "./components/WeatherData/WeatherDataMain";
import { useState } from "react";
import { useWeatherData } from "./hooks/useWeatherData";

const App = () => {
  const [city, setCity] = useState("Arayat");

  const { currentPHlocation, isError, isLoading, weatherData, error } =
    useWeatherData(city);

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
          location={currentPHlocation}
          weatherData={weatherData}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default App;
