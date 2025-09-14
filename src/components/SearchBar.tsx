import { useState } from "react";

interface SearchBarProps {
  city: string;
  setCity: (value: string) => void;
}

const SearchBar = ({ city, setCity }: SearchBarProps) => {
  const [inputCity, setInputCity] = useState("Arayat");
  console.log("city", city);
  return (
    <div className="bg text-WEATHER-neutral-0 mt-5 flex w-full flex-col items-center">
      <h1 className="font-bricolage text-5xl font-medium">
        How's the sky looking today?
      </h1>

      <div className="mt-12 flex w-full max-w-xl gap-3">
        {/* search bar */}
        <div className="relative w-full">
          <input
            type="text"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Search for a place..."
            className="bg-WEATHER-neutral-800 w-full rounded-lg py-2.5 pr-5 pl-10 text-base"
          />

          <img
            src="/public/images/icon-search.svg"
            className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2"
          />
        </div>

        {/* search button */}
        <button
          onClick={() => setCity(inputCity)}
          className="bg-WEATHER-blue-500 text-WEATHER-neutral-200 rounded-lg px-5"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
