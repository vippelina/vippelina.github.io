import * as React from "react";
import pageData from "../../database";
import SongCard from "./SongCard";
export default function Harmonies() {
  return (
    <>
      {pageData.map((d) => {
        return (
          <SongCard
            key={d.id}
            title={d.title}
            artist={d.artist}
            harmonies={d.harmonies}
          />
        );
      })}
      {/* <h1>Stämmor vippes kör</h1>
      <h2>Håll mitt hjärta</h2>
      <h3>Sopran</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_sopran_kjqg3i.mp3"
      ></audio>
      <h3>Alt</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_alt_f2gvfx.mp3"
      ></audio>
      <h3>Tenor</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527135/hall_mitt_hjarta_harmonies/hall_mitt_hjarta_tenor_ej2ur4.mp3"
      ></audio>
      <h2>He will supply</h2>

      <h3>Sopran</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527131/he_will_supply__harmonies/he_will_supply_sopran_g0riaw.mp3"
      ></audio>
      <h3>Alt</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527131/he_will_supply__harmonies/he_will_supply_alt_sfeczp.mp3"
      ></audio>
      <h3>Tenor</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527130/he_will_supply__harmonies/he_will_supply_tenor_jh6g7e.mp3"
      ></audio>
      <h2>Stand still</h2>
      <h3>Sopran</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_sopran_khsghh.mp3"
      ></audio>
      <h3>Alt</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527125/stand_still__harmonies/stand_still_alt_dtuavw.mp3"
      ></audio>
      <h3>Tenor</h3>
      <audio
        controls
        src="https://res.cloudinary.com/dfmck30un/video/upload/v1698527126/stand_still__harmonies/stand_still_tenor_yputmm.mp3"
      ></audio> */}
    </>
  );
}
