import { SECURITY_CHECK } from "@/constant/data";
import Image from "next/image";

export default function SmartivityTimeline() {
  return (
    <div className="py-12">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute md:left-1/2 transform md:-translate-x-1/2 h-full border-l border-dashed border-gray-300"></div>

        {/* First Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[0].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                  <p className="text-white/80">
                    We use End-to-End Encryption (E2EE) with SSL/TLS protocols
                    to secure data during transmission and AES-256 encryption
                    for storage.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                  <p className="text-white/80">
                    Our survey platforms are built with robust encryption to
                    ensure that all responses remain protected from unauthorized
                    access.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[0].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* second Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[1].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[1].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[1].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* third Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[2].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[2].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[2].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* fourth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[3].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[3].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[3].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* fifth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[4].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[4].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[4].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* sixth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[5].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[5].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[5].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* seventh Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[6].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[6].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[6].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* eight Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[7].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[7].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[7].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* nineth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[8].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[8].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[8].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 10th Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[9].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={SECURITY_CHECK[0].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {SECURITY_CHECK[9].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 11th Section */}
        <div className="relative">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {SECURITY_CHECK[10].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div> */}
                  <p className="text-white/80">
                    {SECURITY_CHECK[10].description}
                  </p>
                </li>
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <video
                  width={500}
                  height={300}
                  autoPlay
                  muted
                  loop
                  src="/Panelist Dupe Score.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
