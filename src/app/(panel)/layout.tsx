import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
};

export default PanelLayout;
