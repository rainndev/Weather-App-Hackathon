import { useFavorite } from "@/store/FavoriteStore";
import { FaLocationDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";

const Modal = () => {
  const { toggleModal, favoritesLocation, removeFavorite } = useFavorite();
  return (
    <div className="fixed inset-0 z-20 flex justify-center bg-black/50 p-20 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-WEATHER-neutral-800 scrollbar-hide w-full max-w-xl overflow-y-auto rounded-3xl p-7"
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
            {favoritesLocation.map((data, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                  delay: i * 0.01,
                }}
                key={data.id}
                className="bg-WEATHER-neutral-700 flex items-center rounded-lg p-4"
              >
                <FaLocationDot className="text-WEATHER-neutral-300 mr-2" />
                <div className="flex w-[90%] items-center">
                  <p className="text-sm">
                    {data.name}, {data.admin1}
                  </p>

                  {data.country && (
                    <span className="bg-WEATHER-neutral-600 text-WEATHER-neutral-300 ml-4 flex h-fit items-center justify-center rounded-sm p-1 px-3 text-xs">
                      {data.country}
                    </span>
                  )}
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => removeFavorite(data.id)}
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
