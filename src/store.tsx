import create from "zustand";

type State = {
  athletes: string[];
  addAthlete: (athlete: string) => void;
  cookies: string[];
};

const useStore = create<State>((set) => ({
  athletes: ["Michael Jordan", "Lionel Messi", "Lamar Jackson", "Juan Soto"],
  addAthlete: (athlete: string) =>
    set((state) => ({
      athletes: [...state.athletes, athlete],
    })),
  cookies: ["chocolate ", "peanut butter ", "sugar "],
}));

export default useStore;
