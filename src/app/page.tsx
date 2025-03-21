import AboutUs from "@/components/about-us";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import OurExpertise from "@/components/our-expertise";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div style={{ background: '#02000f url(/gradient-top.83164ca9.jpg) center -560px no-repeat' }}>

        <AboutUs />
        <OurExpertise />

      </div>

      <Blog />
      <Footer />
    </div>
  );
}
