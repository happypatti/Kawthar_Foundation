"use client";

import useScroll from "@/lib/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./nav-links";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const scrolled = useScroll(50);

  const navBarClasses = cn(
    "fixed top-0 flex w-full justify-center z-30 transition-all",
    scrolled ? " bg-black backdrop-blur-xl" : "bg-black",
  );

  const mobileNavClasses = cn("overflow-y-auto sm:hidden", {
    "fixed inset-x-0 bottom-0 top-14 mt-px bg-white/50 backdrop-blur-xl": isOpen,
    hidden: !isOpen,
  });

  return (
    <>
      <div className={navBarClasses}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 w-full items-center justify-between">
          <Link href="/" className="flex items-center justify-center font-italic xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-bold text-white mt-4 mb-4">
        The Kawthar Foundation
      </Link>
            <NavLinks className="hidden items-center text-xl space-x-8 whitespace-nowrap sm:flex" close={close} />
            {/* Mobile Nav Toggle */}
            <button
              type="button"
              className="absolute right-5 top-0 flex h-14 items-center gap-x-2 px-4 text-white sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          {/* Mobile Nav */}
          <div className={mobileNavClasses}>
            <NavLinks className="flex flex-col space-y-6 px-4 pb-24 pt-5" close={close} />
          </div>
        </div>
      </div>
    </>
  );
}
