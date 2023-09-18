import VideoRecorder from 'react-video-recorder';

const ReactVideoRecorder = () => {
    const handleRecordingComplete = (videoBlob) => {
        // Create a temporary anchor element
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(videoBlob);
        downloadLink.download = 'recorded-video.mp4'; // Set the desired file name here

        // Simulate a click event to trigger the download
        downloadLink.click();

        // Clean up the temporary anchor element
        URL.revokeObjectURL(downloadLink.href);
    };

    return (
        <VideoRecorder
            onRecordingComplete={handleRecordingComplete}
        />
    );
};

export default ReactVideoRecorder;
