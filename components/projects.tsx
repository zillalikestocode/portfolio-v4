import { InputIcon } from "@radix-ui/react-icons";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

export default function Projects() {
  const projects = [
    {
      Icon: FileTextIcon,
      image: "/esportsng.png",
      name: "Esports NG",
      description:
        "Esports NG mobile application for the Nexal Gaming Community.",
      href: "/",
      cta: "View Application",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      image: "https://www.jointabs.com/_nuxt/tab.D6of20Tj.png",
      name: "Tabs",
      description:
        "Mobbin for african designers. Get access to real life design inspirations",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
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
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      image: "/oversight.png",
      name: "Oversight",
      description: "Project management for productive teams.",
      href: "https://oversight-beta.vercel.app",
      cta: "Get Started",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      image: "/jumbo.png",
      name: "Jumbo Farms",
      description: "Online store for the Jumbo Fresh Farm Products company.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  return (
    <div>
      <h4 className="uppercase">Projects</h4>
      <h4 className="font-semibold text-darkText text-4xl tracking-tighter">
        Some cool projects I've built.
      </h4>
      <BentoGrid className="lg:grid-rows-3 mt-5">
        {projects.map((project) => (
          <BentoCard key={project.name} {...project} />
        ))}
      </BentoGrid>
    </div>
  );
}
