import { about1, about2 } from "@/assets";
import { PlayWhite } from "@/assets/Icon";
import Image from "next/image";
import React from "react";

const JoinUs = () => {
  return (
    <div className="md:py-16 py-8 container">
      <div className="grid md:grid-cols-2 md:gap-10 gap-5">
        <div className="flex flex-col">
          <h2 className="md:text-5xl text-3xl mb-5">Our Values</h2>

          <p className="mb-10">Serious Business, With a Dash of Fun</p>

          <p>
            At Surventix, we take our values very seriously—but who says
            professionalism can’t come with a bit of personality? We believe in
            ethics, integrity, and conducting business the right way... and also
            in celebrating small wins (yes, even surviving a Monday counts).{" "}
            <br />
            <br />
            Our team is built on trust, accountability, and an unshakable
            commitment to excellence—plus a shared understanding that coffee is
            a fundamental right. Every decision we make is backed by principles,
            transparency, and maybe just a little caffeine-fueled genius. <br />{" "}
            <br />
            Because at Surventix, we don’t just work hard—we work smart, with a
            smile.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center pl-8 relative z-10">
          <div className="h-full md:min-h-[500px] relative z-10">
            <div className="h-[90%] w-[90%] aspect-square overflow-hidden rounded-[15px]">
              <Image src={about1} className="h-full object-cover" alt="image" />
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
  );
};

export default JoinUs;
