import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";
import type { WeatherApiResponse } from "@/types/weather.types";

interface WeatherDataMainProps {
  isLoading: boolean;
  location: string;
  weatherData: WeatherApiResponse | undefined;
}

const WeatherDataMain = ({
  weatherData,
  isLoading,
  location,
}: WeatherDataMainProps) => {
  return (
    <div className="text-WEATHER-neutral-0 mt-10 flex h-full w-full gap-5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <LeftDataContainer location={location} data={weatherData} />
          <RightDataContainer daily={weatherData?.daily} />
        </>
      )}
    </div>
  );
};

export default WeatherDataMain;
