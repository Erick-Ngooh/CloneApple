import { create } from "zustand";

const useMacBookStore = create((set) => {
    return {
        color: "#2E2C2E",
        scale: 0.08,
        setColor: (newColor) => {
            set({ color: newColor });
        },
        setScale: (newScale) => {
            set({scale: newScale});
        },
        reset: () => {
            set({scale: 0.08, color: "#2E2C2E"})
        }
    };
});

export default useMacBookStore;