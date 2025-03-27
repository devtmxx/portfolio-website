"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { works } from "@/constants";
import ContentItem from "./content-item";

gsap.registerPlugin(ScrollTrigger);

const ContentList = () => {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ul ref={component} className="grid border-b border-b-slate-100">
        {works.map((item, index) => (
          <ContentItem
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            {...item}
          />
        ))}
      </ul>
    </>
  );
};

export default ContentList;
