import { companyValues } from "@/constant/data";
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const CompanyValues = () => {
  return (
    <div className="container md:py-16 py-8 grid md:grid-cols-3 md:gap-6 gap-4">
      {companyValues.map((item, i) => (
        <Card
        key={i}
          className={cn(
            "flex flex-col justify-center items-center rounded-lg border-t",
            "bg-gradient-to-b from-muted/50 to-muted/10",
            "p-4 text-start sm:p-6",
            "hover:from-muted/60 hover:to-muted/20",
            "transition-colors duration-300"
          )}
        >
          <h3 className="text-2xl text-center">
            {item.title}
          </h3>

          <p className="sm:text-md text-sm text-muted-foreground text-center">{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default CompanyValues;
