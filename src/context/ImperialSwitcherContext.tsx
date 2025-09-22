import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

type ImperialSwitcherContextType = {
  isImperial: boolean;
  setImperial: Dispatch<SetStateAction<boolean>>;
};

const ImperialSwitcherContext = createContext<
  ImperialSwitcherContextType | undefined
>(undefined);

export const ImperialSwitcherProvider = ({ children }: PropsWithChildren) => {
  const [isImperial, setImperial] = useState(false);

  return (
    <ImperialSwitcherContext
      value={{
        isImperial,
        setImperial,
      }}
    >
      {children}
    </ImperialSwitcherContext>
  );
};

export const useImperialSwitcher = () => {
  const ctx = useContext(ImperialSwitcherContext);

  if (!ctx) {
    throw new Error(
      "useImperialSwitcher must be used inside ImperialSwitcherContext",
    );
  }

  return ctx;
};
