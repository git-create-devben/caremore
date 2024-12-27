// import Image from "next/image";
import DesignRoutine from "~/components/DesignRoutine";
import { ProductCarousel } from "~/components/ProductCarousel";
import ProductHero from "~/components/ProductHero";
import WeCare from "~/components/WeCare";

export default function Home() {
  return (
   <main className="min-h-screen ">
    <ProductHero/>
    <DesignRoutine/>
    <ProductCarousel title="Our Product"/>
    <WeCare/>
   </main>
  );
}
