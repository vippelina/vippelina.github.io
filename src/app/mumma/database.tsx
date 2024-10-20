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
  audioContext: audioContextT;
}

export const audioDatas: AudioDataT<BaseHarmonyT>[] = [
  {
    id: 1,
    name: "Stand Still",
    artist: "The Walls Group",
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

export const pageData: pageDataT[] = [
  {
    id: 1,
    title: "Håll mitt hjärta",
    artist: "Björn Skifs",
    harmonies: [
      {
        type: "All",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527134/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_alla_jgrpxm.mp3",
      },
      {
        type: "Soprano",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_sopran_kjqg3i.mp3",
      },
      {
        type: "Alto",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_alt_f2gvfx.mp3",
      },
      {
        type: "Tenor",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_tenor_ej2ur4.mp3",
      },
    ],
    original: {
      youtube: "https://www.youtube.com/embed/Ya9n4tr3PDU?si=7zb3jbbYdD5z62kJ",
      spotify:
        "https://open.spotify.com/track/5I17rGCM1Zn4J9puVHTh8X?si=e37760b4dfce4b7f",
    },
  },
  {
    id: 2,
    title: "Stand Still",
    artist: "The walls group",
    harmonies: [
      {
        type: "All",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_alla_pc2pn5.mp3",
      },
      {
        type: "Soprano",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_sopran_khsghh.mp3",
      },
      {
        type: "Alto",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527125/stand_still__harmonies/stand_still_alt_dtuavw.mp3",
      },
      {
        type: "Tenor",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_tenor_yputmm.mp3",
      },
    ],
    original: {
      youtube: "https://www.youtube.com/embed/Se6Iv4FwO-E?si=_LN6m61OAJkdA0Xp",
      spotify:
        "https://open.spotify.com/track/0jZkU2WcbamGJBkMpWiXpO?si=4bcdf05fc80d4a1d",
    },
  },
  {
    id: 3,
    title: "He will supply",
    artist: "Kirk Franklin",
    harmonies: [
      {
        type: "All",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1699043018/he_will_supply__harmonies/he_will_supply_alla.mp3",
      },
      {
        type: "Soprano",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527131/he_will_supply__harmonies/he_will_supply_sopran_g0riaw.mp3",
      },
      {
        type: "Alto",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527131/he_will_supply__harmonies/he_will_supply_alt_sfeczp.mp3",
      },
      {
        type: "Tenor",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527130/he_will_supply__harmonies/he_will_supply_tenor_jh6g7e.mp3",
      },
    ],
    original: {
      youtube: "https://www.youtube.com/embed/GInruCmHiKc?si=68SxNIhA04I5i09o",
      spotify:
        "https://open.spotify.com/track/1m86i4cYV8kLiCRGwqSzuI?si=6094d9fc3e4f4c99",
    },
  },
  {
    id: 4,
    title: "Wade in the water",
    artist: "Spirituals",
    harmonies: [
      {
        type: "All",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1699828228/wade_in_the_water_harmonies/wade_in_water__alla_vjax27.mp3",
      },
      {
        type: "Soprano",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1699828227/wade_in_the_water_harmonies/wade_in_the_water__sopran_skyao4.mp3",
      },
      {
        type: "Alto",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1699828226/wade_in_the_water_harmonies/wade_in_water__alt_rwjynf.mp3",
      },
      {
        type: "Tenor1",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1699828227/wade_in_the_water_harmonies/wade_in_water__tenor1_i4nma6.mp3",
      },
      {
        type: "Tenor2",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1699829996/wade_in_the_water_harmonies/wade_in_water__tenor2.mp3",
      },
      {
        type: "Tenor3",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1699828226/wade_in_the_water_harmonies/wade_in_water__tenor3_pg62vm.mp3",
      },
    ],
    original: {
      youtube: "https://www.youtube.com/embed/82xnOxcJAtk?si=drHfTZTlaVxDlUOk",
      spotify:
        "https://open.spotify.com/track/1xcC0GKNgEWDjWxawt29Nl?si=1bc5b08a18c0447b",
    },
  },
  {
    id: 5,
    title: "Trust Me",
    artist: "Richard Smallwood",
    harmonies: [
      {
        type: "All",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1701856120/trust_me__harmonies/trust_me__all.mp3",
      },
      {
        type: "Soprano",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1701855482/trust_me__harmonies/trust_me__sopran_c59uvs.mp3",
      },
      {
        type: "Alto",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1701855482/trust_me__harmonies/trust_me__alt_t3etcr.mp3",
      },
      {
        type: "Tenor",
        url: "https://res.cloudinary.com/dfmck30un/video/upload/v1701855483/trust_me__harmonies/trust_me__tenor_nvxugt.mp3",
      },
    ],
    original: {
      youtube: "https://www.youtube.com/embed/4D9cCUBdi_g?si=vuGB39-GdPaz4wNA",
      spotify:
        "https://open.spotify.com/track/7aXT2kg321TUEJ4gpCDSJL?si=1cc1499953954365",
    },
  },
];
