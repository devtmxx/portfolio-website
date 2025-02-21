"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NameLogo from "@/components/name-logo";
import { ctaHref, ctaLabel, fullName, navItems } from "@/constants";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Button from "@/components/button";
import DesktopMenu from "./desktop-menu";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name={fullName} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>

          {navItems.map(({ label, href }, index) => (
            <React.Fragment key={index}>
              <li className="first:mt-8">
                <Link
                  href={href}
                  className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
                  onClick={() => setOpen(false)}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname === href ? "translate-y-6" : "translate-y-18",
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

        <DesktopMenu pathname={pathname} />
      </ul>
    </nav>
  );
};

export default NavBar;
