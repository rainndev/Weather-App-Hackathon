import { useState } from "react";
import { DropdownHourlyForecast } from "./DropdownHourlyForecast";
import type { DailyForecast } from "@/types/weather.types";
import { useWeatherData } from "@/hooks/useWeatherData";
import { convertTo12HrFormat } from "@/utils/date";
import { getWeatherIcon } from "@/utils/weatherIcon";

interface RightDataContainerProps {
  daily: DailyForecast | undefined;
}

const RightDataContainer = ({ daily }: RightDataContainerProps) => {
  const [day, setDay] = useState(daily?.time[0] ?? "");

  const { hourlyDataDate } = useWeatherData(day, day);

  return (
    <div className="bg-WEATHER-neutral-800 scrollbar-hide overflow-y-auto rounded-2xl p-5">
      {/* header options */}
      <div className="flex justify-between">
        <p className="text-md font-medium">Hourly forecast</p>
        <DropdownHourlyForecast data={daily?.time} day={day} setDay={setDay} />
      </div>

      {/* hourly data  */}
      <div className="mt-4 space-y-3">
        {hourlyDataDate?.hourly?.time
          ?.sort((a, b) => a - b)
          .map((data, i) => {
            //temp
            const temp = hourlyDataDate.hourly.temperature_2m[i];
            return (
              <div
                key={i}
                className="bg-WEATHER-neutral-700 border-WEATHER-neutral-600 flex w-full items-center justify-between rounded-lg border p-2.5"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={getWeatherIcon(temp, "celsius")}
                    className="size-10 object-cover"
                    alt=""
                  />
                  <span>{convertTo12HrFormat(data)}</span>
                </div>

                <p className="text-md mr-2">{temp.toFixed(0)} °</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RightDataContainer;
