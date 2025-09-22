import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";

const WeatherDataMain = () => {
  return (
    <div className="text-WEATHER-neutral-0 mt-7 grid h-175 w-full grid-cols-1 gap-5 md:mt-10 md:grid-cols-[1fr_35%]">
      <LeftDataContainer />
      <RightDataContainer />
    </div>
  );
};

export default WeatherDataMain;
