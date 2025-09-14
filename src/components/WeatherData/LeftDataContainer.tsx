import type { WeatherApiResponse } from "../../types/weather.types";
import { formatDate, getDayOfWeek } from "../../utils/date";
import { getWeatherIcon } from "../../utils/weatherIcon";

const sampleData = [...Array(4)];

interface LeftDataContainerProps {
  location: string;
  data: WeatherApiResponse | undefined;
}

const LeftDataContainer = ({ data, location }: LeftDataContainerProps) => {
  const currentTemp = +(data?.current?.temperature_2m ?? 0);
  const currentDate = data?.current?.time;

  return (
    <div className="flex-1 flex-col">
      {/* banner today summary weather */}
      <div className="relative">
        <img
          src="/public/images/bg-today-large.svg"
          className="w-full object-fill"
          alt="today image bg"
        />

        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold">{location}</h2>
            <p className="text-WEATHER-neutral-200 text-md mt-1">
              {formatDate(String(currentDate))}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <img
              src={getWeatherIcon(currentTemp, "celsius")}
              alt="icon weather"
              className="size-25"
            />

            <h1 className="text-8xl font-semibold italic">
              {data?.current?.temperature_2m}°
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-5 flex w-full gap-5">
        {sampleData.map((_, i) => (
          <div
            key={i}
            className="bg-WEATHER-neutral-800 flex w-full flex-col rounded-xl p-5"
          >
            <p className="text-WEATHER-neutral-200">Feels Like</p>
            <h1 className="mt-3 text-3xl">{data?.current?.temperature_2m}°</h1>
          </div>
        ))}
      </div>

      {/* Daily forecast data  */}
      <div className="mt-10 flex w-full flex-col">
        <h1 className="text-md font-medium">Daily forecast</h1>

        <div className="mt-4 flex gap-3">
          {data?.daily?.time?.map((date, i) => {
            const minTemp = data?.daily?.temperature_2m_min[i].toFixed(0);
            const maxTemp = data?.daily?.temperature_2m_max[i].toFixed(0);

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
