import CurrentWeather from "@/feature/weather/components/CurrentWeather";
import DailyForecast from "@/feature/weather/components/DailyForecast";
import HourlyForecast from "@/feature/weather/components/HourlyForecast";

const WeatherPage = () => {
  return (
    <div className="text-WEATHER-neutral-0 mt-7 grid h-175 w-full grid-cols-1 gap-5 md:mt-10 md:grid-cols-[1fr_35%]">
      <div className="flex flex-col">
        <CurrentWeather />
        <DailyForecast />
      </div>

      <HourlyForecast />
    </div>
  );
};

export default WeatherPage;
