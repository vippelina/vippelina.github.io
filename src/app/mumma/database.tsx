import { UUID, randomUUID } from "crypto";

export interface BaseHarmonyT {
  src: String;
  title: String;
  type: "background" | "soprano" | "alto" | "tenor";
}

export interface PopulatedHarmonyT extends BaseHarmonyT {
  audioBuffer: AudioBuffer;
  gainNode: GainNode;
}

export interface AudioDataT<harmonyT, audioContextT> {
  id: Number;
  name: String;
  artist: String;
  harmonies: harmonyT[];
  audioContext?: AudioContext;
}

export const audioDatas: AudioDataT<BaseHarmonyT, undefined>[] = [
  {
    id: 1,
    name: "Alpha omega",
    artist: "unknown",
    harmonies: [
      {
        src: "https://res.cloudinary.com/dfmck30un/video/upload/v1729451987/mumma/alpha_background.mp3",
        type: "background",
        title: "Background",
      },
      {
        src: "https://res.cloudinary.com/dfmck30un/video/upload/v1729451851/mumma/alpha_soprano.mp3",
        type: "soprano",
        title: "Soprano",
      },
      {
        src: "https://res.cloudinary.com/dfmck30un/video/upload/v1729451851/mumma/alpha_alto.mp3",
        type: "alto",
        title: "Alto",
      },
      {
        src: "https://res.cloudinary.com/dfmck30un/video/upload/v1729451851/mumma/alpha_tenor.mp3",
        type: "tenor",
        title: "Tenor",
      },
    ],
  },
];
