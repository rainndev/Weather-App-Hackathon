import type { LocationResult } from "@/types/weather-location.types";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

interface ItemResultProps {
  onClickItem: () => void;
  onClickFavorite: () => void;
  isLocationExist: (id: number) => boolean;
  locationItem: LocationResult;
  locationResult: LocationResult | undefined;
}

const ItemResult = ({
  onClickItem,
  onClickFavorite,
  locationResult,
  isLocationExist,
  locationItem,
}: ItemResultProps) => {
  return (
    <div
      key={locationItem.id}
      className={`flex ${locationResult?.id === locationItem.id && "bg-WEATHER-neutral-700 border-WEATHER-neutral-600 border"} hover:bg-WEATHER-neutral-700 items-center justify-between rounded-lg p-2 px-2.5`}
    >
      <div onClick={onClickItem} className="flex w-[90%] items-center">
        <p className="text-sm">
          {locationItem.name}, {locationItem.admin1}
        </p>

        {locationItem.country && (
          <span className="bg-WEATHER-neutral-600 text-WEATHER-neutral-300 ml-2 flex h-fit items-center justify-center rounded-sm p-1 px-3 text-xs">
            {locationItem.country}
          </span>
        )}
      </div>

      <div onClick={onClickFavorite} className="p-1.5">
        {isLocationExist(locationItem.id) ? (
          <FaBookmark className="text-WEATHER-neutral-300 size-3.5" />
        ) : (
          <FaRegBookmark className="text-WEATHER-neutral-300 size-3.5" />
        )}
      </div>
    </div>
  );
};

export default ItemResult;
