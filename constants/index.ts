import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

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
    label: "About Me",
    href: "/about",
  },
  {
    label: "My Work",
    href: "/my-work",
  },
];

export const footerNav: NavItem[] = [
  {
    label: "Imprint",
    href: "/imprint",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export const ctaLabel = "Contact";
export const ctaHref = "mailto:Tim Mauersberger <hello@devtmxx.de>";

export type Social = {
  label: string;
  name: string;
  href: string;
  icon: IconType;
};

export const twitter: Social = {
  label: "Twitter",
  name: "tweettmxx",
  href: "https://x.com/tweettmxx",
  icon: FaGithub,
};
export const github: Social = {
  label: "GitHub",
  name: "devtmxx",
  href: "https://github.com/devtmxx",
  icon: FaTwitter,
};
export const linkedin: Social = {
  label: "LinkedIn",
  name: "Tim Mauersberger",
  href: "https://www.linkedin.com/in/tim-mauersberger/",
  icon: FaLinkedin,
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

export type Work = {
  title: string;
  href: string;
  tags: string[];
  viewMoreText: string;
};

export const works: Work[] = [
  {
    title: "SurvivalGames",
    href: "survival-games",
    tags: ["minigame"],
    viewMoreText:
      "A fully configurable, open-source SurvivalGames minigame designed for networks",
  },
  {
    title: "Abilities",
    href: "abilities",
    tags: ["fun"],
    viewMoreText:
      "Just a fun showcase of what is possible to do with Minecraft plugins",
  },
  {
    title: "Trading",
    href: "trading",
    tags: ["tools and utilities", "economy"],
    viewMoreText:
      "Advanced trading plugin that prevents scamming between players",
  },
  {
    title: "Lobby Jump'n'Run",
    href: "lobby-jump-n-run",
    tags: ["fun"],
    viewMoreText: "A simple jump and run for GommeHD.net waiting lobbies",
  },
  {
    title: "RageMode",
    href: "rage-mode",
    tags: ["minigame"],
    viewMoreText: "My first minigame on GommeHD.net",
  },
];
