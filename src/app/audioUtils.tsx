"use client";
import {
  PopulatedAudioDataT,
  baseAudioDatas,
  HarmonyT,
} from "./mumma/database";

const baseAudioData = baseAudioDatas[0];

export const generatePopulatedAudioData =
  async (): Promise<PopulatedAudioDataT> => {
    console.log("vippe generation ");
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) throw new Error("AudioContext not supported");
    const audioContext = new AudioContext();

    // Step 2: Process harmonies in parallel using Promise.all
    const harmonies: HarmonyT[] = await Promise.all(
      baseAudioData.harmonies.map(async (harmony) => {
        const { src } = harmony.data;

        // Fetch the audio file
        const response = await fetch("" + src + "");
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
          data: {
            ...harmony.data,
            audioBuffer, // Set the audioBuffer from the decoded data
            gainNode, // Set the GainNode connected to the AudioContext
          },
        };
      })
    );

    // Step 3: Return the fully populated PopulatedAudioDataT object
    return {
      ...baseAudioData,
      harmonies,
      audioContext, // Set the created AudioContext
    };
  };
