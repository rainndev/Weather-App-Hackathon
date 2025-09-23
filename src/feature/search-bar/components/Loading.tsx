const Loading = () => {
  return (
    <div className="bg-WEATHER-neutral-800 border-WEATHER-neutral-700 absolute z-20 mt-2 flex h-fit w-full cursor-pointer items-center gap-3 rounded-lg border p-3 shadow-2xl">
      <img
        src="/public/images/icon-loading.svg"
        alt="loading"
        className="animate-spin object-cover"
      />
      <p className="text-sm">Search in progress</p>
    </div>
  );
};

export default Loading;
