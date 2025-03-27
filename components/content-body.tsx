import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ContentBodyProps = {
  title: string;
  tags: string[];
  date: string;
  source?: string;
  children: React.ReactNode;
};

const ContentBody = ({
  title,
  tags,
  date,
  source,
  children,
}: ContentBodyProps) => {
  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{title}</Heading>
        <div className="flex gap-4 text-yellow-400">
          {tags.map((tag, index) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300 flex justify-between items-end">
          <span>{date}</span>
          {source && (
            <Link
              href={source}
              target="_blank"
              className="flex justify-center items-center gap-2 border border-slate-600 rounded-md py-1 px-3 mb-2 hover:scale-105 transition-transform"
            >
              Source code
              <FaGithub />
            </Link>
          )}
        </div>

        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          {children}
        </div>
      </div>
    </Bounded>
  );
};

export default ContentBody;
