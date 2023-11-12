export type harmoniesT = {
  type: string;
  url: string;
}[];

export type pageDataT = {
  id: number;
  title: string;
  artist: string;
  harmonies: harmoniesT;
  original: {
    youtube: string;
    spotify: string;
  };
};

const pageData: pageDataT[] = [
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
];

export default pageData;
