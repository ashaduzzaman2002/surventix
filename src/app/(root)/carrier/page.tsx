import FAQcard from "@/components/card/FAQcard";
import JobCard from "@/components/card/JobCard";
import { OPPORTUNITIES } from "@/constant/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const benefits = [
  {
    id: 1,
    title: "Hands-On Experience",
    description: "Work on real-world projects and gainpractical insights.",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: "Learn from industry leaders with years of experience.",
  },
  {
    id: 3,
    title: "Innovation-Driven Environment",
    description: "Be part of a dynamic team that values fresh ideas.",
  },
  {
    id: 4,
    title: "Career Growth",
    description: "Build a strong foundation for long-term success.",
  },
];

const Page = () => {
  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background: "url(/bg.png)",
          backgroundPosition: "center",
        }}
      >
        <video
          className="h-full w-full object-cover"
          muted={true}
          autoPlay={true}
          loop={true}
          src="/bg-video.mp4"
        ></video>
      </div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">Home</Link> <span>/</span> <div>Carrier</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              Build a future you <br /> believe in
            </h1>

            <a
              href="#coc"
              className="md:text-lg text-base tracking-[0.5px] flex items-center gap-4"
            >
              Browse Jobs{" "}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#02000F] relative">
        {/* <div className="container py-16 grid grid-cols-2 gap-20">
          <div className="">
            <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 capitalize">
              Join Our Team
            </h2>
            <p className="text-lg">
              As a global company, we offer exceptional career and development
              opportunities with attractive remuneration for candidates in
              different roles in our Online Market Reserach services and
              Consulting businesses in our corporate offices and regional
              subsidiaries in Asia Pacific, North America, Europe and the Middle
              East.
            </p>
          </div>

          <div>
            <Image
              src="/Learning.png"
              alt="learning"
              width={554}
              height={354}
            />
            <iframe
              width="554"
              height="354"
              src="https://www.youtube.com/embed/L1Z_dn3QYSA"
              title="At TCS, a career means more than just a job"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}

        <div className="relative bg-[#02000F] md:pb-20 container pt-20">
          <div className="container">
            <div className="md:text-center md:sticky top-80">
              <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
                Join Our Team
              </h2>

              <p className="max-w-[750px] mx-auto text-white/80">
                As a global company, we offer exceptional career and development
                opportunities with attractive remuneration for candidates in
                different roles in our Online Market Reserach services and
                Consulting businesses in our corporate offices and regional
                subsidiaries in Asia Pacific, North America, Europe and the
                Middle East.
              </p>
            </div>
            <div className="md:mt-16 mt-8  mx-auto">
              {OPPORTUNITIES.map((item) => (
                <JobCard
                  key={item.id}
                  title={item.title}
                  animationFile={item.animation}
                  className={item.className}
                  content={item.content || [""]}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex items-center justify-center ">
            <div className="max-w-3xl shadow-xl rounded-2xl text-center">
              <h2 className="text-3xl font-bold">
                Kickstart Your Career with{" "}
                <span className="text-blue-600">Surventix</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg">
                Looking for a career in market research and consumer insights?
                At Surventix, we provide exciting opportunities for ambitious
                individuals looking to grow, learn, and make an impact in the
                ever-evolving world of data and advertising.
              </p>
              <div className="mt-10 flex flex-col gap-4">
                {benefits.map((item) => (
                  <FAQcard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
