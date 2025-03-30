import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { WHY_CHOOSE_US } from "@/constant/data";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container mt-10">
      <div className="flex justify-between items-center">
        <div className="max-w-[650px]">
          <h2 className="text-5xl mb-5">Why Choose Surventix?</h2>
          <p className="text-sm opacity-80">
            At Surventix, we redefine market intelligence through a harmonized
            fusion of advanced analytics, strategic expertise, and cutting-edge
            technology, ensuring that businesses not only navigate complexities
            but also seize untapped opportunities with precision. Here’s what
            sets us apart:
          </p>
        </div>

        <div>
          <button className="uppercase text-xs py-3 px-7 bg-white text-[#02000F] rounded-3xl">Reach out to us</button>
        </div>
      </div>

      <div>
        <Carousel className="w-full mx-auto pb-28 mt-16">
          <CarouselContent className="-ml-4 md:-ml-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <CarouselItem
                key={index}
                className={`  pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3 `}
              >
                <div className="relative h-[460px] rounded-md group overflow-hidden">

                  <div className="absolute inset-0">
                    <Image className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out" src={item.image} width={400} height={500} alt={item.title} />
                  </div>

                  <div className="relative h-full w-full bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-7">
                    <h3 className="text-2xl font-medium mb-5">{item.title}</h3>
                    <p className="text-white/80 group-hover:text-white">{item.description}</p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-1/2 translate-x-1/2">
            <CarouselPrevious className=" top-10" />
            <CarouselNext className=" top-10" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default WhyChooseUs;
