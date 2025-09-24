import { useFavorite } from "@/store/FavoriteStore";
import { FaLocationDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { useSearchCity } from "@/context/SearchCity";

const Modal = () => {
  const { toggleModal, favoritesLocation, removeFavorite } = useFavorite();
  const { setLocationResult } = useSearchCity();
  return (
    <div className="fixed inset-0 z-20 flex justify-center bg-black/50 p-4 backdrop-blur-xs sm:p-10 md:p-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-WEATHER-neutral-800 scrollbar-hide w-full max-w-xl overflow-y-auto rounded-xl p-5 shadow-2xl md:rounded-3xl md:p-7"
      >
        <div className="flex justify-between">
          <h1 className="font-bricolage mb-5 text-3xl font-medium">
            Favorites
          </h1>
          <div onClick={toggleModal}>
            <IoClose className="size-7 cursor-pointer" />
          </div>
        </div>

        <AnimatePresence>
          <div className="space-y-2">
            {favoritesLocation.map((location, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                  delay: i * 0.01,
                }}
                key={location.id}
                className="bg-WEATHER-neutral-700 hover:bg-WEATHER-neutral-800 border-WEATHER-neutral-700 hover:border-WEATHER-neutral-600 flex cursor-pointer items-center rounded-lg border-2 pr-4 transition-colors ease-in-out"
              >
                <div className="flex w-full items-center p-3 md:p-4">
                  <FaLocationDot className="text-WEATHER-neutral-300 mr-2" />
                  <div
                    onClick={() => {
                      setLocationResult(location);
                      toggleModal();
                    }}
                    className="bg ml-2 flex w-[90%] flex-col items-start md:ml-0 md:flex-row md:items-center"
                  >
                    <p className="text-sm">
                      {location.name}, {location.admin1}
                    </p>

                    {location.country && (
                      <span className="bg-WEATHER-neutral-600 text-WEATHER-neutral-300 mt-1 flex h-fit items-center justify-center rounded-sm p-1 px-3 text-center text-xs transition-colors ease-in-out md:mt-0 md:ml-4">
                        {location.country}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => removeFavorite(location.id)}
                >
                  <FaTrash className="text-WEATHER-neutral-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Modal;
