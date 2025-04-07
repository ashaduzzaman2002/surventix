"use client";
import { motion } from "framer-motion";
import AboutUs from "@/components/about-us";
import Blog from "@/components/blog";
import HeroSection from "@/components/hero-section";
import OurExpertise from "@/components/our-expertise";
import OurJourney from "@/components/our-journey";
import Client from "@/components/Client";
import CompanyValues from "@/components/companyValues";
import JoinUs from "@/components/JoinUs";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

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

      <Client />
      <JoinUs />
      <CompanyValues />
      {/* <Social /> */}
    </div>
  );
}
