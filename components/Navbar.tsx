import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              src="logo.svg"
              alt="Logo"
              priority
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
        md:flex space-x-10 items-center
         text-slate-300 text-center bg-clip-text 
         text-transparent bg-gradient-to-b
          from-neutral-50 to bg-neutral-400 bg-opacity-50 "
        >
          <div className="hover:text-gray-50">Website Design</div>
          <div className="hover:text-gray-50">Graphic Design</div>
          <div className="hover:text-gray-50">Shopify Stores</div>
          <div className="hover:text-gray-50">Brands</div>

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
