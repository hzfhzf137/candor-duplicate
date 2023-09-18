import React, {useEffect, useRef, useState} from "react";
import {audio, connect, ReactMediaRecorder, register} from "react-media-recorder";
import {postVideo} from "../../hooks/useVideo";

import "./ReplyVideoPreview.css";

const RecordView = () => {
    const [stream, setStream] = useState(null);
    const videoRef = useRef();

    useEffect(() => {
        const setup = async () => {
            try {
                audio && await register(await connect());
            } catch (error) {
                console.error(error)
            }
        };
        setup();
    }, []);

    useEffect(() => {
        let mediaStream = null;

        const startCamera = async () => {
            try {
                mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (error) {
                console.error("Error accessing camera:", error);
            }
        };

        startCamera();

        return () => {
            if (mediaStream) {
                mediaStream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    const stopStream = () => {
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            setStream(null);
        }
    };

    const uploadMedia = async (mediaBlobUrl) => {
        try {

            let blob = await fetch(mediaBlobUrl).then((response) => response.blob());
            blob = new Blob([blob], {type: "video/webm"});

            const formData = new FormData();
            formData.append('file', blob, 'video.webm');
            formData.append('type', 'conversation');

            await postVideo(formData);
        } catch (error) {
            console.error("Error uploading media:", error);
        }
    };

    return (
        <div className="Ar_video">
            {stream && <video ref={videoRef} autoPlay muted/>}
            <ReactMediaRecorder
                video
                render={({status, startRecording, stopRecording, mediaBlobUrl}) => (
                    <div>
                        <p>{status}</p>
                        <button onClick={startRecording}>Start Recording</button>
                        <button
                            onClick={async () => {
                                stopRecording();
                                stopStream();
                                await uploadMedia(mediaBlobUrl);
                            }}
                        >
                            Stop Recording
                        </button>
                        {mediaBlobUrl && (
                            <div>
                                <video src={mediaBlobUrl} controls/>
                            </div>
                        )}
                    </div>
                )}
            />
        </div>
    );
};

export default RecordView;
