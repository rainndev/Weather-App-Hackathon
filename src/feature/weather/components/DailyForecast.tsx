import { getWeatherIconFromCode } from "@/feature/weather/utils/weather-icon";
import { getDayOfWeek } from "@/feature/weather/utils/date";
import { useWeatherData } from "@/hooks/useWeatherData";
import { motion } from "motion/react";

const mockupDailyList = [...Array(7)];

const DailyForecast = () => {
  const { isLoading, weatherData, isWeatherUndefined } = useWeatherData();

  return (
    <div className="mt-10 flex w-full flex-col">
      <h1 className="text-md font-medium">Daily forecast</h1>

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3">
        {/* mockup daily forecast */}
        {(isLoading || isWeatherUndefined) &&
          mockupDailyList.map((_, i) => (
            <div
              key={i}
              className="bg-WEATHER-neutral-800 flex w-full animate-pulse flex-col items-center rounded-xl p-3"
            >
              <p className="text-WEATHER-neutral-200 invisible">Sat</p>
              <img
                src={getWeatherIconFromCode(+32)}
                className="invisible my-5 size-15"
                alt=""
              />
              <div className="invisible flex w-full justify-between">
                <p>25°</p>
                <p>32°</p>
              </div>
            </div>
          ))}

        {/* real data daily forecast */}
        {weatherData?.daily?.time?.map((date, i) => {
          const minTemp = weatherData?.daily?.temperature_2m_min[i].toFixed(0);
          const maxTemp = weatherData?.daily?.temperature_2m_max[i].toFixed(0);
          const weatherCode = weatherData?.daily?.weather_code[i];

          return (
            <div
              key={date}
              className="bg-WEATHER-neutral-800 flex w-full flex-col items-center rounded-xl p-3"
            >
              <p className="text-WEATHER-neutral-200 text-base">
                {getDayOfWeek(date)}
              </p>
              <motion.img
                initial={{
                  scale: 0.6,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  scale: 0.6,
                }}
                src={getWeatherIconFromCode(weatherCode)}
                className="my-5 size-12 md:size-15"
                alt=""
              />
              <div className="flex w-full justify-between text-base">
                <p>{minTemp}°</p>
                <p>{maxTemp}°</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
