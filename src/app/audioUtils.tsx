"use client";
import { audioDatas, AudioDataT, PopulatedHarmonyT } from "./mumma/database";

const audioData = audioDatas[0];

export const generatePopulatedAudioData = async (): Promise<
  AudioDataT<PopulatedHarmonyT>
> => {
  const AudioContext =
    window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) throw new Error("AudioContext not supported");
  const audioContext = new AudioContext();

  // Step 2: Process harmonies in parallel using Promise.all
  const harmonies: PopulatedHarmonyT[] = await Promise.all(
    audioData.harmonies.map(async (harmony) => {
      // Fetch the audio file
      const response = await fetch("" + harmony.src + "");
      const arrayBuffer = await response.arrayBuffer();

      // Decode the audio data
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      // Create a GainNode
      const gainNode = audioContext.createGain();

      // Connect the GainNode to the destination (speakers)
      gainNode.connect(audioContext.destination);

      // Return the populated HarmonyT object with audioBuffer and gainNode
      return {
        ...harmony,
        audioBuffer, // Set the audioBuffer from the decoded data
        gainNode, // Set the GainNode connected to the AudioContext
      } as PopulatedHarmonyT;
    })
  );

  // Step 3: Return the fully populated PopulatedAudioDataT object
  return {
    ...audioData,
    harmonies,
    audioContext, // Set the created AudioContext
  };
};

export const generateAudioBuffer = async (
  audioContext: AudioContext,
  src: String
) => {
  const response = await fetch("" + src + "");
  if (!response.ok) {
    throw new Error(`Failed to fetch ${src}: ${response.statusText}`); // Throw error if response is not OK
  }
  const arrayBuffer = await response.arrayBuffer();
  return audioContext.decodeAudioData(arrayBuffer);
};
