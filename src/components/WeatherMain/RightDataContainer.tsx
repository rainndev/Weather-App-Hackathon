import { useEffect, useState } from "react";
import { DropdownHourlyForecast } from "./DropdownHourlyForecast";
import { useWeatherData } from "@/hooks/useWeatherData";
import { convertTo12HrFormat, getLongDate } from "@/utils/date";
import { getWeatherIcon } from "@/utils/weatherIcon";
import { AnimatePresence, motion } from "motion/react";

const mockHourlyData = [...Array(9)];

const RightDataContainer = () => {
  const { isLoading, weatherData } = useWeatherData();
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
      return {
        hourlyTime: data,
        hourlyTemp,
      };
    });

  return (
    <div className="bg-WEATHER-neutral-800 scrollbar-hide overflow-y-auto rounded-2xl p-5">
      {/* header options */}
      <div className="flex justify-between">
        <p className="text-md font-medium">Hourly forecast</p>
        <DropdownHourlyForecast
          data={weatherData?.daily?.time}
          day={day}
          setDay={setDay}
        />
      </div>

      {/* hourly data  */}
      <div className="mt-4 space-y-3">
        {isLoading ? (
          mockHourlyData.map((_, i) => (
            <div
              key={i}
              className="bg-WEATHER-neutral-700 border-WEATHER-neutral-600 flex w-full animate-pulse items-center justify-between rounded-lg border p-2.5"
            >
              <div className="flex items-center gap-2">
                <img
                  src={getWeatherIcon(22, "celsius")}
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
                  className="bg-WEATHER-neutral-700 border-WEATHER-neutral-600 flex w-full items-center justify-between rounded-lg border p-2.5"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={getWeatherIcon(temp, "celsius")}
                      className="size-10 object-cover"
                    />
                    <span>{convertTo12HrFormat(data.hourlyTime)}</span>
                  </div>

                  <p className="text-md mr-2">{temp.toFixed(0)} °</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default RightDataContainer;
