import {create} from "zustand";

export const useTimerStore = create((set) => ({
    isRunning: false,
    time: 0,
    start: () => set({isRunning: true}),
    stop: () => set({isRunning: false}),
    incrementTime: () => set((state) => ({time: state.time + 1})),
}));

// Initialize the timer interval
let timerInterval;

// Subscribe to the isRunning state and start/stop the timer
useTimerStore.subscribe(
    (isRunning) => {
        if (isRunning) {
            timerInterval = setInterval(useTimerStore.getState().incrementTime, 1000);
        } else {
            clearInterval(timerInterval);
        }
    },
    (state) => state.isRunning
);
