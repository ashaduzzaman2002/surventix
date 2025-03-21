import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1550275994-cdc89cd1948f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Surventix: The Power of Global Insights at Your Fingertips",
    description:
      '"Reaching the World, One Insight at a Time"Surventix stands at the forefront of the online panel industry, renowned for its expansive reach and highly engaged user base. With a robust network of 7.5 million active users worldwide, we bridge the gap between businesses and consumers, ensuring that every research need is met with precision and reliability. Our panel encompasses diverse demographics, making Surventix the ideal choice for companies seeking comprehensive market intelligence on a global scale.',
    category: "tech",
    date: "10 Jan 2025",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1602666785995-294f201cb95b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "A Spectrum of Voices, A World of Knowledge: The Power of a Diverse Respondent Panel",
    description:
      "In today’s fast-paced business world, market research isn’t just about gathering data—it’s about understanding people. The success of any research initiative depends on the quality and diversity of its respondents. At Surventix, we believe that insightful decisions are built on a broad spectrum of voices, reflecting different industries, demographics, and perspectives.",
    category: "tech",
    date: "10 Jan 2025",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1654331045702-405756aba4ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "The Power of Real People in Market Research Real People. Real Data. Real Impact",
    description:
      "In today’s fast-changing marketplace, businesses can’t afford to rely on outdated data or guesswork. Success comes from understanding real people, real trends, and real behaviors. That’s where Surventix comes in. With access to millions of authentic voices, we provide data-driven insights that help businesses stay ahead of industry shifts, predict market trends, and make smarter decisions. Whether you’re conducting a niche study or a global survey, our high-quality, real-world data fuels innovation, growth, and success. Don’t leave your next big decision to chance. Partner with Surventix today and turn insights into impact!",
    category: "tech",
    date: "10 Jan 2025",
  },
];

const Blog = () => {
  return (
    <div className="container text-white pb-[80px] pt-10">
      <h1 className="text-[30px] font-bold mb-[180px] text-center font-altitude">
        Our Blogs
      </h1>

      <div className="grid grid-cols-3 gap-[70px]">
        {data.map((item, i) => (
          <div key={i} className="bg-[#003B64] rounded group:">
            <div className=" p-6">
              <div
                className="bg-[#C3ECEE] -mt-20 relative rounded"
                style={{
                  boxShadow:
                    "#0C5388 0px 5px, #0C5388 0px 10px, #0C5388 0px 15px, #0C5388 0px 20px, #0C5388 0px 25px",
                }}
              >
                {/* <div className="bg-[#0E5AA6] w-full h-full absolute top-5 rounded group-hover:left-5"></div> */}
                <div className="relative">
                  <Image
                    className="w-full h-[200px] object-cover rounded-t"
                    src={item.thumbnail}
                    alt={item.title}
                    width={350}
                    height={200}
                  />
                </div>

                <div className="text-[#003B64] relative bg-[#C3ECEE] rounded-b flex h-11 items-center justify-between px-3 uppercase font-bold">
                  <p>{item.category}</p>
                  <p>{item.date}</p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-[30px] font-bold leading-9" >
                  {item.title?.slice(0, 40).trim()}...
                </h2>

                <p className="mt-16">
                  {item.description?.slice(0, 100).trim()}...
                </p>
              </div>
            </div>
            <div className="border-t border-gray-400 px-6 py-4 flex justify-between items-center">
              <button className="bg-[#F05BBE] px-6 py-1.5 rounded font-bold">
                Join
              </button>
              <Link href="" className="font-bold uppercase">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
