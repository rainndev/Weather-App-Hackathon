import { useWeatherData } from "@/hooks/useWeatherData";
import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";

const WeatherDataMain = () => {
  const { currentPHlocation, isError, isLoading, weatherData, error } =
    useWeatherData();

  if (isError) {
    console.error("error occured", error?.message);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("data result", weatherData);

  return (
    <div className="text-WEATHER-neutral-0 mt-10 flex h-full w-full gap-5">
      <LeftDataContainer location={currentPHlocation} data={weatherData} />
      <RightDataContainer daily={weatherData?.daily} />
    </div>
  );
};

export default WeatherDataMain;
