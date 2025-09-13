import { useState } from "react";
import { DropdownHourlyForecast } from "./DropdownHourlyForecast";

const sampleData = [...Array(8)];

const RightDataContainer = () => {
  const [day, setDay] = useState("Sunday");

  return (
    <div className="bg-WEATHER-neutral-800 min-h-full w-[34%] rounded-2xl p-5">
      {/* header options */}
      <div className="flex justify-between">
        <p className="text-md font-medium">Hourly forecast</p>
        <DropdownHourlyForecast day={day} setDay={setDay} />

        {/* <div className="bg-WEATHER-neutral-600 text-WEATHER-neutral-200 flex items-center rounded-lg px-5 py-1.5 text-sm">
          <p>Tuesday</p>
          <span className="ml-3">
            <img
              src="/public/images/icon-dropdown.svg"
              className="size-2.5"
              alt=""
            />
          </span>
        </div> */}
      </div>

      {/* hourly data  */}
      <div className="mt-4 space-y-3">
        {sampleData.map((_, i) => (
          <div
            key={i}
            className="bg-WEATHER-neutral-700 border-WEATHER-neutral-600 flex w-full items-center justify-between rounded-lg border p-2.5"
          >
            <div className="flex items-center gap-2">
              <img
                src="/public/images/icon-overcast.webp"
                className="size-10 object-cover"
                alt=""
              />
              <span>{Math.floor(Math.random() * 12)} PM</span>
            </div>

            <p className="text-md mr-2">{Math.floor(Math.random() * 60)} °</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightDataContainer;
