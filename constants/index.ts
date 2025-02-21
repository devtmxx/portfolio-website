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

export type Social = {
  label: string;
  name: string;
  href: string;
};

export const twitter: Social = {
  label: "Twitter",
  name: "tweettmxx",
  href: "https://x.com/tweettmxx",
};
export const github: Social = {
  label: "GitHub",
  name: "devtmxx",
  href: "https://github.com/devtmxx",
};
export const linkedin: Social = {
  label: "LinkedIn",
  name: "Tim Mauersberger",
  href: "https://www.linkedin.com/in/tim-mauersberger/",
};

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
