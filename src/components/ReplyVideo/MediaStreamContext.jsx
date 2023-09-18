// MediaStreamContext.jsx
import React, {createContext, useState} from 'react';

const MediaStreamContext = createContext();

const MediaStreamProvider = ({children}) => {
    const [mediaStream, setMediaStream] = useState(null);
    const [videoStream, setVideoStream] = useState(null); // Add videoStream state

    return (
        <MediaStreamContext.Provider
            value={{
                mediaStream,
                setMediaStream,
                videoStream,
                setVideoStream
            }} // Include videoStream in the context value
        >
            {children}
        </MediaStreamContext.Provider>
    );
};

export {MediaStreamContext, MediaStreamProvider};
