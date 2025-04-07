import { companyValues } from "@/constant/data";
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const CompanyValues = () => {
  return (
    <div className="container md:py-16 py-8 grid md:grid-cols-3 md:gap-6 gap-4 relative">
      {companyValues.map((item, i) => (
        <Card
          key={i}
          className={cn(
            "flex flex-col justify-center items-center rounded-lg border-t relative group",
            "bg-gradient-to-b from-muted/50 to-muted/10",
            "p-4 text-start sm:p-6",
            "hover:from-muted/60 hover:to-muted/20",
            "transition-colors duration-300 overflow-hidden"
          )}
        >
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl text-center group-hover:text-black">{item.title}</h3>

            <p className="sm:text-md text-sm text-muted-foreground group-hover:text-black/80 text-center">
              {item.description}
            </p>
          </div>

          <div className="absolute inset-0 bg-[#5CE1F2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        </Card>
      ))}
    </div>
  );
};

export default CompanyValues;
