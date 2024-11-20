"use client";

import { useState, useEffect, SetStateAction } from "react";
import { useInView } from "react-intersection-observer";

export default function Numbers() {
  // Create separate states for each number
  const [childrenSupported, setChildrenSupported] = useState(0);

  const [toolsDistributed, setToolsDistributed] = useState(0);
  const [countriesWorldwide, setCountriesWorldwide] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when it enters the viewport
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  // Function to animate a given number
  const animateCount = (
    target: number,
    duration = 2000,
    setState: {
      (value: SetStateAction<number>): void;
      (value: SetStateAction<number>): void;
      (value: SetStateAction<number>): void;
      (value: SetStateAction<number>): void;
      (arg0: number): void;
    }
  ) => {
    const start = 0;
    const end = target;
    const range = end - start;
    const increment = range / (duration / 50);

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        current = end;
      }
      setState(Math.floor(current)); // Update the corresponding state
    }, 50);
  };

  useEffect(() => {
    if (inView) {
      // Trigger animations for all numbers when the section comes into view
      if (childrenSupported === 0)
        animateCount(15000000, 2000, setChildrenSupported); // Children Supported

      if (toolsDistributed === 0) animateCount(100, 2000, setToolsDistributed); // Tools Distributed
      if (countriesWorldwide === 0)
        animateCount(500, 2000, setCountriesWorldwide); // Countries Worldwide
    }
  }, [inView, childrenSupported, toolsDistributed, countriesWorldwide]);

  return (
    <div
      ref={ref}
      className="w-full min-[834px]:mt-14 mt-28 min-[1055px]:mt-0 bg-[#131313] min-[1055px]:rounded-tl-none rounded-[0px] min-[834px]:pt-0 min-[834px]:pb-0 pt-20 pb-20 min-[834px]:h-[170px] h-fit flex flex-col min-[834px]:gap-0 gap-16 min-[834px]:flex-row min-[834px]:text-start text-center items-center min-[834px]:justify-evenly"
    >
      <div className="text-white">
        <h1 className="min-[962px]:text-3xl text-2xl">
          {childrenSupported.toLocaleString()}N +
        </h1>
        <p className="min-[962px]:text-lg text-base font-light">
          Vocational Scholarships
        </p>
      </div>

      <div className="text-white">
        <h1 className="min-[962px]:text-3xl text-2xl">
          {toolsDistributed.toLocaleString()} +
        </h1>
        <p className="min-[962px]:text-lg text-base font-light">
          Tools for SMEs Distributed
        </p>
      </div>
      <div className="text-white">
        <h1 className="min-[962px]:text-3xl text-2xl">
          {countriesWorldwide.toLocaleString()} +
        </h1>
        <p className="min-[962px]:text-lg text-base font-light">
          Children Impacted
        </p>
      </div>
    </div>
  );
}
