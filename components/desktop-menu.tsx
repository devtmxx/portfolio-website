import { ctaHref, ctaLabel, navItems } from "@/constants";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/components/button";

type DesktopMenuProps = {
  pathname: string;
};

const DesktopMenu = ({ pathname }: DesktopMenuProps) => {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {navItems.map(({ label, href }, index) => (
        <React.Fragment key={index}>
          <li>
            <Link
              href={href}
              className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              aria-current={pathname === href ? "page" : undefined}
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  pathname === href ? "translate-y-6" : "translate-y-8",
                )}
              />
              <span className="relative">{label}</span>
            </Link>
          </li>

          {index < navItems.length - 1 && (
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}

      <li>
        <Button label={ctaLabel} href={ctaHref} className="ml-3" />
      </li>
    </div>
  );
};

export default DesktopMenu;
