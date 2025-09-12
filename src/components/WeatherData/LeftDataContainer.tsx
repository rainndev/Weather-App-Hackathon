const LeftDataContainer = () => {
  return (
    <div className="flex-1">
      <div className="relative">
        <img
          src="/public/images/bg-today-large.svg"
          className="w-full object-fill"
          alt="today image bg"
        />

        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold">Berlin, Germany</h2>
            <p className="text-WEATHER-neutral-200 text-md mt-1">
              Tuesday, Aug 5, 2025
            </p>
          </div>

          <div className="flex items-center gap-5">
            <img
              src="/public/images/icon-sunny.webp"
              alt="icon weather"
              className="size-25"
            />

            <h1 className="text-8xl font-semibold italic">68°</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDataContainer;
