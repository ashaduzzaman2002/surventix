import SecurityFlowChart from "@/components/SecurityFlowChart";
import StepForm from "@/components/StepForm";
import SmartivityTimeline from "@/components/Timeliner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { surventixHighlights } from "@/constant/data";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background: "url(/surv-bg6.jpg)",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">Home</Link> <span>/</span> <div>Security Check</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              Lock It. Protect It. Trust It
            </h1>
            <p className="max-w-[700px] md:text-2xl text-base tracking-[0.5px] mb-6">
              At Surventix, we prioritize data security with top-tier
              encryption, strict authentication, and global compliance—ensuring
              your information stays safe, private, and trustworthy.
            </p>

            <a
              href="#online"
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

      <div id="online" className="relative bg-[#02000F] md:py-20 py-12">
        <div className="container mb-20 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-6xl font-bold mb-7">
              Online Market Research Security at{" "}
              <span className="text-[#EF742C]">Surventix</span>
            </h1>
            <p className="text-white/80">
              At Surventix, we prioritize the security and integrity of every
              data point collected. Our online market research platform is built
              with advanced security protocols, including end-to-end encryption,
              secure data storage, and multi-layered authentication to protect
              respondent privacy and client information. We strictly adhere to
              global data protection standards like GDPR and CCPA, ensuring
              compliance and peace of mind. Our systems actively detect and
              prevent survey fraud, bots, and duplicate responses. By combining
              technology with trust, Surventix delivers insights that are not
              only accurate but also ethically and securely sourced—because your
              data deserves the highest level of protection.
            </p>
          </div>

          <div className="h-full">
            <video
              poster="/video-poster.png"
              autoPlay
              loop
              muted
              src="/about.mp4"
              className="h-full object-cover w-full rounded-4xl"
            ></video>
          </div>
        </div>

        <div className="bg-[#EF742C] mb-20">
          <div className="container py-20">
            <h1 className="text-center text-5xl font-bold mb-4">
              At Surventix, Security Is Success
            </h1>
            <p className="max-w-4xl mx-auto text-center mb-10">
              In today’s digital world, great research isn’t just smart—it’s
              secure. At Surventix, we believe the backbone of insightful,
              actionable research is trust, and that starts with airtight online
              market research security.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {surventixHighlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0032C7] flex relative p-6 rounded-4xl"
                >
                  <div className="">
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <StepForm />
        </div>

        <div className="container">
          <SmartivityTimeline />
        </div>

        <div>
          <SecurityFlowChart />
        </div>

        <div className="container mx-auto py-12">
          <Card className="max-w-3xl mx-auto bg-[#1F2937] backdrop-blur-sm border border-primary/10">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Want to Know More About Us?
              </CardTitle>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-center leading-relaxed text-muted-foreground">
                We&lsquo;re more than just surveys and data — we&lsquo;re all about smart
                insights, seamless experiences, and making meaningful
                connections.
              </p>

              <p className="text-center leading-relaxed text-muted-foreground">
                Whether you&lsquo;re curious about what we do, have a question, or
                just want to explore potential opportunities — we&lsquo;d love to hear
                from you!
              </p>

              <div className="flex flex-col items-center space-y-3 mt-8">
                <p className="font-semibold">Get in touch with us at:</p>
                <a
                  href="mailto:Sales@surventix.com"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Sales@surventix.com
                </a>
              </div>

              <p className="text-center italic mt-6 text-muted-foreground">
                Let&lsquo;s connect and create something impactful together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
