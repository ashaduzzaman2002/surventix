import { FAQ } from "@/constant/data";
import React from "react";
import FAQcard from "../card/FAQcard";

const Faq = () => {
  return (
    <div className="relative bg-[#02000F] md:pb-20 pb-12">
      <div className="container">
        <div className="">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
            Compliance and Accountability: <br /> Upholding Ethical Excellence
          </h2>

          <p className="max-w-[750px] text-white/80">
            At Surventix, we recognize that integrity is not just an
            expectation—it is a fundamental requirement. Our unwavering
            commitment to ethical excellence is reinforced through a structured
            framework of compliance and accountability, ensuring that every
            action aligns with our core values and legal obligations.
          </p>
        </div>
        <div className="md:mt-16 mt-8 flex flex-col md:gap-8 gap-5">
          {FAQ.map((item) => (
            <FAQcard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
