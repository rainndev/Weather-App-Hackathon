const Navigation = () => {
  return (
    <div className="text-WEATHER-neutral-0 flex w-full justify-between">
      <img src="images/logo.svg" alt="logo" />
      <button className="bg-WEATHER-neutral-800 flex items-center justify-between gap-2 rounded-md p-2 px-4">
        <img
          src="/public/images/icon-units.svg"
          alt="icon-units"
          className="size-4"
        />
        <p className="text-sm">Units</p>
        <img
          src="/public/images/icon-dropdown.svg"
          alt="icon-dropdown"
          className="size-3"
        />
      </button>
    </div>
  );
};

export default Navigation;
