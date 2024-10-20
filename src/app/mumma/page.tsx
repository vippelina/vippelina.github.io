"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { generatePopulatedAudioData } from "../audioUtils";
import { PopulatedHarmonyT, AudioDataT, BaseHarmonyT } from "./database";

type IndividualPlayerProps = {
  onPlay: () => void;
  onPause: () => void;
  key: String;
  harmonyType: PopulatedHarmonyT["type"];
};

const IndividualPlayer = ({
  onPlay,
  gainValue,
  harmonyType,
  onChangeVolume,
}: {
  onPlay: () => void;
  gainValue: number;
  harmonyType: BaseHarmonyT["type"];
  onChangeVolume: (
    harmonyType: BaseHarmonyT["type"],
    changeType: "raise" | "lower" | "mute"
  ) => void;
}) => {
  return (
    <div style={{ border: "1pt solid black" }}>
      <h2>{`Volume: ${gainValue}`}</h2>
      <button
        key={"raise"}
        data-value={harmonyType}
        onClick={() => onChangeVolume(harmonyType, "raise")}
      >
        Raise volume
      </button>
      <button
        key={"lower"}
        data-value={harmonyType}
        onClick={() => onChangeVolume(harmonyType, "lower")}
      >
        Lower volume
      </button>
      <button
        key="mute"
        data-value={harmonyType}
        onClick={() => onChangeVolume(harmonyType, "mute")}
      >
        Mute
      </button>
      <button data-value={`${harmonyType}-play`} onClick={onPlay}>
        Play
      </button>
    </div>
  );
};

export default function Mumma() {
  const populatedAudioDataRef = useRef<AudioDataT<
    PopulatedHarmonyT,
    AudioContext
  > | null>();
  const [isLoading, setIsLoading] = useState(
    populatedAudioDataRef.current ? false : true
  );
  const [volume, setVolume] = useState(1); // Volume ranges from 0 to 1
  const [isPlaying, setIsPlaying] = useState(false);
  const initializeAudio = async () => {
    if (populatedAudioDataRef.current) {
      return;
    }
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

  const play = useCallback(() => {
    const currentPopulatedAudio = populatedAudioDataRef.current;
    if (!currentPopulatedAudio || !currentPopulatedAudio.audioContext) {
      return new Error(
        "Audio has not yet been loaded but also play should not have been available"
      );
    }

    const { audioContext, harmonies } = currentPopulatedAudio;
    const timeToStart = audioContext.currentTime;
    harmonies.forEach((harmony) => {
      const sourceNode = audioContext.createBufferSource();
      sourceNode.buffer = harmony.audioBuffer;
      sourceNode.connect(harmony.gainNode);
      sourceNode.start(timeToStart);
    });
    setIsPlaying(true);
  }, [populatedAudioDataRef.current]);

  const pause = () => {};

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
  const harmonies = populatedAudioDataRef?.current?.harmonies;

  const changeVolume = useCallback(
    (type: BaseHarmonyT["type"], changeType: "raise" | "lower" | "mute") => {
      const harmony = populatedAudioDataRef.current?.harmonies.find(
        (harmony) => harmony.type === type
      );
      if (!harmony) throw new Error("COuld not find audiodata");
      const { gainNode } = harmony;
      const audioContext = populatedAudioDataRef?.current?.audioContext;
      if (!(gainNode && audioContext))
        throw new Error("no gain! or audioContext");

      const timeToSetValue = audioContext?.currentTime;
      const currentVolume = gainNode.gain.value;
      console.log("vippe currentVolume", currentVolume);
      let newVolume;
      switch (changeType) {
        case "lower":
          newVolume = currentVolume + 0.5;
          break;
        case "raise":
          newVolume = currentVolume - 0.5;
          break;
        case "mute":
          newVolume = 0;
      }
      gainNode.gain.setValueAtTime(newVolume, timeToSetValue);
    },
    [populatedAudioDataRef.current?.harmonies[0].gainNode]
  );
  console.log("vippe harmonies?", harmonies);
  return (
    <main className="main">
      <h1>mumma</h1>
      <h2>An audiobuffer sourcenode below</h2>
      <h2>{isLoading ? "Loading" : "Not loadung"}</h2>
      {harmonies && (
        <>
          <h3>Harmonies</h3>
          {harmonies.map(({ type, gainNode }) => (
            <div key={type} style={{ border: "1 pt solid red" }}>
              <h4>{type}</h4>
              <IndividualPlayer
                onPlay={() => play()}
                gainValue={gainNode.gain.value}
                onChangeVolume={changeVolume}
                harmonyType={type}
              />
            </div>
          ))}
          <button onClick={play}>Play</button>
        </>
      )}
    </main>
  );
}
