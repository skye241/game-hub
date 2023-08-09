import { create } from "zustand";

interface GameQuery {
  genre?: number;
  platform?: number;
  sortOrder?: string;
  search?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  updateGenre: (genre: number | undefined) => void;
  updatePlatform: (platform: number | undefined) => void;
  updateSortOrder: (sortOrder: string) => void;
  updateSearch: (search: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    count: 20,
  } as GameQuery,
  updateGenre: (genre) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genre } })),
  updatePlatform: (platform) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platform } })),
  updateSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  updateSearch: (search) => set(() => ({ gameQuery: { search } })),
}));

export default useGameQueryStore;
