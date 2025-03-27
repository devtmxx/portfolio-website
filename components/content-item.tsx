import { Work } from "@/constants";
import { MdArrowOutward } from "react-icons/md";
import React from "react";

type ContentItemProps = {
  ref: React.RefCallback<HTMLLIElement | null>;
} & Work;

const ContentItem = ({
  ref,
  title,
  href,
  tags,
  viewMoreText,
}: ContentItemProps) => {
  return (
    <li
      className="list-item opacity-0 hover:bg-slate-50/10 transition-colors"
      ref={ref}
    >
      <a
        href={`/my-work/${href}`}
        className="flex flex-col justify-between border-t border-t-slate-100 py-10 px-2 text-slate-200 md:flex-row"
        aria-label={title}
      >
        <div className="flex flex-col">
          <span className="text-3xl font-bold">{title}</span>
          <div className="flex gap-3 text-yellow-400">
            {tags.map((tag, index) => (
              <span key={index} className="text-lg font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
          {viewMoreText} <MdArrowOutward />
        </span>
      </a>
    </li>
  );
};

export default ContentItem;
