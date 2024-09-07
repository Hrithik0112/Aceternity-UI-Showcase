"use client";

import React, { useState } from "react";
// import MenuIcon from "@/assets/icon-menu.svg";
// import CloseIcon from "@/assets/icon-close.svg"; // Assuming you have a close icon for the dropdown

import Dropdown from "./Dropdown-Menu"; // Import your Dropdown component
import BasicButton from "./BasicButton";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
}

const Header = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
}: HeaderProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50  ">
      
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl mx-auto max-w-[900px] md:backdrop-blur">
          <div className="h-10 w-10 border border-white/15 inline-flex justify-center items-center rounded-lg">
        <Link href="/">
            <Image src="./brandlogo.svg" alt="brandlogo" width={8} height={8}/>
        </Link>
          </div>
          <div className="hidden md:block ">
            <nav className="flex gap-8 text-sm">
              <a onClick={scrollToWebsiteDesign} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Website Design
              </a>
              <a onClick={scrollToGraphicDesign} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Graphic Design
              </a>
              <a onClick={scrollToShopifyStores} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Shopify Stores
              </a>
              <a onClick={scrollToBrands} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Brands
              </a>
              <a href="/pricing" className="text-white/70 hover:text-white transition-colors">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-white">
            <Link href="/contact">
            <BasicButton>Contact</BasicButton>
            </Link>
            <div className="md:hidden" onClick={toggleDropdown}>
              {isDropdownVisible ? (
                <X className="h-6 w-6 cursor-pointer text-white/70" />
              ) : (
                <MenuIcon className="h-6 w-6 cursor-pointer text-white/70" />
              )}
            </div>
          </div>
        </div>
    
      {isDropdownVisible && (
        <Dropdown onClose={closeDropdown} />
      )}
    </header>
  );
};

export default Header;
