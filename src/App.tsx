import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import WeatherDataContainer from "./components/WeatherDataContainer";

const App = () => {
  return (
    <div className="bg-WEATHER-neutral-900 flex min-h-screen w-full justify-center p-12">
      <div className="flex h-full w-7xl flex-col items-center justify-center">
        <Navigation />
        <SearchBar />
        <WeatherDataContainer />
      </div>
    </div>
  );
};

export default App;
