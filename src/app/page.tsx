import Image from "next/image";
import Harmonies from "./components/Harmonies";
import Originals from "./components/Originals";

export default function Home() {
  return (
    <main className="main">
      <Harmonies />
      <Originals />
    </main>
  );
}
