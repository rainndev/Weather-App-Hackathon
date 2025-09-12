const sampleData = [...Array(8)];

const RightDataContainer = () => {
  return (
    <div className="bg-WEATHER-neutral-800 min-h-full w-[30%] rounded-2xl p-5">
      {/* header options */}
      <div className="flex justify-between">
        <p className="text-md font-medium">Hourly forecast</p>
        <div className="bg-WEATHER-neutral-600 text-WEATHER-neutral-200 rounded-md px-5 py-1 text-sm">
          Tuesday
        </div>
      </div>

      {/* hourly data  */}
      <div className="mt-4 space-y-3">
        {sampleData.map((_) => (
          <div className="bg-WEATHER-neutral-700 border-WEATHER-neutral-600 flex w-full items-center justify-between rounded-lg border p-2">
            <div className="flex items-center gap-2">
              <img
                src="/public/images/icon-overcast.webp"
                className="size-8 object-cover"
                alt=""
              />
              <span>{Math.floor(Math.random() * 12)} PM</span>
            </div>

            <p className="mr-2 text-sm">{Math.floor(Math.random() * 60)} °</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightDataContainer;
