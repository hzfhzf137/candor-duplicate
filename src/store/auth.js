import {create} from "zustand";
// const {data} = useFetchRepositories()
const store = (set) => ({
    // tasks: [{title: "test-task",status: "ongoing"}],
    // // addTask: (title,status)=>set((store)=>({tasks: [...store.tasks,{title,status}]})),
    loading: false,
    isLoading: (value) => set((store) => ({loading: value})),
    userId: "",
    setUserId: (value) => set(() => ({userId: value})),
    chatSelectedId: "",
    setChatSelectedId: (value) =>
        set(() => ({
            chatSelectedId: value,
        })),
});
export const useStore = create(store);
