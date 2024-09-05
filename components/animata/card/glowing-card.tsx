import Image from "next/image";
import React from "react";
interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Starting gradient color.
   */
  fromColor?: string;
  /**
   * Middle gradient color.
   */
  viaColor?: string;
  /**
   * Ending gradient color.
   */
  toColor?: string;
  imgSource : string;
}

export default function GlowingCard({
  fromColor = "#4158D0",
  viaColor = "#C850C0",
  toColor = "#FFCC70",
  imgSource
}: GlowCardProps) {
  return (
    <div
      className="rounded-3xl bg-gradient-to-r p-0.5 hover:shadow-glow hover:brightness-150"
      style={{
        transition: " box-shadow 0.5s ease",
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
      }}
    >
      <div
        className="blur-20 inset-0 h-full w-full rounded-3xl bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]"
        style={{ transition: "filter 0.5s ease" }}
      />
      <div className="flex h-64 w-56 justify-center items-center rounded-3xl bg-black p-4">
        {/* <div className="mb-2 text-xl font-bold text-gray-50">Glowing</div>

        <div className="flex-1 text-sm font-medium text-gray-100 text-opacity-80">
          A glowing card is a card that glows.
        </div> */}
        <Image  src={imgSource}
                width={200}
                height={200}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"/>
      </div>
    </div>
  );
}
