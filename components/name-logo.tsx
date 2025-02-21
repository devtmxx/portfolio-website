import Link from "next/link";

type NameLogoProps = {
  name: string;
};

const NameLogo = ({ name }: NameLogoProps) => {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
};

export default NameLogo;
