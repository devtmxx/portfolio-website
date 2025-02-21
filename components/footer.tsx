import Bounded from "@/components/bounded";
import Link from "next/link";
import { fullName, github, linkedin, navItems, twitter } from "@/constants";
import React from "react";
import SocialItem from "@/components/social-item";

const Footer = () => {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            {fullName}
          </Link>

          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden="true"
          >
            /
          </span>

          <p className="text-sm text-slate-300">
            &copy; {new Date().getFullYear()} {fullName}
          </p>
        </div>

        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {navItems.map(({ label, href }, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link
                    href={href}
                    className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
                  >
                    {label}
                  </Link>
                </li>

                {index < navItems.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        <div className="socials inline-flex justify-center sm:justify-end">
          {github && <SocialItem data={github} />}
          {twitter && <SocialItem data={twitter} />}
          {linkedin && <SocialItem data={linkedin} />}
        </div>
      </div>
    </Bounded>
  );
};

export default Footer;
