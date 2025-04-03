import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { OUR_REACH } from "@/constant/data";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Flag from "react-world-flags";

const Client = () => {
  return (
    <div className="md:py-16 py-8">
      <h2 className="md:text-5xl text-3xl  text-center md:mb-16 mb-8">
        Our reach spans across
      </h2>

      <div className="relative">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {OUR_REACH.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/5"
              >
                <div className="p-1">
                  <Card
                    className={cn(
                      "flex flex-col justify-center items-center rounded-lg border-t",
                      "bg-gradient-to-b from-muted/50 to-muted/10",
                      "p-4 text-start sm:p-6",
                      "hover:from-muted/60 hover:to-muted/20",
                      "max-w-[320px] sm:max-w-[320px]",
                      "transition-colors duration-300 h-32"
                    )}
                  >
                    <Flag style={{ width: 50 }} code={item.icon} />
                    <p className="sm:text-md text-sm text-muted-foreground">
                      {item.text}
                    </p>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#02000f] sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#02000f] sm:block" />
      </div>
    </div>
  );
};

export default Client;
