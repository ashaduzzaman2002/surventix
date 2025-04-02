"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CodeOfConduct from "@/components/coc/CodeOfConduct";
import Ethics from "@/components/coc/Ethics";
import Commitment from "@/components/coc/Commitment";
import Faq from "@/components/coc/Faq";

const Page = () => {
  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background:
            "url(https://www.surventix.com/wp-content/uploads/2025/01/surv-bg3.jpg)",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">Home</Link> <span>/</span> <div>Code of Conduct</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              Code of Conduct
            </h1>
            <p className="max-w-[800px] md:text-2xl text-base tracking-[0.5px] mb-5">
              Upholding Integrity, Excellence, and Responsibility
            </p>
            <p className="max-w-[800px] md:text-2xl text-base tracking-[0.5px] mb-6">
              At Surventix, we are dedicated to upholding the highest standards
              of integrity, professionalism, and respect. Our Code of Conduct
              serves as a guiding framework for our employees, partners, and
              stakeholders, ensuring that our actions consistently reflect our
              core values
            </p>

            <a
              href="#coc"
              className="md:text-lg text-base tracking-[0.5px] flex items-center gap-4"
            >
              Read More{" "}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <CodeOfConduct />
      <Commitment />
      <Ethics />
      <Faq />
      
    </div>
  );
};

export default Page;

