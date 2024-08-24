"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/test-image-1.png", alt: "Test Image 1", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", alt: "Image 1", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "Image 2", link: "/images" },
  { src: "/test-image-2.png", alt: "Test Image 2", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Image 4", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Image 5", link: "/images" },
  { src: "/test-image-3.png", alt: "Test Image 3", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Image 7", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Image 8", link: "/images" },
  { src: "/test-image-4.png", alt: "Test Image 4", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", alt: "Image 10", link: "/images" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", alt: "Image 11", link: "/images" },
];

const WebsiteDesign = () => {
  const [cursorContent, setCursorContent] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e : any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (alt : any) => {
    setCursorContent(alt);
  };

  const handleMouseLeave = () => {
    setCursorContent("");
  };

  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-100 bg-opacity-50">
          Website Design <br /> that works
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating, designing, and developing websites that work for your business.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(image.alt)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={image.link} className="pointer-events-auto">
              <Image
                width={500}
                height={500}
                priority
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
              />
            </Link>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg pointer-events-none">
              {/* <span className="text-white text-lg font-semibold">{image.alt}</span> */}
            </div>
          </div>
        ))}

        {/* Custom Cursor */}
        <div
          className="fixed pointer-events-none z-50 text-white text-lg font-semibold"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: "translate(-50%, -50%)",
            opacity: cursorContent ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          {cursorContent}
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
