import { useState } from "react";

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="text-WEATHER-neutral-0 flex w-full justify-between">
      <img src="images/logo.svg" alt="logo" />

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="bg-WEATHER-neutral-800 flex items-center justify-between gap-2 rounded-md p-2 px-4"
        >
          <img
            src="/public/images/icon-units.svg"
            alt="icon-units"
            className="size-3"
          />
          <p className="text-sm">Units</p>
          <img
            src="/public/images/icon-dropdown.svg"
            alt="icon-dropdown"
            className="size-2.5"
          />
        </button>

        {/* dropdown */}
        {isDropdownOpen && (
          <div className="bg-WEATHER-neutral-800 border-WEATHER-neutral-600 absolute top-full right-0 mt-1 h-fit w-50 rounded-lg border px-4 py-2.5 shadow-2xl">
            <div className="hover:bg-WEATHER-neutral-700 -mx-2 mb-2 cursor-pointer rounded-md p-2 text-sm">
              Switch to Imperial
            </div>

            <div>
              <p className="text-WEATHER-neutral-300 mb-2 text-sm">
                Temperature
              </p>
              <h1 className="bg-WEATHER-neutral-700 -mx-2 rounded-md p-2 text-sm">
                Celsius (°C)
              </h1>
              <h1 className="-mx-2 p-2 text-sm">Fahrenheit (°F)</h1>
            </div>
            <div className="bg-WEATHER-neutral-600 -mx-2 my-2 h-px" />
            <div>
              <p className="text-WEATHER-neutral-300 mb-2 text-sm">
                Wind Speed
              </p>
              <h1 className="bg-WEATHER-neutral-700 -mx-2 rounded-md p-2 text-sm">
                km/h
              </h1>
              <h1 className="-mx-2 p-2 text-sm">mph</h1>
            </div>
            <div className="bg-WEATHER-neutral-600 -mx-2 my-2 h-px" />

            <div>
              <p className="text-WEATHER-neutral-300 mb-2 text-sm">
                Precipitation
              </p>
              <h1 className="bg-WEATHER-neutral-700 -mx-2 rounded-md p-2 text-sm">
                Milimiters (mm)
              </h1>
              <h1 className="-mx-2 p-2 text-sm">Inches (in)</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
