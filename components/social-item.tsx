import { Social } from "@/constants";
import Link from "next/link";
import React from "react";

type SocialItemProps = {
  data: Social;
};

const SocialItem = ({ data }: SocialItemProps) => {
  return (
    <Link
      href={data.href}
      className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
      aria-label={`${data.name} on ${data.label}`}
    ></Link>
  );
};

export default SocialItem;
