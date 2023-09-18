import React, {useEffect} from 'react';
import {useGlobalInfo} from '../../contexts/GlobalContext';

const Timer = () => {
    const {time, setTime} = useGlobalInfo();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return <div>{formatTime(time)}</div>;
};

export default Timer;
