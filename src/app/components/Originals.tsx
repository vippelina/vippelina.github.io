import pageData from "../../database";
import OriginalCard from "./OriginalCard";
export default function Originals() {
  return (
    <>
      {pageData.map((d) => {
        return (
          <OriginalCard
            key={d.id}
            title={d.title}
            artist={d.artist}
            original={d.original}
          />
        );
      })}
    </>
  );
}
