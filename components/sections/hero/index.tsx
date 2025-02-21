"use client";

import { renderLetters } from "@/utils/letters";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "@/components/bounded";
import Shapes from "@/components/sections/hero/shapes";

const Index = () => {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          {
            x: -100,
            opacity: 0,
            rotate: -10,
          },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            delay: 0.5,
            stagger: {
              each: 0.1,
              from: "random",
            },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,6.6rem)] font-extrabold leading-none tracking-tighter"
            aria-label="Tim Mauersberger"
          >
            <span className="block text-slate-300">
              {renderLetters("Tim", "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters("Mauersberger", "last")}
            </span>
          </h1>

          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-3xl">
            Minigame Developer
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Index;
