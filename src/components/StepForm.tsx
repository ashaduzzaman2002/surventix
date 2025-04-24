export default function StepForm() {
  return (
    <div className="container py-12 flex md:flex-col md:block gap-6 md:gap-0">
      {/* <h1 className="text-5xl font-bold text-center mb-24">MedNAIS has 2 working modes</h1> */}

      <div className="relative flex flex-col md:flex-row min-w-[50px] md:min-w-auto md:justify-between items-center mb-10 max-w-[60%] mx-auto ">
        {/* Mode 1 Circle */}
        <div className="flex flex-col items-center relative z-10 h-1/2 md:h-auto">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
            1
          </div>
        </div>

        {/* Mode 2 Circle */}
        <div className="flex flex-col items-center relative z-10  mt-10 md:mt-0">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
            2
          </div>
        </div>

        {/* Connecting Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 flex items-center">
          <div className="w-full border-t-2 border-dashed border-gray-300"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between">
        {/* Mode 1 Description */}
        <div className="md:w-1/2 md:pr-8 md:text-center">
          <p className="font-semibold text-2xl mb-8">
            What Challenges A research Most?
          </p>

          <p className="text-justify">
            In a world where everything is digital, trust is our biggest
            challenge. Not just earning it—but keeping it. <br />
            At Surventix, we don’t just battle bots or guard servers. We protect
            something more delicate: the honesty behind every answer, the
            privacy behind every click, and the confidence our clients place in
            data that shapes big decisions. <br />
            The landscape is always shifting—new privacy laws, smarter fraud,
            faster hacks. But our mission stays the same: to make sure research
            remains a safe space—for brands, for consumers, and for the truth.
          </p>
        </div>

        {/* Mode 2 Description */}
        <div className="md:w-1/2 md:pl-8 md:text-center mt-10 md:mt-0">
          <p className="font-semibold text-2xl mb-8">Here’s How We Tackle It</p>

          <p className="text-justify">
            At Surventix, we tackle the challenges of online market research
            security head-on with a multi-layered approach. Our platform uses
            advanced encryption and fraud detection tools to ensure data
            integrity and protect respondent privacy. We strictly adhere to
            global compliance standards like GDPR and CCPA, while our real-time
            authentication processes guarantee authentic responses. With
            continuous system updates and proactive security measures, we stay
            ahead of emerging threats. Our focus on transparency and trust
            empowers clients to make decisions based on clean, secure, and
            reliable data—every time.
          </p>
        </div>
      </div>
    </div>
  );
}
