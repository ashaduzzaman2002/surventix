import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import Image from "next/image";
import Link from "next/link";
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
    <div className="grid md:grid-cols-2 h-screen">
      <div className="relative hidden md:flex flex-col justify-between overflow-hidden">
        <Link href='/' className="flex items-center gap-2 px-8 py-4">
        <Image src='/SURVENTIX.png' alt="SURVENTIX" width={100} height={70} />
        </Link>

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
