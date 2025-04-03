"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll } from "framer-motion";

const sections = [
  {
    title: "Surventix: Pioneering the Future of Market Intelligence",
    content:
      "At Surventix, we are committed to redefining the paradigm of market research by integrating advanced analytical frameworks, cutting-edge technological ecosystems, and data-driven methodologies to construct a research infrastructure that is both rigorous and adaptive.",
  },
  {
    title: "Innovating for Impact",
    content:
      "We continuously refine our approach and reimagine solutions to address evolving marketplace challenges, ensuring impactful and sustainable outcomes.",
  },
  {
    title: "Empowering Businesses of All Sizes",
    content:
      "From India’s largest corporations striving for global leadership to agile startups driving transformative change, we support organizations in achieving sustainable, inclusive growth.",
  },
  {
    title: "Strategic Industry Partnerships",
    content:
      "Our collaborations with leading market research firms enable us to foster growth, enhance capabilities, and deliver exceptional value to our clients.",
  },
  {
    title: "Data-Driven Excellence",
    content:
      "Leveraging advanced digital tools, analytics, and decades of experience, we provide insights that drive meaningful and measurable impact.",
  },
];

export default function OurVission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex);
  console.log(scrollYProgress);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top } = containerRef.current.getBoundingClientRect();
      const sectionHeight = window.innerHeight * 0.6;
      const scrollPosition = window.scrollY - (window.scrollY + top);
      const newIndex = Math.floor(scrollPosition / sectionHeight);

      setActiveIndex(Math.min(sections.length - 1, Math.max(0, newIndex)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative text-white">
      <motion.h2
        className="md:text-5xl text-3xl sticky top-28 max-w-[300px] text-center font-semibold mx-auto"
        animate={
          activeIndex === sections.length - 1
            ? { y: -200, opacity: 0 }
            : { y: 0, opacity: 1 }
        }
        transition={{ duration: 0.5 }}
      >
        Our{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to bg-yellow-500 bg-clip-text text-transparent">
          Vision
        </span>{" "}
        <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to bg-pink-500 bg-clip-text text-transparent">
          and
        </span>{" "}
        Mission:
      </motion.h2>
      {sections.map((section, index) => {
        return (
          <motion.div
            key={index}
            className={`sticky md:top-[210px] top-[180px] left-0 w-full md:h-[60vh] h-[50vh] flex items-center justify-center px-6 `}
            style={{ zIndex: sections.length + index }}
          >
            <motion.div style={{}}>
              <Card className="max-w-2xl md:h-[240px] h-[260px] bg-gray-800 md:p-6 rounded-2xl shadow-xl">
                <CardContent>
                  <h2 className="md:text-2xl text-xl font-bold mb-4">
                    {section.title}
                  </h2>
                  <p className="md:text-lg text-sm">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
