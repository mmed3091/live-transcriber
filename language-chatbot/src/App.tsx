import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [transcript, setTranscript] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const handleTranscriptionToggle = async () => {
    if (isTranscribing) {
      mediaRecorderRef.current?.stop();
      streamRef.current?.getTracks().forEach((track) => track.stop()); // close all audio/media streams
      socketRef.current?.close();
      setIsTranscribing(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        }); // API to ask permission for microphone use
        streamRef.current = stream;

        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: "audio/webm",
        }); // API fo recording media streams - record audio in webm format with audio only WebM file output
        mediaRecorderRef.current = mediaRecorder;

        const socket = new WebSocket(
          "wss://api.deepgram.com/v1/listen?language=multi&model=nova-3", // create a new Websocket conncetion to the server at the URL
          [
            "token", // subprotocols
            apiKey,
          ]
        );
        socketRef.current = socket;

        socket.onopen = () => {
          mediaRecorder.addEventListener("dataavailable", (event) => {
            if (socket.readyState === WebSocket.OPEN) {
              // check if WebSocket still open once data has been received
              socket.send(event.data); // send recorder audio to Deepgram
            }
          });
          mediaRecorder.start(250);
        };

        socket.onmessage = (message) => {
          // WebSocket receives a message from the server
          const received = JSON.parse(message.data);
          const result = received.channel.alternatives[0]?.transcript; // get the transcript with the highest confidence index
          if (result) {
            setTranscript((prev) => prev + " " + result);
          }
        };

        setIsTranscribing(true);
      } catch (err) {
        console.error("Failed to start transcription", err);
      }
    }
  };

  return (
    <div className="app">
      <h1 className="header">Welcome to my Language Learning Chatbot!</h1>

      <button onClick={handleTranscriptionToggle} className="toggle-button">
        {isTranscribing ? "Stop Transcription" : "Begin Transcription"}
      </button>

      <div className="transcript-box">
        {transcript ||
          (isTranscribing ? "Listening..." : "Click the button to begin")}
      </div>
    </div>
  );
}

export default App;
