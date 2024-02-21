"use client";

import Navbar from "@/components/Navbar";
import SliderOne from "@/components/ui/Slider";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import WebsiteDesign from "./Website-design";
import GraphicDesign from "./Graphic-design";
import ShopifyStores from "./Shopify-stores";
import Brands from "./Brands";
import Services from "./Services";
import FAQS from "./FAQS";
import { useRef } from "react";

export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
      />
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
          <div ref={websiteDesignRef}>
            <WebsiteDesign />
          </div>
          <div ref={graphicDesignRef}>
            <GraphicDesign />
          </div>
          <div ref={shopifyStoresRef}>
            <ShopifyStores />
          </div>
          <div ref={brandsRef}>
            <Brands />
          </div>
          <Services />
          <FAQS />
        </div>
      </div>
    </div>
  );
}
