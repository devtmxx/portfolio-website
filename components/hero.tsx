"use client";

import { renderLetters } from "@/utils/letters";
import gsap from "gsap";
import {useEffect, useRef} from "react";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero">
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-start-1 md:row-start-1">
          <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label="Tim Mauersberger">
            <span className="block text-slate-300">{renderLetters("Tim", "first")}</span>
            <span className="-mt-[.2em] block text-slate-500">{renderLetters("Mauersberger", "last")}</span>
          </h1>
          <span className="block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">Minigame Developer</span>
        </div>
      </div>

    </section>
  );
};

export { Hero };