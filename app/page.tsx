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
import { Epilogue } from "next/font/google";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TimelineDemo } from "@/components/TimelineDemo";
import { DemoOrbitingCircles } from "@/components/DemoOrbitingCircles";
import Header from "@/components/Header";

const epilogue = Epilogue({ weight: "600", subsets: ["latin"] });

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
    <div className="bg-black/[0.95]">
      <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-hidden">
        <Header
          scrollToWebsiteDesign={scrollToWebsiteDesign}
          scrollToGraphicDesign={scrollToGraphicDesign}
          scrollToShopifyStores={scrollToShopifyStores}
          scrollToBrands={scrollToBrands}
        />
        {/* <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
      /> */}



        <Spotlight className="hidden md:flex md:left-[400px] z-50" fill="white" />
        <div className="p-2 mx-auto relative z-10 w-full pt-10 md:pt-20 ">
          {/* hero section title */}
          <div className="flex justify-center w-full ">
            <MaskContainer
              revealText={
                <p
                  className="w-auto lg:mx-auto bg-clip-text 
         text-transparent bg-gradient-to-b
          from-neutral-200 to bg-neutral-500 text-center text-6xl md:text-7xl lg:text-9xl font-bold"
                >
                  Want to Grow and <br /> Scale Your Business?
                </p>
              }
              size={40}
              revealSize={200}
              className="pb-5 sm:pb-20 text-center px-6 font-bold "
            >
              We are here to
              <br /> <span className="text-emerald-500">Scale</span> Your{" "}
              <span className="text-red-500">Business.</span>
            </MaskContainer>
          </div>

          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-1">
            "Your Vision, Our Expertise— We build Websites That Elevate Your Brand."
          </p>
          <Link
            href=""
            className="cursor-pointer hover:shadow-lg hover:shadow-white/30 duration-300 flex justify-center items-center border rounded-full w-48 p-2 mx-auto mt-6 text-white"
          >
            Book a call
          </Link>

          {/* <TimelineDemo /> */}

          <div className="w-full pt-2">
            {/* <div ref={websiteDesignRef}>
              <SliderOne />
            </div> */}
            <Services />

            <div ref={graphicDesignRef}>
              <GraphicDesign />
            </div>
            <div>
              {/* <TimelineDemo /> */}
            </div>
            <div ref={shopifyStoresRef}>
              <ShopifyStores />
            </div>
            <div ref={brandsRef}>
              {/* <Brands /> */}
              <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50 mt-20">
                Our Tech Stack <br />
              </div>
              <p className="mt-4 text-lg font-normal  text-neutral-300 text-center mx-[10%]">
                Our tech stack combines modern frameworks like React, Next.js, Node.js, and MongoDB,
                with tools like Tailwind CSS and Vercel to build scalable, high-performance
                applications efficiently.
              </p>
              <DemoOrbitingCircles />
            </div>
            <FAQS />
          </div>
        </div>
      </div>
    </div>
  );
}
