// import { create } from "zustand";

// const store = (set) => ({
//   readyToDownload: false,
//   isReadyToDownload: (value) => set((store) => ({ readyToDownload: value })),
// });
// export const useStoreConversationDownload = create(store);
import {create} from "zustand";

const store = (set) => ({
    readyToDownload: false,
    isReadyToDownload: (value) => set((store) => ({readyToDownload: value})),
    isDownloadConversation: false,
    setIsDownloadConversation: (value) =>
        set((store) => ({isDownloadConversation: value})),
    downloadAbleFile: "",
    setDownloadAbleFile: (value) => set((store) => ({downloadAbleFile: value})),

    // const [uploadSocket, setUploadSocket] = useState(null);
    uploadSocket: null,
    setUploadSocket: (value) => set((store) => ({uploadSocket: value})),
});
export const useStoreConversationDownload = create(store);
