import Projects from "@/components/projects";
import Hero from "../components/hero";
import Experience from "@/components/experience";
import GetInTouch from "@/components/get-in-touch";

export default function Home() {
  return (
    <div className="min-h-screen mb-56 space-y-20 max-w-7xl z-20 px-5 md:px-32 mx-auto w-full">
      <Hero />
      <Projects />
      <Experience />
      <GetInTouch />
    </div>
  );
}
