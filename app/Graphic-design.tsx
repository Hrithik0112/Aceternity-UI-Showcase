"use client";

import { ThreeDCardDemo } from "@/components/snippets/ThreeDCardEx";
import { motion } from "framer-motion";


import SHARDIUM_SCREENSHOT from "@/public/images/shardium.png"
import DECENTRA from "@/public/images/decentra.png"

const data = [
  {
    title: "Decentraclasses",
    desc: "First to offer web3 related courses in the internet",
    img: DECENTRA,
    url: "https://www.decentraclasses.com/",
  },
  {
    title: "Shardeum University",
    desc: "We built the course, program contests for the shardeum with web3",
    img: SHARDIUM_SCREENSHOT,
    url: "https://university.shardeum.org/",
  },
  {
    title: "Decentraclasses",
    desc: "First to offer web3 related courses in the internet",
    img: DECENTRA,
    url: "https://www.decentraclasses.com/",
  },
]

const GraphicDesign = () => {

  return (
    <div>
      <div className="p-2 md:p-4 mx-auto relative z-10  w-full pt-5 md:pt-7">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Our Recent Projects  <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 text-center mx-[5%] lg::mx-[30%]">
          We create stunning visuals for your brand. From logos to social media posts, we&apos;ve
          got you covered.
        </p>
        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10 ">
          {
            data.map((single) => <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className=""
            >
              <ThreeDCardDemo data={single} />
            </motion.div>)
          }

        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
