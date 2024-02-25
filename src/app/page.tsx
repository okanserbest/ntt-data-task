import EmblaCarousel from "@/components/Carosel/carosel";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MegaMenu from "@/components/MegaMenu/MegaMenu";
import ProductGrup from "@/components/ProductGrup/ProductGrup";
import Image from "next/image";

export default function Home() {

  return (
    <main className="">
      <Header />
      <MegaMenu />
      <EmblaCarousel  />
      <ProductGrup />
      <Footer />
      
    </main>
  );
}
