import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type SocialItemProps = {
  label: string;
  href: string;
  name: string;
  icon: IconType;
};

const SocialItem = ({ label, href, name, icon: Icon }: SocialItemProps) => {
  return (
    <Link
      href={href}
      className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
      aria-label={`${name} on ${label}`}
    >
      <Icon />
    </Link>
  );
};

export default SocialItem;
