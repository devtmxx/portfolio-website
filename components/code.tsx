import React from "react";

const Code = ({ children }: React.PropsWithChildren) => (
  <span className="font-mono bg-slate-800 rounded px-2 py-1">{children}</span>
);

export default Code;
