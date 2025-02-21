"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Float } from "@react-three/drei";

const Model = ({ clickable = true, setVisible, speed, children }) => {
  const meshRef = useRef(null);

  const handleClick = () => {
    gsap.to(meshRef.current.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
    });
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      setVisible(true);

      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        delay: 0.3,
      });
    }, meshRef);

    return () => ctx.revert();
  }, [setVisible]);

  return (
    <group
      ref={meshRef}
      position={[0, 0, 0]}
      onClick={clickable && handleClick}
      onPointerOver={clickable && handlePointerOver}
      onPointerOut={clickable && handlePointerOut}
    >
      <Float speed={speed} rotationIntensity={speed} floatIntensity={speed}>
        {children}
      </Float>
    </group>
  );
};

export default Model;
