import type { LocationResult } from "@/types/weather-location.types";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

type SearchCityContextType = {
  locationResult: LocationResult | undefined;
  city: string;
  setLocationResult: Dispatch<SetStateAction<LocationResult | undefined>>;
  setSearchCity: Dispatch<SetStateAction<string>>;
};

const SearchCityContext = createContext<SearchCityContextType | undefined>(
  undefined,
);

export const SearchCityProvider = ({ children }: PropsWithChildren) => {
  const [city, setSearchCity] = useState("Arayat");
  const [locationResult, setLocationResult] = useState<
    LocationResult | undefined
  >();

  return (
    <SearchCityContext
      value={{
        locationResult,
        setLocationResult,
        city,
        setSearchCity,
      }}
    >
      {children}
    </SearchCityContext>
  );
};

export const useSearchCity = () => {
  const ctx = useContext(SearchCityContext);

  if (!ctx) {
    throw new Error("useSearchCity must be used inside SearchCityContext");
  }

  return ctx;
};
