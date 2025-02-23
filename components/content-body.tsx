import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import React from "react";

type ContentBodyProps = {
  title: string;
  tags: string[];
  date: string;
  children: React.ReactNode;
};

const ContentBody = ({ title, tags, date, children }: ContentBodyProps) => {
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

        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {date}
        </p>

        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          {children}
        </div>
      </div>
    </Bounded>
  );
};

export default ContentBody;
