import React from "react";
import Link from "next/link";
import Image from "next/image";
import { programme3 } from "@/assets";
import { PlayWhite } from "@/assets/Icon";

const OurExpertise = () => {
  return (
    <div className=" text-white pb-[80px] pt-10">
      <div className="container">
        <h1 className="text-5xl  font-semibold mb-[120px] text-center">
          What to Expect at Surventix
        </h1>
        <div className="grid grid-cols-2 gap-20">
          <div className="relative">
            <Image
              src={programme3}
              className="h-full max-h-[400px] w-full rounded-[15px] object-cover"
              alt="programme"
            />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 rounded-[15px] flex justify-center items-center">
              <div className="w-16 h-16">
                <PlayWhite />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[20px] font-medium">
              Our team of experts brings a wealth of industry knowledge,
              functional expertise, and diverse perspectives that challenge
              conventional thinking and drive meaningful change. We don’t just
              analyze problems—we rethink possibilities, question assumptions,
              and uncover opportunities that others might overlook. With a deep
              understanding of evolving market dynamics, we equip our clients
              with the insights and strategies needed to navigate complexities,
              seize opportunities, and stay ahead of the curve.
            </p>

            <div className="mt-20">
              <Link
                href="#"
                className="border border-[#5CE1F2] bg-[#5CE1F2]  text-[#04021d] h-[52px] text-[20px] px-[32px] font-medium text-lg capitalize py-2.5 rounded-4xl"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
