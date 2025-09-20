import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";

const WeatherDataMain = () => {
  return (
    <div className="text-WEATHER-neutral-0 mt-10 grid h-175 w-full grid-cols-[1fr_35%] gap-5">
      <LeftDataContainer />
      <RightDataContainer />
    </div>
  );
};

export default WeatherDataMain;
