import {useEffect, useRef, useState} from "react";

const mimeType = "audio/webm";

const AudioRecorder = () => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audio, setAudio] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [isRecording, setIsRecording] = useState(false);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(mediaStream);
                startRecording(mediaStream); // start recording once permission is granted
            } catch (err) {
                // alert(err.message);
            }
        } else {
            // alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = (mediaStream) => {
        setRecordingStatus("recording");
        const media = new MediaRecorder(mediaStream, {type: mimeType});

        mediaRecorder.current = media;

        mediaRecorder.current.start();

        let localAudioChunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };

        setAudioChunks(localAudioChunks);
        setIsRecording(true);
    };

    const stopRecording = () => {
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();
        // Stop the media tracks and release the resources
        stream.getTracks().forEach((track) => track.stop());
        stream.getTracks().forEach((track) => stream.removeTrack(track));
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, {type: mimeType});
            const audioUrl = URL.createObjectURL(audioBlob);

            setAudio(audioUrl);

            setAudioChunks([]);
            setIsRecording(false); // Update isRecording state when recording stops
        };
    };

    useEffect(() => {
        // Check and get mic permission once the component is rendered
        getMicrophonePermission();
    }, []); // An empty dependency array makes this useEffect run once on mount.

    return (
        <div>
            <h2 className="rec">Audio Recorder</h2>
            <main>
                <div className="audio-controls">
                    {recordingStatus === "recording" ? (
                        <button onClick={stopRecording} type="button">
                            Stop Recording
                        </button>
                    ) : null}
                </div>
                {isRecording && <p>Recording...</p>}
                {audio ? (
                    <div className="audio-player">
                        <audio src={audio} controls autoPlay="false"></audio>
                        <a download href={audio}>
                            Download Recording
                        </a>
                    </div>
                ) : null}
            </main>
        </div>
    );
};

export default AudioRecorder;
