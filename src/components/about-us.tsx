import React from "react";
import Link from "next/link";
import Image from "next/image";
import { programme2 } from "@/assets";
import { PlayWhite } from "@/assets/Icon";

const AboutUs = () => {
  return (
    <div className=" text-white py-[80px]" >
      <div className="container">
        <h1 className="text-[30px] font-bold mb-[120px] text-center font-altitude">
          Know about Surventix
        </h1>
        <div className="grid grid-cols-2 gap-11">
          <div className="flex flex-col justify-center">
            <p className="text-[20px] font-medium">
              At Surventix, we are redefining the way businesses approach market research and
              problem-solving. We don’t just adapt to change—we anticipate it, innovate around it, and
              create solutions that drive real impact. Our commitment to excellence enables us to
              consistently deliver meaningful, sustainable outcomes that benefit both our clients and the
              communities they serve.
            </p>

            <div className="mt-16">
              <Link href='#' className="border border-[#5CE1F2] bg-[#5CE1F2]  text-[#04021d] h-[52px] text-[20px] px-[32px] font-medium text-lg capitalize py-2.5 rounded-4xl">Read More</Link>
            </div>

          </div>

          <div className="relative">
            <Image
              src={programme2}
              className="h-full w-full rounded-[15px] object-cover"
              alt="programme"
            />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 rounded-[15px] flex justify-center items-center">
              <div className="w-16 h-16">
                <PlayWhite />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutUs;
