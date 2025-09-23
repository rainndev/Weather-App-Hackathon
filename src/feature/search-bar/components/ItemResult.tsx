import type { LocationResult } from "@/types/weather-location.types";

interface ItemResultProps {
  onClickItem: () => void;
  locationItem: LocationResult;
  locationResult: LocationResult | undefined;
}

const ItemResult = ({
  onClickItem,
  locationResult,
  locationItem,
}: ItemResultProps) => {
  return (
    <div
      key={locationItem.id}
      onClick={onClickItem}
      className={`flex ${locationResult?.id === locationItem.id && "bg-WEATHER-neutral-700 border-WEATHER-neutral-600 border"} hover:bg-WEATHER-neutral-700 items-center rounded-lg p-2`}
    >
      <p className="text-sm">
        {locationItem.name}, {locationItem.admin1}
      </p>

      {locationItem.country && (
        <span className="bg-WEATHER-neutral-600 text-WEATHER-neutral-300 ml-2 flex h-fit items-center justify-center rounded-sm p-1 px-3 text-xs">
          {locationItem.country}
        </span>
      )}
    </div>
  );
};

export default ItemResult;
