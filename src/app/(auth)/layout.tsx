import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="relative flex flex-col justify-between overflow-hidden">
        <div className="flex items-center gap-2 px-8 py-4">
          <div className="relative">
            <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
              <div className="bg-white w-[40px] h-[40px]"></div>
            </div>
            <Image
              className="relative"
              src="/logo.png"
              alt="logo"
              width={74}
              height={74}
            />
          </div>
          <div>
            <p className="uppercase font-bold text-lg">Surventix</p>
            <p className="text-xs opacity-80">Driven By Discovery</p>
          </div>
        </div>

        <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
