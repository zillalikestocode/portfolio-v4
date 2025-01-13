"use client";
import { LucideGithub, LucideTwitter, LucideLinkedin } from "lucide-react";
import ShimmerButton from "../components/ui/shimmer-button";

export default function Hero() {
  return (
    <div className="flex flex-col mt-40 items-center">
      <h4 className="font-semibold tracking-tighter max-w-3xl text-center text-4xl sm:text-5xl">
        <span className="text-darkText">Emmanuel</span> is a fullstack{" "}
        <span className="text-darkText">software engineer</span> building{" "}
        <span className="text-darkText">cool stuff </span>
        around the world.
      </h4>
      <h4 className="text-lg font-medium text-darkText/90">
        i'm also known as codezilla (zilla for short)
      </h4>
      <a href="/Resume.pdf" download>
        <button className="border-[#707581] mt-5 rounded-lg border px-5 py-2.5 text-sm text-darkText">
          Check Resumé
        </button>
      </a>
      <div className="flex gap-2.5 items-center mt-2.5">
        <a href="https://github.com/zillalikestocode">
          <ShimmerButton
            shimmerSize={"1px"}
            borderRadius={"10px"}
            background="#363b45"
            className="p-2"
          >
            <LucideGithub size={16} color="white" />
          </ShimmerButton>
        </a>
        <a href="https://linkedin.com/in/engoka">
          <ShimmerButton
            shimmerSize={"1px"}
            borderRadius={"10px"}
            background="#363b45"
            className="p-2"
          >
            <LucideLinkedin size={16} color="white" />
          </ShimmerButton>
        </a>
        <a href="https://x.com/0xzilla_">
          <ShimmerButton
            shimmerSize={"1px"}
            borderRadius={"10px"}
            background="#363b45"
            className="p-2 "
          >
            <LucideTwitter size={16} color="white" />
          </ShimmerButton>
        </a>
      </div>
    </div>
  );
}
