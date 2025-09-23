import { useImperialSwitcher } from "@/context/ImperialSwitcherContext";
import { motion } from "motion/react";

const DropDownContent = () => {
  const { isImperial, setImperial } = useImperialSwitcher();

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      className="bg-WEATHER-neutral-800 border-WEATHER-neutral-600 absolute top-full right-0 z-10 mt-1 h-fit w-50 rounded-lg border px-4 py-2.5 shadow-2xl"
    >
      <div
        onClick={() => setImperial(!isImperial)}
        className="hover:bg-WEATHER-neutral-700 -mx-2 mb-2 cursor-pointer rounded-md p-2 text-sm"
      >
        Switch to Imperial
      </div>

      <div>
        <p className="text-WEATHER-neutral-300 mb-2 text-sm">Temperature</p>
        <h1
          className={`${!isImperial && "bg-WEATHER-neutral-700"} hover:bg-WEATHER-neutral-700 -mx-2 mb-1 cursor-pointer rounded-md p-2 text-sm transition-colors ease-in-out`}
        >
          Celsius (°C)
        </h1>
        <h1
          className={`${isImperial && "bg-WEATHER-neutral-700"} hover:bg-WEATHER-neutral-700 -mx-2 cursor-pointer rounded-md p-2 text-sm transition-colors ease-in-out`}
        >
          Fahrenheit (°F)
        </h1>
      </div>
      <div className="bg-WEATHER-neutral-600 -mx-2 my-2 h-px" />
      <div>
        <p className="text-WEATHER-neutral-300 mb-2 text-sm">Wind Speed</p>
        <h1
          className={`${!isImperial && "bg-WEATHER-neutral-700"} hover:bg-WEATHER-neutral-700 -mx-2 mb-1 cursor-pointer rounded-md p-2 text-sm transition-colors ease-in-out`}
        >
          km/h
        </h1>
        <h1
          className={`${isImperial && "bg-WEATHER-neutral-700"} hover:bg-WEATHER-neutral-700 -mx-2 cursor-pointer rounded-md p-2 text-sm transition-colors ease-in-out`}
        >
          mph
        </h1>
      </div>
      <div className="bg-WEATHER-neutral-600 -mx-2 my-2 h-px" />

      <div>
        <p className="text-WEATHER-neutral-300 mb-2 text-sm">Precipitation</p>
        <h1
          className={`${!isImperial && "bg-WEATHER-neutral-700"} hover:bg-WEATHER-neutral-700 -mx-2 mb-1 cursor-pointer rounded-md p-2 text-sm transition-colors ease-in-out`}
        >
          Milimiters (mm)
        </h1>
        <h1
          className={`${isImperial && "bg-WEATHER-neutral-700"} hover:bg-WEATHER-neutral-700 -mx-2 cursor-pointer rounded-md p-2 text-sm transition-colors ease-in-out`}
        >
          Inches (in)
        </h1>
      </div>
    </motion.div>
  );
};

export default DropDownContent;
