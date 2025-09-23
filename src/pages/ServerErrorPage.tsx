const ServerErrorPage = () => {
  return (
    <div className="text-WEATHER-neutral-0 mt-10 flex min-h-screen w-full flex-col items-center justify-start p-8">
      <img
        src="/public/images/icon-error.svg"
        alt="error-icon"
        className="size-8"
      />
      <h1 className="font-bricolage mt-5 text-5xl font-semibold">
        Something went wrong
      </h1>
      <p className="text-WEATHER-neutral-300 mt-5 text-lg">
        We couldn't connect to the server (API error). Please try again in a few
        moments
      </p>
      <button className="bg-WEATHER-neutral-800 mt-4 flex items-center gap-2 rounded-sm p-2 px-4 text-sm">
        <img
          src="/public/images/icon-retry.svg"
          alt="retry-button"
          className="size-4"
        />
        <p>Retry</p>
      </button>
    </div>
  );
};

export default ServerErrorPage;
