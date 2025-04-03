"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "react-use-gesture";

const slides = [
  {
    content: () => (
      <>
        <h2 className="md:text-5xl text-3xl font-bold md:mb-6 mb-4  ">
          Welcome to Surventix – Your Market Research Partner
        </h2>

        <p className="md:mb-8 mb-5 text-sm md:text-base">
          <span className="opacity-80">Why guess when you can know? At </span>
          <span className="font-bold ">Surventix</span>
          <span className="opacity-80">
            , we turn raw numbers into game-changing insights that fuel smart
            business moves. Whether you're chasing hidden industry gems or
            scanning the global market for bigpicture trends, we've got the data
            magic to keep you ahead of the curve. Accurate, reliable, and packed
            with impact—because in business, the best decisions are the ones
            backed by real intelligence
          </span>
        </p>

        <p className="mb-4 font-bold md:text-xl text-lg">
          Innovative research and tech services - Smart Research. Smarter
          Strategies. Stronger Results
        </p>

        <p>
          <span className="font-bold ">Surventix</span>{" "}
          <span className="opacity-80">
            is a leading online panel company, renowned for its extensive global
            reach and robust panel of 7.5 million active users worldwide
          </span>
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    content: () => (
      <>
        <p className="mb-8">
          <span className="font-bold ">Surventix</span>
          <span className=" opacity-80">
            {" "}
            – Smarter Research. Stronger Decisions. Bigger Impact.In today’s
            fast-moving market, staying ahead requires more than just data—it
            demands intelligent insights and actionable strategies. At{" "}
          </span>
          <span className="font-bold ">Surventix</span>
          <span className=" opacity-80">
            , we empower businesses with cutting-edge market research solutions
            that decode trends, understand consumer behaviour, and drive
            game-changing decisions.
          </span>
        </p>

        <p className="mb-4 font-bold md:text-xl text-lg">
          Turn Insights into Action with Surventix
        </p>

        <p>
          <span className="opacity-80">
            Let’s unlock opportunities, fuel growth, and shape the future—
          </span>
          <span className="font-bold">together</span>.
        </p>

        <div className="flex gap-4 md:mt-10 mt-5">
          <button className="bg-[#FF1479] h-10 px-6 rounded cursor-pointer border border-[#FF1479] transition-all ease-in-out duration-200 hover:bg-transparent hover:border-white">
            Get Started
          </button>
          <a
            href="#"
            className="border-white border flex justify-center items-center h-10 px-6 rounded transition-all ease-in-out duration-200 hover:bg-[#FF1479] hover:border-[#FF1479]"
          >
            Contact Us
          </a>
        </div>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    content: () => (
      <>
        <h2 className="md:text-5xl text-3xl font-bold md:mb-6 mb-4 ">
          Find the Trends Before They Find You.
        </h2>

        <p className="mb-8">
          <span className="opacity-80">
            In a world drowning in data, making sense of it all is the real
            game-changer. That’s where
          </span>
          <span className="font-bold "> Surventix</span>{" "}
          <span className="opacity-80">
            {" "}
            steps in—we don’t just crunch numbers, we decode the story behind
            them. Whether you’re eyeing the next big market shift or trying to
            outsmart the competition, we bring you insights that actually
            matter.
          </span>
        </p>

        <p className="mb-4 font-bold md:text-xl text-lg">
          Surventix – Because Guesswork is So Last Season
        </p>

        <div className="flex gap-4 md:mt-10 mt-5">
          <button className="bg-[#FF1479] h-10 px-6 rounded cursor-pointer border border-[#FF1479] transition-all ease-in-out duration-200 hover:bg-transparent hover:border-white">
            Get Started
          </button>
          <a
            href="#"
            className="border-white border flex justify-center items-center h-10 px-6 rounded transition-all ease-in-out duration-200 hover:bg-[#FF1479] hover:border-[#FF1479]"
          >
            Contact Us
          </a>
        </div>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const changeSlide = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
    setIsPaused(true);
    clearTimeout(timeoutRef.current!);

    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current!);
  }, [index, isPaused]);

  const bind = useDrag(({ delta }) => {
    if (Math.abs(delta[0]) > 50) {
      setIsPaused(false);
      setDirection(delta[0] > 0 ? -1 : 1);
      setIndex((prev) =>
        delta[0] > 0
          ? prev === 0
            ? slides.length - 1
            : prev - 1
          : (prev + 1) % slides.length
      );
    }
  });

  return (
    <div className="relative w-full mx-auto overflow-hidden" {...bind()}>
      <div className="relative w-full h-screen flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            className="absolute w-full h-full flex flex-col-reverse md:flex-row items-center"
            initial={{ x: direction * 100 + "%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: -direction * 100 + "%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute w-full md:h-full md:top-0 top-[30%] pt-5 md:pt-0  flex flex-col justify-center">
              <div className="container ">
                <div className="md:w-1/2 md:pr-10">
                  {slides[index].content()}
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex-1 md:flex-auto w-full flex flex-col justify-center p-8 bg-[#003B64] text-white md:h-full"></div>

            {/* Image Section */}
            <div className="md:w-1/2 h-[30%] md:h-full w-full">
              <img
                src={slides[index].image}
                className="w-full h-full object-cover"
                alt="Slide Image"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
              index === i ? "bg-white w-4" : "bg-gray-400"
            }`}
            onClick={() => changeSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
