import { OUR_SERVICES } from "@/constant/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <div className="">
      <div
        className="h-screen bg-cover fixed top-0 w-full"
        style={{
          background:
            "url(https://www.surventix.com/wp-content/uploads/2025/01/surv-bg4.jpg)",
        }}
      ></div>

      <div className="h-screen relative bg-gradient-to-br from-black/50 to-black/15">
        <div className="container pt-40 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">Home</Link> <span>/</span> <div>Our Services</div>
          </div>

          <div className="mt-16">
            <h1 className="mb-8 leading-[64px] text-[64px]">Our Services</h1>
            <p className="max-w-[700px] text-2xl tracking-[0.5px] mb-6">
              {" "}
              Explore our expert solutions designed to drive success with
              innovation and efficiency.
            </p>

            <a href='#services' className="text-lg tracking-[0.5px] flex items-center gap-4">
              Browse Now{" "}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div id="services" className="bg-[#02000F] relative py-20 ">
        <div className="container">
          <h2 className="text-[35px] leading-[35px] mb-16">
            Our services, customized for you
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {OUR_SERVICES.map((item, index) => (
              <div key={index} className="relative h-[350px] rounded-md group overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
                    src={item.image}
                    width={300}
                    height={350}
                    alt={item.title}
                  />
                </div>

                <div className="relative h-full w-full bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-5">
                  <h3 className="text-2xl font-medium mb-5">{item.title}</h3>
                  <p className="text-white/80 group-hover:text-white line-clamp-3">
                    {item.description}
                  </p>

                  <Link className="mt-5 text-[#5CE1F2] font-semibold" href={`/our-services/${item.slug}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
