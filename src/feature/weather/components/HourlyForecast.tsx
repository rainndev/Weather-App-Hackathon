import { useEffect, useState } from "react";
import { DropdownHourlyForecast } from "@/feature/weather/components/DropdownHourlyForecast";
import { useWeatherData } from "@/hooks/useWeatherData";
import { convertTo12HrFormat, getLongDate } from "@/feature/weather/utils/date";
import { getWeatherIconFromCode } from "@/feature/weather/utils/weather-icon";
import { AnimatePresence, motion } from "motion/react";

const mockHourlyData = [...Array(9)];

const HourlyForecast = () => {
  const { isLoading, weatherData, isWeatherUndefined } = useWeatherData();
  const [day, setDay] = useState<string | undefined>();

  useEffect(() => {
    if (weatherData) {
      setDay(weatherData.daily.time[0]);
    }
  }, [weatherData]);

  const filteredHourlyData = weatherData?.hourly.time
    .filter((data) => getLongDate(String(data)) === getLongDate(String(day)))
    .map((data) => {
      const originalIndex = weatherData.hourly.time.indexOf(data);
      const hourlyTemp = weatherData.hourly.temperature_2m[originalIndex];
      const hourlyWeatherCode = weatherData.hourly.weather_code[originalIndex];
      return {
        hourlyTime: data,
        hourlyTemp,
        hourlyWeatherCode,
      };
    });

  return (
    <div className="bg-WEATHER-neutral-800 scrollbar-hide h-150 overflow-y-auto rounded-2xl p-3 md:h-full md:p-5">
      {/* header options */}
      <div className="flex items-center justify-between">
        <p className="text-md font-medium">Hourly forecast</p>
        <DropdownHourlyForecast
          data={weatherData?.daily?.time}
          day={day}
          setDay={setDay}
        />
      </div>

      {/* hourly data  */}
      <div className="scrollbar-hide mt-4 space-y-3 overflow-y-auto">
        {isLoading || isWeatherUndefined ? (
          mockHourlyData.map((_, i) => (
            <div
              key={i}
              className="bg-WEATHER-neutral-700 border-WEATHER-neutral-600 flex w-full animate-pulse items-center justify-between rounded-lg border p-2.5"
            >
              <div className="flex items-center gap-2">
                <img
                  src={getWeatherIconFromCode(22)}
                  className="invisible size-10 object-cover"
                  alt=""
                />
                <span className="invisible">{12}</span>
              </div>

              <p className="text-md invisible mr-2">23 °</p>
            </div>
          ))
        ) : (
          <AnimatePresence mode="wait">
            {filteredHourlyData?.map((data, i) => {
              //temp
              const temp = data.hourlyTemp;
              return (
                <motion.div
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.02 * i,
                  }}
                  exit={{ opacity: 0, y: -2 }}
                  key={`${day}-${data.hourlyTime}-${data.hourlyTemp}`}
                  className="bg-WEATHER-neutral-700 border-WEATHER-neutral-600 flex w-full items-center justify-between rounded-md border p-1 md:rounded-lg md:p-2.5"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={getWeatherIconFromCode(data.hourlyWeatherCode)}
                      className="size-9 object-cover md:size-10"
                    />
                    <span className="text-base">
                      {convertTo12HrFormat(data.hourlyTime)}
                    </span>
                  </div>

                  <p className="mr-2 text-base">{temp.toFixed(0)} °</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default HourlyForecast;
