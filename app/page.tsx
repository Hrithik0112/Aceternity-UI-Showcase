import Navbar from "@/components/Navbar";
import SliderOne from "@/components/ui/Slider";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import WebsiteDesign from "./Website-design";
import GraphicDesign from "./Graphic-design";
import ShopifyStores from "./Shopify-stores";
import { Braah_One } from "next/font/google";
import Brands from "./Brands";
import Services from "./Services";

export default function Home() {
  return (
    <div className="w-full md:justify-center md:items-center bg-black/[0.96] bg-grid-white/[0.02] antialiased overflow-x-hidden">
      <Navbar />
      <Spotlight className="hidden md:flex md:left-80" fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-6 md:text-7xl text-center px-6 
         text-slate-300 bg-clip-text 
         text-transparent bg-gradient-to-b
          from-neutral-50 to bg-neutral-400 bg-opacity-50"
        >
          Create , Grow and <br /> Scale Your Business.
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of creatives who are excited to
          help you grow your business.
        </p>
        <Link
          href="/book"
          className="cursor-pointer flex justify-center items-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Book a call
        </Link>
        <div className="w-full pt-20">
          <SliderOne />
          <WebsiteDesign />
          <GraphicDesign />
          <ShopifyStores />
          <Brands />
          <Services />
        </div>
      </div>
    </div>
  );
}
