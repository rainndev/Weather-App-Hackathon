import type { LocationResult } from "@/types/weather-location.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStoreType {
  isShowing: boolean;
  toggleModal: () => void;
  isLocationExist: (id: number) => boolean;
  favoritesLocation: LocationResult[];
  addFavorite: (location: LocationResult) => void;
  removeFavorite: (id: number) => void;
}

export const useFavorite = create<FavoriteStoreType>()(
  persist(
    (set, get) => ({
      favoritesLocation: [],
      isShowing: false,
      toggleModal: () => set((state) => ({ isShowing: !state.isShowing })),
      isLocationExist: (id) => {
        return get().favoritesLocation.some((data) => data.id === id);
      },
      addFavorite: (location) =>
        set((state) => {
          if (state.favoritesLocation.some((data) => data.id === location.id)) {
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
