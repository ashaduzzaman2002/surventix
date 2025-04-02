"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
        <motion.button animate={{ rotate: open ? 180 : 0 }}>
          {open ? <Minus /> : <Plus />}
        </motion.button>
      </div>

      <motion.div
        className={cn(open ? "mt-6" : "", "overflow-hidden flex gap-10")}
        initial={{ height: 0 }}
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

export default FAQcard;
