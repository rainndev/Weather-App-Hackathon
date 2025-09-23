import { useWeatherData } from "@/hooks/useWeatherData";
import WeatherPage from "./pages/WeatherPage";
import NavigationBar from "@/feature/navigation/NavigationBar";
import SearchBar from "@/feature/search-bar/SearchBar";
import ServerErrorPage from "./pages/ServerErrorPage";

const App = () => {
  const { isError } = useWeatherData();

  if (isError) {
    return <ServerErrorPage />;
  }

  return (
    <div className="bg-WEATHER-neutral-900 flex min-h-screen w-full justify-center p-4 sm:p-8 md:p-12">
      <div className="flex h-full w-7xl flex-col items-center justify-center">
        <NavigationBar />
        <SearchBar />
        <WeatherPage />
      </div>
    </div>
  );
};

export default App;
