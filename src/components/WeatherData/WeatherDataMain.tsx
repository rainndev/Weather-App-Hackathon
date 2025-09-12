import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";

const WeatherDataMain = () => {
  return (
    <div className="mt-10 flex min-h-screen w-full gap-5">
      <LeftDataContainer />
      <RightDataContainer />
    </div>
  );
};

export default WeatherDataMain;
