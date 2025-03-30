"use client";

import { about1, about2 } from "@/assets";
import { PlayWhite } from "@/assets/Icon";
import OurVission from "@/components/about/our-vission";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "@/components/about/why-choose-us";
import MeetOurTeam from "@/components/about/team";
// import CompanyOverview from "@/components/about/company-overview";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div>
      <section className="relative mb-[80px] overflow-hidden bg-gradient-to-tr from-[#5D1FE6] to-[#03C8CF] mt-16 py-10">
        <div className="container">
          <div className="grid grid-cols-2 overflow-hidden ">
            <div className="flex w-full flex-col pr-0 mb-4 mb-md-0 relative z-10">
              <h1 className="text-white text-sm mb-2 pt-[30px] uppercase tracking-wider">
                Company Overview
              </h1>
              <h2 className="text-white text-[50px] leading-[50px] font-bold mb-5 ">
                Smarter connections, stronger insights, research unleashed -
                Powered by People, Strengthened by Partnerships
              </h2>
              <p className="text-white text-sm  pt-0 mb-5 xl:mb-[30px] md:pr-[30px]">
                At Surventix, we don’t just connect dots—we turbocharge data!
                With a rock-solid open infrastructure, we weave research
                objects, entities, and actions into a seamless scholarly web,
                fueling open research like never before. <br />
                <br />
                Backed by our global community, we drive precision metadata
                exchange, handling billions of API queries that keep research
                flowing freely. Because when knowledge moves, the world
                improves. �✨
              </p>
              <div className="flex mb-0 gap-[30px] items-center">
                <button className="uppercase text-xs py-2.5 px-4 bg-white text-[#02000F] rounded-3xl">
                  JOIN OUR Penel
                </button>

                <a className="btn-anchor mt-0 mb-0 " href="#">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="flex flex-col  justify-center items-center pl-8 relative z-10">
              <div className=" h-full relative z-10">
                <div className="h-[90%] w-[90%] overflow-hidden rounded-[15px]">
                  <Image
                    src={about1}
                    className="h-full object-cover"
                    alt="image"
                  />
                </div>

                <div className="w-[50%] aspect-square absolute bottom-0 right-0 rounded-[10px] border-[5px] border-[#F7F9FC]">
                  <Image
                    src={about2}
                    className="h-full w-full rounded-[10px] object-cover"
                    alt="image"
                  />

                  <div className="absolute flex items-center justify-center top-0 left-0 right-0 rounded-[10px] bottom-0 bg-[#222d3960]">
                    <div className="h-[55px] w-[55px]">
                      <PlayWhite />
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="absolute bottom-0"
                src="https://www.qualtrics.com/m/assets/wp-content/uploads/2024/09/phone-gb.svg"
              />
            </div>
            <img
              src="https://www.qualtrics.com/m/assets/wp-content/uploads/2024/09/wsj_mobile_bg_nodots.webp"
              className="block xl:hidden absolute w-full h-full"
              style={{ top: 0, left: 0 }}
            />
            <img
              src="https://www.qualtrics.com/m/assets/wp-content/uploads/2024/09/section-bg@2x-scaled.webp"
              className="hidden xl:flex absolute w-full h-full"
              style={{ top: 0, left: 0 }}
            />
          </div>
        </div>
      </section>
      {/* <CompanyOverview /> */}

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <OurVission />
      </motion.div>

      <WhyChooseUs />
      <MeetOurTeam />
    </div>
  );
};

export default AboutUs;
