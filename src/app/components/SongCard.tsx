import { harmoniesT, pageDataT } from "../../database";
export default function SongCard({
  title,
  artist,
  harmonies,
}: {
  title: string;
  artist: string;
  harmonies: harmoniesT;
}) {
  return (
    <>
      <h2>{`${title} - ${artist}`}</h2>
      {harmonies.map((h) => {
        return (
          <>
            <h3>{h.type}</h3>
            <audio controls src={h.url}></audio>
          </>
        );
      })}
      {/* <h2>{`${title} - ${artist}`}</h2>
      <h3>Alla</h3>
      <audio controls src={harmonies.all}></audio>
      <h3>Sopran</h3>
      <audio controls src={harmonies.soprano}></audio>
      <h3>Alt</h3>
      <audio controls src={harmonies.alto}></audio>
      <h3>Tenor</h3>
      <audio controls src={harmonies.tenor}></audio> */}
    </>
  );
}
