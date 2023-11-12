import * as React from "react";
import pageData from "../../database";
import SongCard from "./SongCard";
export default function Harmonies() {
  return (
    <>
      {[...pageData].reverse().map((d) => {
        return (
          <SongCard
            key={d.id}
            title={d.title}
            artist={d.artist}
            harmonies={d.harmonies}
          />
        );
      })}
    </>
  );
}
