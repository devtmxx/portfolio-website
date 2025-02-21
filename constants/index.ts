export const firstName = "Tim";
export const lastName = "Mauersberger";
export const fullName = `${firstName} ${lastName}`;

type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const ctaLabel = "Contact";
export const ctaHref = "/contact";

export const twitterHref = "";
export const githubHref = "";
export const linkedinHref = "";

type TechItem = {
  label: string;
  color: string;
};

export const techItems: TechItem[] = [
  {
    label: "Paper",
    color: "#FFFFFF",
  },
  {
    label: "Velocity",
    color: "#0AE448",
  },
  {
    label: "Java",
    color: "#FF7E33",
  },
  {
    label: "Guice",
    color: "#29D8FF",
  },
];
