import { create } from "zustand";

export const useSearchStore = create((set) => ({
  // States
  term: "",
  // Actions
  setTerm: (term: string) => set({ term }),
}));
