import type { LocationResult } from "@/types/weather-location.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStoreType {
  isShowing: boolean;
  toggleModal: () => void;
  favoritesLocation: LocationResult[];
  addFavorite: (location: LocationResult) => void;
  removeFavorite: (id: number) => void;
}

export const useFavorite = create<FavoriteStoreType>()(
  persist(
    (set) => ({
      isShowing: false,
      toggleModal: () => set((state) => ({ isShowing: !state.isShowing })),
      favoritesLocation: [],
      addFavorite: (location) =>
        set((state) => {
          if (state.favoritesLocation.includes(location)) {
            return {
              favoritesLocation: state.favoritesLocation,
            };
          }

          return {
            favoritesLocation: [location, ...state.favoritesLocation],
          };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favoritesLocation: state.favoritesLocation.filter(
            (location) => location.id != id,
          ),
        })),
    }),
    {
      name: "favorite-storage",
    },
  ),
);
