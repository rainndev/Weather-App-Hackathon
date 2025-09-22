import { useWeatherData } from "@/hooks/useWeatherData";

import { formatDate, getDayOfWeek } from "../../utils/date";
import { getWeatherIcon } from "../../utils/weatherIcon";
import LoadingUI from "../ui/loading";
import { useImperialSwitcher } from "@/context/ImperialSwitcherContext";

const LeftDataContainer = () => {
  const {
    locationResult,
    isLoading,
    weatherData,
    isCityUsed,
    isWeatherUndefined,
  } = useWeatherData();
  const { isImperial } = useImperialSwitcher();
  const mockupDailyList = [...Array(7)];
  const currentTemp = +(weatherData?.current?.temperature_2m ?? 0);
  const currentDate = weatherData?.current?.time;
  const currentPHlocation = `${locationResult?.name ?? "N/A"}, ${locationResult?.country ?? "N/A"}`;

  return (
    <div className="flex-1 flex-col">
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
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-between p-6">
            <div>
              <h2 className="text-2xl font-semibold">
                {isCityUsed ? currentPHlocation : "Current Location"}
              </h2>
              <p className="text-WEATHER-neutral-200 text-md mt-1">
                {!isWeatherUndefined ? formatDate(String(currentDate)) : "N/A"}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <img
                src={getWeatherIcon(currentTemp, "celsius")}
                alt="icon weather"
                className="size-25"
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

      <div className="mt-5 flex w-full gap-5">
        {/* Feels like */}
        <div
          className={`bg-WEATHER-neutral-800 flex w-full flex-col rounded-xl p-5 ${(isLoading || isWeatherUndefined) && "animate-pulse"}`}
        >
          <p className="text-WEATHER-neutral-200">Feels Like</p>
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
          <p className="text-WEATHER-neutral-200">Humidity</p>
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
          <p className="text-WEATHER-neutral-200">Wind</p>
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
          <p className="text-WEATHER-neutral-200">Precipitation</p>
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

      {/* Daily forecast data  */}
      <div className="mt-10 flex w-full flex-col">
        <h1 className="text-md font-medium">Daily forecast</h1>

        <div className="mt-4 flex gap-3">
          {(isLoading || isWeatherUndefined) &&
            mockupDailyList.map((_, i) => (
              <div
                key={i}
                className="bg-WEATHER-neutral-800 flex w-full animate-pulse flex-col items-center rounded-xl p-3"
              >
                <p className="text-WEATHER-neutral-200 invisible">Sat</p>
                <img
                  src={getWeatherIcon(+32, "fahrenheit")}
                  className="invisible my-5 size-15"
                  alt=""
                />
                <div className="invisible flex w-full justify-between">
                  <p>25°</p>
                  <p>32°</p>
                </div>
              </div>
            ))}

          {weatherData?.daily?.time?.map((date, i) => {
            const minTemp =
              weatherData?.daily?.temperature_2m_min[i].toFixed(0);
            const maxTemp =
              weatherData?.daily?.temperature_2m_max[i].toFixed(0);

            return (
              <div
                key={i}
                className="bg-WEATHER-neutral-800 flex w-full flex-col items-center rounded-xl p-3"
              >
                <p className="text-WEATHER-neutral-200">{getDayOfWeek(date)}</p>
                <img
                  src={getWeatherIcon(+maxTemp, "fahrenheit")}
                  className="my-5 size-15"
                  alt=""
                />
                <div className="flex w-full justify-between">
                  <p>{minTemp}°</p>
                  <p>{maxTemp}°</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftDataContainer;
