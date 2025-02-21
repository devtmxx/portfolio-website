import React, { RefObject } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: "section" | "div";
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
  children: React.ReactNode;
};

const Bounded = ({
  as: Comp = "section",
  ref,
  className,
  children,
}: BoundedProps) => (
  <Comp
    ref={ref}
    className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
  >
    <div className="mx-auto w-full max-w-7xl">{children}</div>
  </Comp>
);

export default Bounded;
