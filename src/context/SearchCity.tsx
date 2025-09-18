import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type SearchCityContextType = {
  city: string;
  setSearchCity: (value: string) => void;
};

const SearchCityContext = createContext<SearchCityContextType | undefined>(
  undefined,
);

export const SearchCityProvider = ({ children }: PropsWithChildren) => {
  const [city, setCity] = useState("Arayat");

  const setSearchCity = (value: string) => {
    setCity(value);
  };

  return (
    <SearchCityContext value={{ city, setSearchCity }}>
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
