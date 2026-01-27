import { useState, useRef, useEffect } from "react";


export default function useTranscription(apiKey: string) {

    const [transcript, setTranscript] = useState("");
    const socketRef = useRef<WebSocket | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const processorRef = useRef<AudioWorkletNode | null>(null);
    const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);



}