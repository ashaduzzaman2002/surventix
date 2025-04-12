import { SECURITY_CHECK } from "@/constant/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background:
            "url(/surv-bg6.jpg)",
            backgroundPosition: 'center'
        }}
      ></div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">Home</Link> <span>/</span> <div>Security Check</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              Lock It. Protect It. Trust It
            </h1>
            <p className="max-w-[700px] md:text-2xl text-base tracking-[0.5px] mb-6">
              At Surventix, we prioritize data security with top-tier
              encryption, strict authentication, and global compliance—ensuring
              your information stays safe, private, and trustworthy.
            </p>

            <a
              href="#online"
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

      <div id="online" className="relative bg-[#02000F] md:py-20 py-12">
        <div className="container mb-16 text-center">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5  text-center">
            Online Market Research
          </h2>

          <p className="max-w-[800px] mx-auto mb-10 opacity-80 md:text-base text-sm">
            At Surventix, safeguarding data integrity and privacy is at the core
            of our operations. We have implemented industry-leading security
            measures to protect sensitive information, ensure respondent
            authenticity, and maintain compliance with global regulations. Our
            comprehensive approach guarantees reliable insights while upholding
            the highest standards of confidentiality.
          </p>

          <Link
            href="/our-services"
            className="border-[1.5px] border-white md:py-3 py-2.5 md:px-8 px-6 text-sm md:text-base "
          >
            Explore More
          </Link>
        </div>

        {SECURITY_CHECK.map((item, index) => (
          <div key={index} className="relative md:h-[550px] h-[600px] group overflow-hidden">
            <div className="absolute inset-0">
              <Image
                className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
                src={item.image}
                width={1200}
                height={550}
                alt={item.title || ""}
              />
            </div>

            <div className="relative h-full w-full bg-gradient-to-t from-black/80 to-black/40 flex flex-col justify-center">
              <div className="container ">
                <h3 className="text-2xl font-medium md:mb-5 mb-3">{item.title}</h3>

                {item.description ? (
                  <p className="md:mb-10 mb-7 max-w-[700px] text-white/80 group-hover:text-white md:text-base text-sm  ">
                    {item.description}
                  </p>
                ) : (
                  <ul className="max-w-[700px] flex flex-col md:gap-4 gap-2 md:mb-10 mb-7">
                    {item.items?.map((value, i) => (
                      <li
                        className="text-white/80 group-hover:text-white md:text-base text-sm"
                        key={i}
                      >
                        • {value}
                      </li>
                    ))}
                  </ul>
                )}

                <button className="border-[1.5px] border-white md:py-3 py-2.5 md:px-8 px-6 text-sm md:text-base">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
