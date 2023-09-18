import {createContext, useState} from 'react';

// Create the AudioStreamContext
const AudioStreamContext = createContext();

// Create the AudioStreamProvider component to wrap the components needing access
const AudioStreamProvider = ({children}) => {
    const [mediaStream, setMediaStream] = useState(null);

    return (
        <AudioStreamContext.Provider value={{mediaStream, setMediaStream}}>
            {children}
        </AudioStreamContext.Provider>
    );
}

export {AudioStreamContext, AudioStreamProvider}
