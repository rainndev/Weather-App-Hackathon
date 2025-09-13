import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import WeatherDataMain from "./components/WeatherData/WeatherDataMain";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-WEATHER-neutral-900 flex min-h-screen w-full justify-center p-12">
        <div className="flex h-full w-7xl flex-col items-center justify-center">
          <Navigation />
          <SearchBar />
          <WeatherDataMain />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
