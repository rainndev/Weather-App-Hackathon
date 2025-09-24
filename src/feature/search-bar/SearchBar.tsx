import { useSearchCity } from "@/context/SearchCity";
import { useWeatherLocation } from "@/hooks/useWeatherLocation";
import type { LocationResult } from "@/types/weather-location.types";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Loading from "@/feature/search-bar/components/Loading";
import ItemResult from "./components/ItemResult";
import { FaRegBookmark } from "react-icons/fa6";
import { useFavorite } from "@/store/FavoriteStore";

const SearchBar = () => {
  const { locationResult, setLocationResult } = useSearchCity();
  const [inputCity, setInputCity] = useState("");
  const [isSelected, setSelected] = useState(false);
  const { locationData, isLoadingLocation } = useWeatherLocation(inputCity);
  const { toggleModal, addFavorite, isLocationExist } = useFavorite();

  return (
    <div className="bg text-WEATHER-neutral-0 flex w-full flex-col items-center">
      <h1 className="font-bricolage mt-10 text-center text-5xl font-medium">
        How's the sky looking today?
      </h1>

      <div className="mt-12 flex w-full max-w-xl flex-col gap-3 md:flex-row">
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
            {/* Loading */}
            {isLoadingLocation && <Loading />}

            {/* Result  */}
            {(locationData?.results?.length ?? 0) > 0 &&
              !isLoadingLocation &&
              isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="bg-WEATHER-neutral-800 border-WEATHER-neutral-700 absolute z-20 mt-2 h-fit w-full cursor-pointer space-y-1 rounded-lg border p-2 shadow-2xl"
                >
                  {locationData?.results.map((location: LocationResult) => (
                    <ItemResult
                      locationItem={location}
                      locationResult={locationResult}
                      isLocationExist={isLocationExist}
                      onClickItem={() => {
                        setLocationResult(location);
                        setSelected(false);
                        console.log("location res ", location);
                      }}
                      onClickFavorite={() => addFavorite(location)}
                    />
                  ))}
                </motion.div>
              )}
          </AnimatePresence>
        </div>

        <div className="flex">
          {/* search button */}
          <button className="bg-WEATHER-blue-500 hover:bg-WEATHER-blue-700 text-WEATHER-neutral-200 z-5 w-full cursor-pointer rounded-lg px-5 py-2 text-base font-medium transition-colors ease-in-out">
            Search
          </button>

          {/* bookmark button */}
          <div
            onClick={toggleModal}
            className="bg-WEATHER-neutral-800 hover:bg-WEATHER-neutral-600 text-WEATHER-neutral-200 flex h-full w-fit -translate-x-1.5 cursor-pointer items-center justify-center gap-2 rounded-tr-lg rounded-br-lg px-4 py-2"
          >
            <p className="invisible w-0">&nbsp;</p>
            <FaRegBookmark className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
