import { useSearchCity } from "@/context/SearchCity";
import { useWeatherLocation } from "@/hooks/useWeatherLocation";
import type { LocationResult } from "@/types/weather-location.types";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SearchBar = () => {
  const { locationResult, setLocationResult } = useSearchCity();
  const [inputCity, setInputCity] = useState("");
  const [isSelected, setSelected] = useState(false);

  const { locationData, isLoadingLocation } = useWeatherLocation(inputCity);

  return (
    <div className="bg text-WEATHER-neutral-0 mt-5 flex w-full flex-col items-center">
      <h1 className="font-bricolage text-5xl font-medium">
        How's the sky looking today?
      </h1>

      <div className="mt-12 flex w-full max-w-xl gap-3">
        {/* search bar */}
        <div className="relative w-full">
          <input
            id="search-bar"
            type="text"
            list="countries"
            value={inputCity}
            onClick={() => setSelected(true)}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Search for a place..."
            className="bg-WEATHER-neutral-800 w-full rounded-lg py-2.5 pr-5 pl-10 text-base"
          />

          <img
            src="/public/images/icon-search.svg"
            className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2"
          />

          <AnimatePresence>
            {(locationData?.results?.length ?? 0) > 0 &&
              !isLoadingLocation &&
              isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  className="bg-WEATHER-neutral-800 border-WEATHER-neutral-700 absolute z-20 mt-2 h-fit w-full cursor-pointer space-y-1 rounded-lg border p-2 shadow-2xl"
                >
                  {locationData?.results.map((location: LocationResult) => (
                    <div
                      onClick={() => {
                        setLocationResult(location);
                        setSelected(false);
                        console.log("location res ", location);
                      }}
                      className={`${locationResult?.id === location.id && "bg-WEATHER-neutral-700 border-WEATHER-neutral-600 border"} hover:bg-WEATHER-neutral-700 rounded-lg p-2`}
                    >
                      <p>
                        {location.name}, {location.country}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
          </AnimatePresence>
        </div>

        {/* search button */}
        <button className="bg-WEATHER-blue-500 text-WEATHER-neutral-200 rounded-lg px-5">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
