import Image from "next/image";
import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Our Services",
    href: "/our-services",
  },
  {
    label: "Code of Conduct",
    href: "/code-of-conduct",
  },
  {
    label: "Security Check",
    href: "/security-check",
  },
  {
    label: "Carrier",
    href: "/carrier",
  },
];

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#00233C]/40">
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
            <p className="text-xs opacity-80">Driven By Discover</p>
          </div>
        </div>

        <ul className="flex gap-7">
          {NAV_LINKS.map((item, i) => (
            <li key={i}>
              <Link href={item.href} >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Link href='#' className="border border-white px-8 text-lg capitalize py-2.5 rounded-4xl">Join our panel</Link>
          {/* <StarBorder>
          Join Our Panel
      </StarBorder> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
