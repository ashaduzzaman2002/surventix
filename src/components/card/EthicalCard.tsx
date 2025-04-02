'use client'

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

const EthicalCard = ({
    className,
    title,
    description,
     animationFile,
  }:
  {
    className: string;
    title: string;
    description: string;
    animationFile: Record<string, unknown>;
  }) => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<AnimationItem | null>(null);
  
    useEffect(() => {
      if (animationContainer.current) {
        animationInstance.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: animationFile,
        });
  
        // Pause the animation initially
        animationInstance.current.stop();
      }
  
      return () => {
        animationInstance.current?.destroy();
      };
    }, []);
  
    const handleMouseEnter = () => {
      animationInstance.current?.goToAndPlay(0, true); // Play from start
    };
  
    const handleMouseLeave = () => {
      animationInstance.current?.stop(); // Stop instead of resetting to first frame
    };
  
    return (
      <div
        className={`h-[300px] w-[450px] group overflow-hidden relative ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Ensure animation container doesn't block text */}
        <div
          ref={animationContainer}
          className="absolute inset-0 pointer-events-none"
        ></div>
  
        <div className="absolute inset-0">
          <div className="h-full translate-y-0 group-hover:-translate-y-[350px] duration-1000 transition-all ease-in-out flex items-end p-6 pb-8">
            <h2 className="text-3xl">{title}</h2>
          </div>
  
          <div className="translate-y-[200px] group-hover:-translate-y-[300px] duration-1000 transition-all ease-in-out h-full p-6 pt-8">
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default EthicalCard