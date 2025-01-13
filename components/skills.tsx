import Marquee from "react-fast-marquee";
import flutter from "../assets/icons/flutter.svg";
import javascript from "../assets/icons/Javascript.svg";
import typescript from "../assets/icons/Typescript.svg";
import nodejs from "../assets/icons/Nodejs.svg";
import nextjs from "../assets/icons/nextjs.svg";
import dart from "../assets/icons/dart.svg";

export default function Skills() {
  return (
    <Marquee style={{ transform: "rotate(3deg)" }} speed={100} autoFill>
      <div className="flex gap-8 mx-4">
        <img
          src={flutter.src}
          alt=""
          className="size-20 rounded-3xl border-[3px] border-gray-100 bg-gray-300"
        />
        <img
          src={dart.src}
          alt=""
          className="size-20 p-2 rounded-3xl border-[3px] border-gray-100 bg-gray-300"
        />
        <img
          src={nodejs.src}
          alt=""
          className="size-20 p-4 rounded-3xl border-[3px] border-gray-100 bg-gray-200"
        />
        <div className="size-20 rounded-3xl border-[3px] bg-black border-gray-100">
          <img
            src={nextjs.src}
            alt=""
            className="w-full bg-white rounded-full"
          />
        </div>
        <img
          src={typescript.src}
          alt=""
          className="size-20 rounded-3xl border-[3px] border-gray-100"
        />
      </div>
    </Marquee>
  );
}
