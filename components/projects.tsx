import { InputIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  ServerIcon,
  LandmarkIcon,
  DatabaseIcon,
} from "lucide-react";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

export default function Projects() {
  const projects = [
    {
      Icon: DatabaseIcon,
      image: "/queryflow.png",
      name: "QueryFlow Studio",
      description:
        "A database studio with superpowers. Generate queries and communicate with your database using AI.",
      href: "https://queryflow.studio",
      cta: "Check it out",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: ServerIcon,
      image: "/olive.png",
      name: "Olive MFB App",
      description:
        "Mobile banking application built under Technova Technologies for Olive Microfinance Bank.",
      href: "https://apps.apple.com/ng/app/olive-mfb/id6742594961",
      cta: "View Project",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: LandmarkIcon,
      image: "/cnaff.png",
      name: "CNAFF Abia State Revenue System",
      description:
        "Revenue collection and management system for Abia State Government, generating over 1 billion naira monthly.",
      href: "https://agent.abiae-revenue.com.ng",
      cta: "Check it out",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: FileTextIcon,
      image: "/esportsng.png",
      name: "Engy (Esports NG)",
      description: "Mobile application for the Nexal Gaming Community.",
      href: "https://play.google.com/store/apps/details?id=com.esportsng.app&hl=en",
      cta: "View Application",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: InputIcon,
      image: "/tab.webp",
      name: "Tabs",
      description:
        "Mobbin for african designers. Get access to real life design inspirations",
      href: "https://www.jointabs.com",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: GlobeIcon,
      image: "/smart-arena.png",
      name: "Smart Arena Nigeria",
      description:
        "Online store and business management systems for the leading home automation company in Nigeria",
      href: "https://mysmartarena.com",
      cta: "Visit Store",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      image: "/oversight.png",
      name: "Oversight",
      description: "Project management for productive teams.",
      href: "https://oversight-beta.vercel.app",
      cta: "Get Started",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-5",
    },
    {
      Icon: BellIcon,
      image: "/jumbo.png",
      name: "Jumbo Farms",
      description: "Online store for the Jumbo Fresh Farm Products company.",
      href: "https://www.jumbo.farm",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-5",
    },
  ];
  return (
    <div>
      <h4 className="uppercase">Projects</h4>
      <h4 className="font-semibold text-darkText text-4xl tracking-tighter">
        Some cool projects I've built.
      </h4>
      <BentoGrid className="lg:grid-rows-4 mt-5">
        {projects.map((project) => (
          <BentoCard key={project.name} {...project} />
        ))}
      </BentoGrid>
    </div>
  );
}
