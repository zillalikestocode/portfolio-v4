import Projects from "@/components/projects";
import Hero from "../components/hero";
import Experience from "@/components/experience";
import GetInTouch from "@/components/get-in-touch";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen mb-56 space-y-20 z-20 w-full">
      <div className="max-w-7xl px-5 space-y-20 md:px-32 mx-auto">
        <Hero />
        <Projects />
        <Experience />
      </div>
      <Skills />
      <div className="max-w-7xl px-5 md:px-32 mx-auto">
        <GetInTouch />
      </div>
    </div>
  );
}
