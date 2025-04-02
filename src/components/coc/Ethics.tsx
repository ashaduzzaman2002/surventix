import { ETHICS } from "@/constant/data";
import React from "react";
import EthicalCard from "../card/EthicalCard";

const Ethics = () => {
  return (
    <div className="relative bg-[#02000F] md:pb-20 ">
      <div className="container">
        <div className="md:text-center md:sticky top-80">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
            Ethical Practices: Upholding Integrity <br /> and Accountability
          </h2>

          <p className="max-w-[750px] mx-auto text-white/80">
            At Surventix, ethical conduct is the cornerstone of our operations.
            We are committed to maintaining the highest standards of
            professionalism, fairness, and responsibility in all our
            engagements. Our approach to ethical practices ensures that our work
            remains transparent, compliant, and respectful of all stakeholders.
          </p>
        </div>
        <div className="md:mt-16 mt-8 max-w-5xl mx-auto">
          {ETHICS.map((item) => (
            <EthicalCard
              key={item.id}
              title={item.title}
              description={item.description}
              animationFile={item.animation}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ethics;
