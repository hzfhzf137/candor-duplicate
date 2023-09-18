import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {GlobalProvider} from "./contexts/GlobalContext";
import {QueryClient, QueryClientProvider} from "react-query";
import {MediaStreamProvider} from "./components/ReplyVideo/MediaStreamContext";
import {AudioStreamProvider} from "./components/ReplyAudio/AudioStreamContext";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalProvider>
        <QueryClientProvider client={queryClient}>
            <MediaStreamProvider>
                <AudioStreamProvider>
                    <App/>
                </AudioStreamProvider>
            </MediaStreamProvider>
        </QueryClientProvider>
    </GlobalProvider>
);
