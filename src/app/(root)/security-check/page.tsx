import { SECURITY_CHECK } from "@/constant/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div
        className="h-screen bg-cover fixed top-0 w-full"
        style={{
          background:
            "url(https://www.surventix.com/wp-content/uploads/2025/01/surv-bg6.jpg)",
        }}
      ></div>

      <div className="h-screen relative bg-gradient-to-br from-black/50 to-black/15">
        <div className="container pt-40 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">Home</Link> <span>/</span> <div>Security Check</div>
          </div>

          <div className="mt-16">
            <h1 className="mb-8 leading-[64px] text-[64px]">
              Lock It. Protect It. Trust It
            </h1>
            <p className="max-w-[700px] text-2xl tracking-[0.5px] mb-6">
              At Surventix, we prioritize data security with top-tier
              encryption, strict authentication, and global compliance—ensuring
              your information stays safe, private, and trustworthy.
            </p>

            <a
              href="#services"
              className="text-lg tracking-[0.5px] flex items-center gap-4"
            >
              Read More{" "}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-[#02000F] py-20">
        <div className="container mb-16 text-center">
          <h2 className="text-[35px] leading-[35px] mb-5  text-center">
            Online Market Research
          </h2>

          <p className="max-w-[800px] mx-auto mb-10 opacity-80">
            At Surventix, safeguarding data integrity and privacy is at the core
            of our operations. We have implemented industry-leading security
            measures to protect sensitive information, ensure respondent
            authenticity, and maintain compliance with global regulations. Our
            comprehensive approach guarantees reliable insights while upholding
            the highest standards of confidentiality.
          </p>

          <Link
            href="/our-services"
            className="border-[1.5px] border-white py-3 px-8 "
          >
            Explore More
          </Link>
        </div>

        {SECURITY_CHECK.map((item, index) => (
          <div key={index} className="relative h-[550px] group overflow-hidden">
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
                <h3 className="text-2xl font-medium mb-5">{item.title}</h3>

                {item.description ? (
                  <p className="mb-10 max-w-[700px] text-white/80 group-hover:text-white   ">
                    {item.description}
                  </p>
                ) : (
                  <ul className="max-w-[700px] flex flex-col gap-4 mb-10">
                    {item.items?.map((value, i) => (
                      <li
                        className="text-white/80 group-hover:text-white"
                        key={i}
                      >
                        • {value}
                      </li>
                    ))}
                  </ul>
                )}

                <button className="border-[1.5px] border-white py-3 px-8">
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
