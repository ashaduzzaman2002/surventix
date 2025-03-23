"use client";
import { motion } from "framer-motion";
import AboutUs from "@/components/about-us";
import Blog from "@/components/blog";
import HeroSection from "@/components/hero-section";
import OurExpertise from "@/components/our-expertise";
import OurJourney from "@/components/our-journey";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div
        style={{
          background:
            "#02000f url(/gradient-top.83164ca9.jpg) center -560px no-repeat",
        }}
      >
        {/* Wrapped each section in motion.div for animation */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutUs />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurExpertise />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Blog />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurJourney />
        </motion.div>
      </div>
    </div>
  );
}
