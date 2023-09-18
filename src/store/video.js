import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      stepIdUrl: "",
      setStepIdUrl: (value) => set({ stepId: value }),
    }),
    {
      name: "my-persisted-zustand", // Give your persistence a unique name
    }
  )
);

export default useStore;
