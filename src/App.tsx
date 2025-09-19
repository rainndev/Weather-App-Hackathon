import ErrorResponseUI from "./components/ErrorUI/ErrorResponseUI";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import WeatherDataMain from "./components/WeatherData/WeatherDataMain";
import { useWeatherData } from "./hooks/useWeatherData";

const App = () => {
  const { isError, isHourlyDataDate } = useWeatherData();

  if (isError || isHourlyDataDate) {
    return <ErrorResponseUI />;
  }
  return (
    <div className="bg-WEATHER-neutral-900 flex min-h-screen w-full justify-center p-12">
      <div className="flex h-full w-7xl flex-col items-center justify-center">
        <Navigation />

        <SearchBar />
        <WeatherDataMain />
      </div>
    </div>
  );
};

export default App;
