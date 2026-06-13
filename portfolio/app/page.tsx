'use client'
import { BsStars } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import Link from "next/link";

import Card from "@/Components/Card";
import CodeSnippet from "@/Components/CodeSnippet";
import { MdOutlineArrowOutward } from "react-icons/md";
import ScrambledText from './ScrambledText';

function ColorfulText({ text }: { text: string }) {
  const colors = [
    "#FF595E", "#FF924C", "#FFCA3A", "#8AC926",
    "#1982C4", "#6A4C93", "#F72585", "#4CC9F0",
    "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9",
    "#BAE1FF", "#D4BAFF", "#FFB3DE", "#B3F0FF",
    "#FFC8DD", "#CDB4DB", "#BDE0FE", "#A2D2FF",
    "#CAFFBF", "#FDFFB6", "#FFD6A5", "#FFADAD",
    "#E8F4F8", "#F5E6FA", "#FFF0E6", "#E6FAF0",
    "#FFF0F5", "#F0F5FF", "#FFFBE6", "#F0FAF5",
  ];

  return (
    <span className="inline-flex flex-wrap justify-center lg:justify-start">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-colors duration-150 cursor-default"
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement;
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            el.style.color = randomColor;
            el.classList.add("wobble-hor-bottom-normal");
            el.addEventListener("animationend", () => {
              el.classList.remove("wobble-hor-bottom-normal");
            }, { once: true });
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "";
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <div className="element min-h-screen flex flex-col justify-center items-center relative px-4 py-12 lg:py-0 overflow-x-hidden">

      <h2 className="absolute top-4 left-4 font-bold text-gray-700 text-xs md:text-sm tracking-widest fade-in-top-normal">WEB DEVELOPER</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 xl:gap-40 w-full max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[55%]">
          <div className="border border-black px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6 fade-in-top-normal shadow-sm bg-white/50 backdrop-blur-sm">
            <BsStars className="text-lg text-black animate-pulse" />
            <p className="text-black text-xs md:text-sm font-bold uppercase tracking-wider">Let's Build together</p>
          </div>

          <h1 className="text-black text-6xl md:text-8xl xl:text-9xl font-black [text-shadow:_0px_4px_10px_rgba(0,0,0,0.1)] fade-in-left-normal leading-tight ">
            <ColorfulText text="MYKEEE" />
          </h1>
           <ScrambledText
  className="scrambled-text-demo text-gray-800 text-sm md:text-base max-w-lg fade-in-right-normal leading-relaxed mb-3 px-2 md:px-0"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars=".:"
>
Full-Stack Developer passionate about building interactive web apps. Skilled in React, Next.js, Laravel, and Firebase, I craft scalable solutions that make coding engaging and accessible.
</ScrambledText>

          <div className="flex gap-4 mb-8">
            <div className="border border-black p-3 text-cyan-600 text-2xl rounded-lg bg-white shadow-sm hover:scale-110 transition-transform cursor-default scale-in-hor-right-normal"><FaReact /></div>
            <div className="border border-black p-3 text-black text-2xl rounded-lg bg-white shadow-sm hover:scale-110 transition-transform cursor-default scale-in-hor-right-normal"><SiNextdotjs /></div>
            <div className="border border-black p-3 text-orange-700 text-2xl rounded-lg bg-white shadow-sm hover:scale-110 transition-transform cursor-default scale-in-hor-right-normal"><FaLaravel /></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 fade-in-left-normal">
            <Link href="/Resume" className="w-full sm:w-48">
              <button className="btn btn-neutral btn-outline w-full relative group overflow-hidden">
                <MdOutlineArrowOutward className="absolute text-xl left-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="ml-4">Portfolio</span>
              </button>
            </Link>
            <button className="btn btn-neutral btn-dash w-full sm:w-48 relative group overflow-hidden">
              <MdOutlineArrowOutward className="absolute text-xl left-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="ml-4">Contact</span>
            </button>
          </div>
        </div>

        {/* Visual Element (Code Snippet) */}
        <div className="w-full lg:w-[45%] max-w-xl self-center lg:self-end fade-in-right-normal px-2">
          <CodeSnippet />
        </div>
      </div>
    </div>
  );
}
