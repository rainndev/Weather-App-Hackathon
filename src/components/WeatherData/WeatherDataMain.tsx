import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";

const WeatherDataMain = () => {
  return (
    <div className="text-WEATHER-neutral-0 mt-10 flex h-full w-full gap-5">
      <LeftDataContainer />
      <RightDataContainer />
    </div>
  );
};

export default WeatherDataMain;
