import pageData from "../../database";
import OriginalCard from "./OriginalCard";
export default function Originals() {
  console.debug("vippe pagedata", pageData.length);
  console.log("vippe hejhej");
  pageData.forEach((d) => console.log("vippehjeh"));
  return (
    <>
      {pageData.map((d) => {
        return (
          <OriginalCard
            title={d.title}
            artist={d.artist}
            original={d.original}
          />
        );
      })}
      {/* <h2>Wade in the water - Spirituals</h2>
      <iframe
        src="https://www.youtube.com/embed/fxZ4H-gq_lc?si=eTTf-oY9YTI12Zqx"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h2>Håll mitt hjärta - Björn Skifs</h2>
      <iframe
        src="https://www.youtube.com/embed/Ya9n4tr3PDU?si=9J7c2KnFxNLA5Ikn"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h2>Stand still - The walls group</h2>
      <iframe
        src="https://www.youtube.com/embed/Se6Iv4FwO-E?si=xrNE7PAO9NdkDlyk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h2>He will supply - Kirk Franklin</h2>
      <iframe
        src="https://www.youtube.com/embed/GInruCmHiKc?si=rG1F10wcCq0Wytpr"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
    </>
  );
}
