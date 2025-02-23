import clsx from "clsx";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
};

const Heading = ({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) => (
  <Comp
    className={clsx(
      "font-bold leading-tight tracking-tight text-slate-300",
      size === "xl" && "text-7xl md:text-9xl",
      size === "lg" && "text-6xl md:text-8xl",
      size === "md" && "text-5xl md:text-6xl",
      size === "sm" && "text-3xl md:text-4xl",
      size === "xs" && "text-xl md:text-2xl",
      className,
    )}
  >
    {children}
  </Comp>
);

export default Heading;
