import Link from "../../../node_modules/next/link";
export default function OriginalCard({
  title,
  artist,
  original,
}: {
  title: string;
  artist: string;
  original: {
    youtube: string;
    spotify: string;
  };
}) {
  return (
    <>
      <h1>{`${title} - ${artist}`}</h1>
      <iframe
        src={original.youtube}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div>
        <Link target="_blank" rel="noopener noreferrer" href={original.spotify}>
          Spotify
        </Link>
      </div>
    </>
  );
}
