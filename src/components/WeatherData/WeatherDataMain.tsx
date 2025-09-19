import { useWeatherData } from "@/hooks/useWeatherData";
import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";

const WeatherDataMain = () => {
  const {
    locationResult,
    isLoadingLocation,
    isError,
    isLoading,
    weatherData,
    error,
  } = useWeatherData();

  const currentPHlocation = `${locationResult?.name ?? "N/A"}, ${locationResult?.country ?? "N/A"}`;

  if (isError) {
    console.error("error occured", error?.message);
  }

  if (isLoading || isLoadingLocation) {
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
