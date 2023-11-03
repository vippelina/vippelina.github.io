type pageDataT = {
  title: string;
  artist: string;
  harmonies: {
    all: string;
    soprano: string;
    alto: string;
    tenor: string;
  };
  original: {
    youtube: string;
    spotify: string;
  };
};
const pageData: pageDataT[] = [
  {
    title: "Håll mitt hjärta",
    artist: "Björn Skifs",
    harmonies: {
      all: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527134/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_alla_jgrpxm.mp3",
      soprano:
        "https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_sopran_kjqg3i.mp3",
      alto: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_alt_f2gvfx.mp3",
      tenor:
        "https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_tenor_ej2ur4.mp3",
    },
    original: {
      youtube: "https://www.youtube.com/embed/Ya9n4tr3PDU?si=7zb3jbbYdD5z62kJ",
      spotify:
        "https://open.spotify.com/track/5I17rGCM1Zn4J9puVHTh8X?si=e37760b4dfce4b7f",
    },
  },
  {
    title: "Stand Still",
    artist: "The walls group",
    harmonies: {
      all: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_alla_pc2pn5.mp3",
      soprano:
        "https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_sopran_khsghh.mp3",
      alto: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527125/stand_still__harmonies/stand_still_alt_dtuavw.mp3",
      tenor:
        "https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_tenor_yputmm.mp3",
    },
    original: {
      youtube: "https://www.youtube.com/embed/Se6Iv4FwO-E?si=_LN6m61OAJkdA0Xp",
      spotify:
        "https://open.spotify.com/track/0jZkU2WcbamGJBkMpWiXpO?si=4bcdf05fc80d4a1d",
    },
  },
  {
    title: "He will supply",
    artist: "Kirk Franklin",
    harmonies: {
      all: "https://res.cloudinary.com/dfmck30un/video/upload/v1699043018/he_will_supply__harmonies/he_will_supply_alla.mp3",
      soprano:
        "https://res.cloudinary.com/dfmck30un/video/upload/v1698527131/he_will_supply__harmonies/he_will_supply_sopran_g0riaw.mp3",
      alto: "https://res.cloudinary.com/dfmck30un/video/upload/v1698527131/he_will_supply__harmonies/he_will_supply_alt_sfeczp.mp3",
      tenor:
        "https://res.cloudinary.com/dfmck30un/video/upload/v1698527130/he_will_supply__harmonies/he_will_supply_tenor_jh6g7e.mp3",
    },
    original: {
      youtube: "https://www.youtube.com/embed/GInruCmHiKc?si=68SxNIhA04I5i09o",
      spotify:
        "https://open.spotify.com/track/1m86i4cYV8kLiCRGwqSzuI?si=6094d9fc3e4f4c99",
    },
  },
];

export default pageData;
