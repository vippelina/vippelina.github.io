import Harmonies from "./components/Harmonies";
import Originals from "./components/Originals";

export default function Home() {
  return (
    <main className="main">
      <h1>Stämmor Vippes kör</h1>
      <Harmonies />
      <h1>Lyssna på orginalen:</h1>
      <Originals />
    </main>
  );
}
