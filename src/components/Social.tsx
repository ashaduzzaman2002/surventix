import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div className="container md:py-16 py-8">
      <h2 className="md:text-5xl text-3xl  text-center md:mb-16 mb-8">Social Media</h2>

      <div className="grid md:grid-cols-5 md:gap-8 gap-4">
        {[
          "https://scontent-den2-1.cdninstagram.com/v/t51.75761-15/487122304_17947742162952566_6655155073956407281_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=bCXUFc4g02oQ7kNvgEN1ZWp&_nc_oc=AdlUJ9_w68h5Rhe_Vi303ucQWltLaSygy5BfebpEjUJjDbF6pm526UuNzNB-H12LMz4&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=qlyY_p1jjlcK4e0lBhPXPQ&oh=00_AYEq428FmlQatOZ_TpEW_RVVDdvaaESgnpk7bnLs8z_r_w&oe=67F2DE93",
          "https://scontent-den2-1.cdninstagram.com/v/t51.75761-15/485270789_17946256673952566_8762952683875073732_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=HlsXzehBWiwQ7kNvgErYgzZ&_nc_oc=AdkHV4dxP-s_XEYp2VvUijZud9OGWdZOb8SEPKWYUX46TyqkSkVk69Q1OJUeTg9r-2g&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=qlyY_p1jjlcK4e0lBhPXPQ&oh=00_AYEBIFrPTHCTI8DYBhjMvdQLA9kpYWWjiETTBycdNsL6HA&oe=67F2D966",
          "https://scontent-den2-1.cdninstagram.com/v/t51.29350-15/484648256_1150854866282578_6069482755108957797_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=jiotPI8NCtEQ7kNvgFKebN6&_nc_oc=AdkmjEL9CosbupZ_X6qRaaR-deKaniRDoclg2yty4tedGugzqXJIMb62-M5DSBkFV5s&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=qlyY_p1jjlcK4e0lBhPXPQ&oh=00_AYEM93NzxqLz0G30ybi1WP0LfJk08duSo6tRhVdJ-aLEmw&oe=67F2F51E",
          "https://scontent-den2-1.cdninstagram.com/v/t51.75761-15/484176088_17945546225952566_8979316655858966246_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=kQgnRtwG7fsQ7kNvgESiRig&_nc_oc=AdmcF5oWYPBTGnqT_RnwYxF1D8fN6M_AoN3nGNlHIVAsCCsRCIYZFRcaT7gvC4cH2z0&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=qlyY_p1jjlcK4e0lBhPXPQ&oh=00_AYE8CsfROv2dh4Ums8r9zP02G5FS6yMr15MYGXMt7e9Pug&oe=67F2D45B",
          "https://scontent-den2-1.cdninstagram.com/v/t51.75761-15/483376400_17945147240952566_7857484977431632859_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=mfN0XA7kkq0Q7kNvgEUazP6&_nc_oc=AdnGQKJVwC4Yc8PBotH5Gydic7jsStyw-WXO3f7pjtiSIrQbjm_D9JCunQ9AMJqUUAM&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=qlyY_p1jjlcK4e0lBhPXPQ&oh=00_AYFq3CqwWDTj9RvAPs2ngMYLmW6EVFoFCo4qGJ4rPF88JQ&oe=67F2EA2B",
        ].map((item, i) => (
          <Link key={i} href="#" className="w-full aspect-square overflow-hidden group relative">
            <Image className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-300" src={item} alt="image" width={200} height={200} />

            <div className="bg-black absolute inset-0 flex items-end p-2 translate-y-full group-hover:translate-y-0 duration-300 transition-all ease-in-out">
                <Instagram />

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Social;
