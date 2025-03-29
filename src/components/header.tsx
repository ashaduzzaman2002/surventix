"use client";

import { NAV_LINKS } from "@/constant/path";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        isScrolled ? "bg-[#00233C]" : "bg-[#00233C]/40",
        "fixed w-full top-0 z-50"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
              <div className="bg-white w-[40px] h-[40px]"></div>
            </div>
            <Image
              className="relative"
              src="/logo.png"
              alt="logo"
              width={74}
              height={74}
            />
          </div>
          <div>
            <p className="uppercase font-bold text-lg">Surventix</p>
            <p className="text-xs opacity-80">Driven By Discovery</p>
          </div>
        </div>

        <ul className="flex gap-7">
          {NAV_LINKS.map((item, i) => (
            <li key={i} className="nav-links">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/signup"
            className="border-2 border-[#5CE1F2] text-[#5CE1F2] hover:bg-[#5CE1F2] hover:text-[#04021d] duration-300 transition-all ease-in-out px-8 text-lg capitalize py-2.5 rounded-4xl"
          >
            join our panel
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
