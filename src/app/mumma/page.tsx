"use client";
import React, { useState, useRef, useEffect } from "react";
import { pageData, pageDataT } from "../../database";

import { generatePopulatedAudioData } from "../audioUtils";
import { PopulatedAudioDataT } from "./database";
export default function Mumma() {
  const populatedAudioDataRef = useRef<PopulatedAudioDataT | null>();

  const [isLoading, setIsLoading] = useState(true);
  const [volume, setVolume] = useState(1); // Volume ranges from 0 to 1
  const [isPlaying, setIsPlaying] = useState(false);
  console.log("vippe iLoading");
  const initializeAudio = async () => {
    populatedAudioDataRef.current = await generatePopulatedAudioData();
  };
  useEffect(() => {
    const setupAudio = async () => {
      await initializeAudio();
      setIsLoading(false);
    };

    if (isLoading) setupAudio();
    return;
  }, [isLoading, setIsLoading]);

  // const play = () => {
  //   if (!audioContextRef.current) return; // Ensure the audio context exists
  //   if (!audioBuffersRef.current) return;
  //   if (!gainNodeRef.current) return;
  //   const source = audioContextRef.current.createBufferSource(); // Create a new BufferSource
  //   source.buffer = audioBuffersRef.current[0]; // Set the buffer to be played
  //   source.connect(gainNodeRef.current); // Connect to the GainNode for volume control
  //   source.start(0); // Start playback at the current time
  //   setIsPlaying(true); // Update playing state
  // };

  return (
    <main className="main">
      <h1>mumma</h1>
      <h2>An audiobuffer sourcenode below</h2>
      <h2>{isLoading ? "Loading" : "Not loadung"}</h2>
      <button onClick={() => console.log("vippe play")}>play</button>
    </main>
  );
}
