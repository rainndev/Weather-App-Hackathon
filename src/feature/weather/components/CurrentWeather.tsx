import { useWeatherData } from "@/hooks/useWeatherData";

import { formatDate } from "@/feature/weather/utils/date";
import { getWeatherIconFromCode } from "@/feature/weather/utils/weather-icon";
import LoadingUI from "@/components/ui/dot-loading";
import { useImperialSwitcher } from "@/context/ImperialSwitcherContext";

const CurrentWeather = () => {
  const {
    locationResult,
    isLoading,
    weatherData,
    isCityUsed,
    isWeatherUndefined,
  } = useWeatherData();
  const { isImperial } = useImperialSwitcher();
  const currentWeatherCode = +(weatherData?.current?.weather_code ?? 0);
  const currentDate = weatherData?.current?.time;
  const currentPHlocation = `${locationResult?.name ?? "N/A"}, ${locationResult?.country ?? "N/A"}`;

  return (
    <div className="@container flex-1 flex-col">
      {/* banner today summary weather */}

      <div className="relative">
        <div className="bg-WEATHER-neutral-800 flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl">
          {!isLoading ? (
            <img
              src="/public/images/bg-today-large.svg"
              className="h-full w-full object-cover"
              alt="today image bg"
            />
          ) : (
            <div className="flex flex-col items-center">
              <LoadingUI />
              <p className="text-WEATHER-neutral-200">Loading...</p>
            </div>
          )}
        </div>

        {!isLoading && (
          <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center p-6 @lg:flex-row @lg:justify-between">
            {/* current city and date */}
            <div className="flex flex-col items-center @lg:items-start">
              <h2 className="text-3xl font-semibold">
                {isCityUsed ? currentPHlocation : "Current Location"}
              </h2>
              <p className="text-WEATHER-neutral-200 text-md mt-1">
                {!isWeatherUndefined ? formatDate(String(currentDate)) : "N/A"}
              </p>
            </div>

            {/*icon and current temp */}
            <div className="mt-10 flex items-center justify-between gap-5 md:mt-0">
              <img
                src={getWeatherIconFromCode(currentWeatherCode)}
                alt="icon weather"
                className="size-20 md:size-25"
              />

              <h1 className="text-8xl font-semibold italic">
                {!isWeatherUndefined
                  ? weatherData?.current?.temperature_2m.toFixed(0)
                  : "0"}
                °
              </h1>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 grid w-full grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3">
        {/* Feels like */}
        <div
          className={`bg-WEATHER-neutral-800 flex w-full flex-col rounded-xl p-5 ${(isLoading || isWeatherUndefined) && "animate-pulse"}`}
        >
          <p className="text-WEATHER-neutral-200 text-base">Feels Like</p>
          <h1 className="mt-3 text-3xl">
            <p>
              {(!isLoading &&
                !isWeatherUndefined &&
                weatherData?.current?.apparent_temperature.toFixed(0) + "°") ||
                "-"}
            </p>
          </h1>
        </div>
        {/* Humidity */}
        <div
          className={`bg-WEATHER-neutral-800 flex w-full flex-col rounded-xl p-5 ${(isLoading || isWeatherUndefined) && "animate-pulse"}`}
        >
          <p className="text-WEATHER-neutral-200 text-base">Humidity</p>
          <h1 className="mt-3 text-3xl">
            <p>
              {(!isLoading &&
                !isWeatherUndefined &&
                weatherData?.current?.relative_humidity_2m.toFixed(0) + "%") ||
                "-"}
            </p>
          </h1>
        </div>

        {/* Wind */}
        <div
          className={`bg-WEATHER-neutral-800 ${(isLoading || isWeatherUndefined) && "animate-pulse"} flex w-full flex-col rounded-xl p-5`}
        >
          <p className="text-WEATHER-neutral-200 text-base">Wind</p>
          <h1 className="mt-3 text-3xl">
            <p>
              {(!isLoading &&
                !isWeatherUndefined &&
                weatherData?.current?.wind_speed_10m.toFixed(0) +
                  ` ${isImperial ? "mph" : "km/h"}`) ||
                "-"}
            </p>
          </h1>
        </div>

        {/* Precipitation */}
        <div
          className={`bg-WEATHER-neutral-800 ${(isLoading || isWeatherUndefined) && "animate-pulse"} flex w-full flex-col rounded-xl p-5`}
        >
          <p className="text-WEATHER-neutral-200 text-base">Precipitation</p>
          <h1 className="mt-3 text-3xl">
            <p>
              {(!isLoading &&
                !isWeatherUndefined &&
                weatherData?.current?.precipitation +
                  ` ${isImperial ? "in" : "mm"}`) ||
                "-"}
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
