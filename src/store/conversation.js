// import { create } from "zustand";
// const store = (set) => ({
//   fileData: {},
//   setFileData: (value) =>
//     set((store) => {
//       fileData: {
//         value;
//       }
//     }),
// });
// export const useStoreConversation = create(store);
import {create} from "zustand";

const store = (set) => ({
    fileData: {},
    setFileData: (value) =>
        set((state) => ({
            ...state,
            fileData: value,
        })),
});

export const useStoreConversation = create(store);
