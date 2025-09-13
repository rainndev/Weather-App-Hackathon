import { useQuery } from "@tanstack/react-query";
import LeftDataContainer from "./LeftDataContainer";
import RightDataContainer from "./RightDataContainer";
import { fetchWeather } from "@/api/weatherApi";

const WeatherDataMain = () => {
  const latitude = "15.1505";
  const longitude = "120.7697";

  const { data, isLoading } = useQuery({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => fetchWeather(latitude, longitude, "celsius"),
    refetchOnWindowFocus: false,
    staleTime: 300000, //5 mins
  });

  console.log("data response", data);

  return (
    <div className="text-WEATHER-neutral-0 mt-10 flex h-full w-full gap-5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <LeftDataContainer data={data} />
          <RightDataContainer />
        </>
      )}
    </div>
  );
};

export default WeatherDataMain;
