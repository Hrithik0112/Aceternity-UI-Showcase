"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown-Menu";

const Navbar = () => {
  const [isDropdownvisible, setIsDropdownvisible] = useState(false);

  const ToggleDropdown = () => {
    setIsDropdownvisible(!isDropdownvisible);
  };
  const ClosedropDown = () => {
    setIsDropdownvisible(false);
  };
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
        <div className="flex md:hidden">
          {isDropdownvisible ? (
            <div className="w-8 h-8 cursor-pointer text-slate-300" onClick={ToggleDropdown}>
              <X />
              <Dropdown onClose={ClosedropDown} />
            </div>
          ) : (
            <AlignJustify
              className="w-8 h-8 cursor-pointer text-slate-300"
              onClick={ToggleDropdown}
            />
          )}
        </div>
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 
            animate-shimmer items-center 
            justify-center rounded-md border 
            border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors 
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
            focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
