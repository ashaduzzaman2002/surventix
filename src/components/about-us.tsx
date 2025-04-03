import React from "react";
import Link from "next/link";
import Image from "next/image";
import { about1, about2 } from "@/assets";
import { PlayWhite } from "@/assets/Icon";

const AboutUs = () => {
  return (
    <div className=" text-white md:py-10 py-8">
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-20 gap-12 md:mt-16 mt-8">
          <div className="flex flex-col justify-center">
            <div className="md:mb-16 mb-4">
              <div className="max-w-[650px] mx-auto">
                <h2 className="md:text-5xl text-3xl md:mb-5 mb-3">About Us</h2>
                <p className=" opacity-80 mb-5 md:mb-0">
                  We turn research into results, We don’t just follow trends—we
                  predict them so you’re always one step ahead!
                </p>
              </div>
            </div>

            <p className="md:text-lg text-sm">
              At Surventix, we are redefining the way businesses approach market
              research and problem-solving. We don’t just adapt to change—we
              anticipate it, innovate around it, and create solutions that drive
              real impact. Our commitment to excellence enables us to
              consistently deliver meaningful, sustainable outcomes that benefit
              both our clients and the communities they serve.
            </p>

            <div className="mt-10">
              <Link
                href="/about-us"
                className="uppercase text-xs py-3 px-7 bg-white text-[#02000F] rounded-3xl"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:pl-8 relative z-10">
            <div className="h-full md:min-h-[500px] relative z-10">
              <div className="h-[90%] w-[90%] overflow-hidden rounded-[15px]">
                <Image
                  src={about1}
                  className="h-full aspect-square object-cover"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
