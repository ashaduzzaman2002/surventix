"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, LinkedIn, X, YouTube } from "@/assets/Icon";
import { NAV_LINKS } from "@/constant/path";
import { motion } from "framer-motion";
import { Input } from "./ui/input";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col text-white py-9"
      style={{ background: "linear-gradient(180deg, #02000f, #001238)" }}
    >
      <div className="container">
        <div className="flex justify-between gap-[125px] pb-[80px]">
          <div>
            <div>
              <Link href="/">
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
              </Link>
            </div>
          </div>
          <div>
            <div className=" mt-2.5">
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

              <div className="gap-[30px] flex  flex-col opacity-80">
                {NAV_LINKS.map((item, i) => (
                  <Link key={i} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2.5">
            <h3 className="text-xl font-semibold mb-6">Let’s Connect!</h3>
            <div className="flex gap-[30px] flex-col opacity-80">
              <p>
                5th Floor, DLF Two Horizon Centre, <br /> DLF Phase 5, Sector 43,
                Gurugram, <br /> Haryana 122002
              </p>
              <a target="_blank" href="#">
                +91 89502 36451
              </a>
              <a target="_blank" href="#">
                contactus@surventix.com
              </a>
            </div>
          </div>

          <div>
            <div className="Footer_styles_socials__TONa1 flex flex-wrap pb-10 gap-[14px]">
              <a target="_blank" href="#">
                <Facebook />
              </a>
              <a target="_blank" href="#">
                <X />
              </a>
              <a target="_blank" href="#">
                <LinkedIn />
              </a>
              <a target="_blank" href="#">
                <YouTube />
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Download Panel Book
              </h3>

              <div>
                <Input
                  className="h-12"
                  placeholder="Enter Your Email Address"
                />
              </div>

              <div>
                <button className="w-full bg-[#5CE1F2] border border-[#5CE1F2] duration-300 transition-all ease-in-out hover:bg-transparent hover:text-[#5CE1F2] mt-6 h-12 rounded-lg text-[#04021d] font-medium text-lg">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center border-t border-[#84828c] pt-5 gap-5">
          <p className="text-[10px] text-[#84828c] text-center">
            Copyright © <span>2025</span> 2025 Surventix
            <br />
            All rights reserved. Powered by Surventix
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
