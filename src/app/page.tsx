import EmblaCarousel from "@/components/Carosel/carosel";
import Header from "@/components/Header/Header";
import MegaMenu from "@/components/MegaMenu/MegaMenu";
import Image from "next/image";

export default function Home() {
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <main className="">
      <Header />
      <MegaMenu />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  );
}
