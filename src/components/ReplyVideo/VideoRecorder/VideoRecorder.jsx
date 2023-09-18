import {useEffect, useRef, useState} from "react";

const mimeType = 'video/webm; codecs="opus,vp8"';

const VideoRecorder = () => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const liveVideoFeed = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [recordedVideo, setRecordedVideo] = useState(null);
    const [videoChunks, setVideoChunks] = useState([]);
    const [isRecording, setIsRecording] = useState(false);

    const getCameraPermission = async () => {
        setRecordedVideo(null);
        if ("MediaRecorder" in window) {
            try {
                const videoConstraints = {
                    audio: true,
                    video: true,
                };

                const stream = await navigator.mediaDevices.getUserMedia(
                    videoConstraints
                );

                setPermission(true);
                setStream(stream);

                liveVideoFeed.current.srcObject = stream;
            } catch (err) {
                // alert(err.message);
            }
        } else {
            // alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        setRecordingStatus("recording");

        const media = new MediaRecorder(stream, {mimeType});

        mediaRecorder.current = media;

        mediaRecorder.current.start();

        let localVideoChunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localVideoChunks.push(event.data);
        };

        setVideoChunks(localVideoChunks);
        setIsRecording(true);
    };

    const stopRecording = () => {
        setPermission(false);
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();

        stream.getTracks().forEach((track) => track.stop());
        stream.getTracks().forEach((track) => stream.removeTrack(track));

        mediaRecorder.current.onstop = () => {
            const videoBlob = new Blob(videoChunks, {type: mimeType});
            const videoUrl = URL.createObjectURL(videoBlob);

            setRecordedVideo(videoUrl);

            setVideoChunks([]);
            setIsRecording(false);
        };
    };

    useEffect(() => {
        getCameraPermission();
    }, []);

    return (
        <div>
            <h2 className="rec">Video Recorder</h2>
            <main>
                <div className="video-controls">
                    {permission && recordingStatus === "inactive" ? (
                        <button onClick={startRecording} type="button">
                            Start Recording
                        </button>
                    ) : null}
                    {recordingStatus === "recording" ? (
                        <button onClick={stopRecording} type="button">
                            Stop Recording
                        </button>
                    ) : null}
                </div>
                {isRecording && <p>Recording...</p>}
            </main>

            <div className="video-player">
                {!recordedVideo ? (
                    <video ref={liveVideoFeed} autoPlay className="live-player"></video>
                ) : null}
                {recordedVideo ? (
                    <div className="recorded-player">
                        <video className="recorded" src={recordedVideo} controls></video>
                        <a download href={recordedVideo}>
                            Download Recording
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default VideoRecorder;
