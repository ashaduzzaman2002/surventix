"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  { label: "Bids", value: 5000 },
  { label: "Projects", value: 1000 },
  { label: "Completes", value: 200000 },
  { label: "Clients", value: 40 },
];

const Counter = ({ target }: { target: number }) => {
  const count = useMotionValue(0);
  const springValue = useSpring(count, { stiffness: 100, damping: 20 });
  const { ref, inView } = useInView({ triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, target, count]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className="text-5xl font-bold">
      {displayValue.toLocaleString()}
      {target >= 100000 ? "L" : "+"}
    </span>
  );
};

const OurJourney = () => {
  return (
    <div className="container flex flex-col items-center pt-10 pb-[80px]">
      <h2 className="text-5xl max-w-[550px] text-center font-semibold">
        Our{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to bg-yellow-500 bg-clip-text text-transparent">
          Journey
        </span>{" "}
        at{" "}
        <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to bg-pink-500 bg-clip-text text-transparent">
          Surventix:
        </span>{" "}
        Insights Without{" "}
        <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to bg-purple-500 bg-clip-text text-transparent">
          Borders
        </span>
      </h2>

      <p className="max-w-[750px] mt-6 text-center opacity-70">
        At Surventix, we don’t just collect data—we connect businesses with the
        world. With 1,000+ projects completed, 50,000+ survey responses
        delivered, and 100+ clients, we proudly operate in 50+ countries,
        providing global insights that drive smart, data-driven decisions.
      </p>

      <div className="mt-20 mb-10 grid grid-cols-4 w-full gap-10 text-center">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#003B64]/20 rounded p-6 border-b-[5px] border-[#003B64]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Counter target={item.value} />
            <p className="uppercase opacity-70 tracking-[3px] font-light mt-4">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurJourney;
