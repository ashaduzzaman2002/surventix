"use client";

import { CODE_OF_CONDUCT, COMMITMENTS, ETHICS, FAQ } from "@/constant/data";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import lottie, { AnimationItem } from "lottie-web";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // Ensure component runs only in the client
  }, []);


  if (!isClient) return null; 
  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background:
            "url(https://www.surventix.com/wp-content/uploads/2025/01/surv-bg3.jpg)",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">Home</Link> <span>/</span> <div>Code of Conduct</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              Code of Conduct
            </h1>
            <p className="max-w-[800px] md:text-2xl text-base tracking-[0.5px] mb-5">
              Upholding Integrity, Excellence, and Responsibility
            </p>
            <p className="max-w-[800px] md:text-2xl text-base tracking-[0.5px] mb-6">
              At Surventix, we are dedicated to upholding the highest standards
              of integrity, professionalism, and respect. Our Code of Conduct
              serves as a guiding framework for our employees, partners, and
              stakeholders, ensuring that our actions consistently reflect our
              core values
            </p>

            <a
              href="#coc"
              className="md:text-lg text-base tracking-[0.5px] flex items-center gap-4"
            >
              Read More{" "}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div id="coc" className="relative bg-[#02000F] md:py-20 py-12">
        <div className="container">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
            Code of Conduct
          </h2>

          <div className="gap-8 grid-cols-3 grid mt-12">
            {CODE_OF_CONDUCT.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-[#00233C]"
              >
                <div className="w-full aspect-video relative">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.image}
                    width={400}
                    height={400}
                    alt={item.title}
                  />
                  <div
                    className="absolute top-0 right-0 w-16 h-16 flex justify-center items-center rounded-bl-2xl"
                    style={{ backgroundColor: item.bg, color: item.text }}
                  >
                    {item.icon()}
                  </div>
                </div>

                <div className="bg-[#00233C] p-6 rounded-2xl -mt-10 relative">
                  <h3 className="text-4xl mb-4">{item.title}</h3>
                  <p className="font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[#02000F] md:pb-20 pb-12">
        <div className="container">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
            Commitment to Excellence: <br /> Our Promise to Panelists, Clients,
            and Employees
          </h2>

          <div className="gap-16 grid-cols-3 grid mt-16">
            {COMMITMENTS.map((item) => (
              <CommitmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[#02000F] md:pb-20 pb-12">
        <div className="container">
          <div className="text-center sticky top-80">
            <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
              Ethical Practices: Upholding Integrity <br /> and Accountability
            </h2>

            <p className="max-w-[750px] mx-auto text-white/80">
              At Surventix, ethical conduct is the cornerstone of our
              operations. We are committed to maintaining the highest standards
              of professionalism, fairness, and responsibility in all our
              engagements. Our approach to ethical practices ensures that our
              work remains transparent, compliant, and respectful of all
              stakeholders.
            </p>
          </div>
          <div className="mt-16 max-w-5xl mx-auto">
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

      <div className="relative bg-[#02000F] md:pb-20 pb-12">
        <div className="container">
          <div className="">
            <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
              Compliance and Accountability: <br /> Upholding Ethical Excellence
            </h2>

            <p className="max-w-[750px] text-white/80">
              At Surventix, we recognize that integrity is not just an
              expectation—it is a fundamental requirement. Our unwavering
              commitment to ethical excellence is reinforced through a
              structured framework of compliance and accountability, ensuring
              that every action aligns with our core values and legal
              obligations.
            </p>
          </div>
          <div className="mt-16 flex flex-col gap-8">
            {FAQ.map((item) => (
              <FAQcard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const EthicalCard = ({
  className,
  title,
  description,
  // animationFile,
}: {
  className: string;
  title: string;
  description: string;
  animationFile: Record<string, unknown>;
}) => {

 
  // const animationContainer = useRef<HTMLDivElement>(null);
  // const animationInstance = useRef<AnimationItem | null>(null);

  

  // useEffect(() => {
  //   if (animationContainer.current) {
  //     animationInstance.current = lottie.loadAnimation({
  //       container: animationContainer.current,
  //       renderer: "svg",
  //       loop: false, // Ensure it doesn't loop
  //       autoplay: false, // Don't play initially
  //       animationData: animationFile,
  //     });

  //     // Pause the animation initially
  //     animationInstance.current.stop();
  //   }

  //   return () => {
  //     animationInstance.current?.destroy();
  //   };
  // }, [animationFile]);

  // const handleMouseEnter = () => {
  //   animationInstance.current?.goToAndPlay(0, true); // Play from start
  // };

  // const handleMouseLeave = () => {
  //   animationInstance.current?.stop(); // Stop instead of resetting to first frame
  // };

  

  return (
    <div
      className={`h-[300px] w-[450px] group overflow-hidden relative ${className}`}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* Ensure animation container doesn't block text */}
      {/* <div ref={animationContainer} className="absolute inset-0 pointer-events-none"></div> */}

      <div className="absolute inset-0">
        <div className="h-full translate-y-0 group-hover:-translate-y-[350px] duration-1000 transition-all ease-in-out flex items-end p-6 pb-8">
          <h2 className="text-3xl">{title}</h2>
        </div>

        <div className="translate-y-[200px] group-hover:-translate-y-[300px] duration-1000 transition-all ease-in-out h-full p-6 pt-8">
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CommitmentCard = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    image: string;
    lists: string[];
  };
}) => (
  <div
    key={item.id}
    className="w-full h-[500px] overflow-hidden relative shadow-2xl group"
  >
    <img
      className="h-full w-full absolute inset-0 object-cover duration-300 ease-in-out group-hover:translate-x-full group-hover:translate-y-full group-hover:scale-0 transition-all duration-500"
      src={item.image}
      alt=""
    />

    <div className="absolute bg-gradient-to-br from-[#1C182A]/50 to-[#1C182A]/20 inset-0 "></div>
    <div className="group-hover:bg-[#1C182A] relative h-[30%] transition-all duration-500 ease-in-out">
      <h2 className="p-6 text-3xl">{item.title}</h2>
    </div>

    <div className=" bg-[#1C182A] p-6 pt-0 relative h-[70%] translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out">
      <ul className="text-start flex flex-col gap-2 ">
        {item.lists.map((listItem: string, i: number) => (
          <li key={i}>• {listItem}</li>
        ))}
      </ul>
    </div>
  </div>
);

const FAQcard = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t-2 border-b-2 py-5 border-purple-600">
      <div
        className="flex justify-between "
        onClick={() => setOpen((prev) => !prev)}
      >
        <h2 className="text-2xl font-bold">{item.title}</h2>{" "}
        <motion.button animate={{rotate: open? 180: 0}}>{open ? <Minus /> : <Plus />}</motion.button>
      </div>

      <motion.div
        className={cn(open ? "mt-6" : "", "overflow-hidden flex gap-10")}
        animate={{ height: open ? "auto" : 0 }}
      >
        <p className="text-lg">{item.description}</p>
        <div>
          <div className="w-[300px] h-[200px]">
            <Image
              className="w-full h-full"
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
