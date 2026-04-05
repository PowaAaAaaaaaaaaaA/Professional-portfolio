import React from "react";

import { TbAutomaticGearbox } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { RiPhpFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { TbApiApp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { BsOpenai } from "react-icons/bs";
import { BsClaude } from "react-icons/bs";

function TechStack() {
  return (
    <div className="p-4 rounded-xl shadow-md border flex flex-col gap-2 bg-white">
      <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span>
          <TbAutomaticGearbox />
        </span>
        Tech Toolkit
      </h2>
      <div className="flex flex-wrap gap-2">
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-teal-100 text-teal-600 border border-teal-200 flex items-center gap-1">
          <FaReact />
          React
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-teal-100 text-teal-600 border border-teal-200 flex items-center gap-1">
          <TbBrandReactNative />
          React Native
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-blue-100 text-blue-600 border border-blue-200 flex items-center gap-1">
          <SiTypescript />
          TypeScript
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-neutral-100 text-neutral-800 border border-neutral-300 flex items-center gap-1">
          <SiNextdotjs />
          Next.js
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-cyan-100 text-cyan-600 border border-cyan-200 flex items-center gap-1">
          <RiTailwindCssFill />
          Tailwind CSS
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-yellow-100 text-yellow-600 border border-yellow-200 flex items-center gap-1">
          <IoLogoJavascript />
          JavaScript
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-indigo-100 text-indigo-600 border border-indigo-200 flex items-center gap-1">
          <RiPhpFill />
          PHP
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-red-100 text-red-600 border border-red-200 flex items-center gap-1">
          <FaLaravel />
          Laravel
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-green-100 text-green-600 border border-green-200 flex items-center gap-1">
          <FaNodeJs />
          Node.js
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-orange-100 text-orange-600 border border-orange-200 flex items-center gap-1">
          <GrMysql />
          MySQL
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-amber-100 text-amber-600 border border-amber-200 flex items-center gap-1">
          <IoLogoFirebase />
          Firebase
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center gap-1">
          <RiSupabaseFill />
          SupaBase
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1">
          <TbApiApp />
          Rest APIs
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-neutral-100 text-neutral-800 border border-neutral-300 flex items-center gap-1">
          <FaGithub />
          Git & GitHub
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-blue-100 text-blue-600 border border-blue-200 flex items-center gap-1">
          <VscVscode />
          VS Code
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-purple-100 text-purple-600 border border-purple-200 flex items-center gap-1">
          <FaFigma />
          Figma
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center gap-1">
          <BsOpenai />
          ChatGPT
        </div>
        <div className="px-2 py-0.5 rounded-md text-[0.9rem] bg-orange-100 text-orange-600 border border-orange-200 flex items-center gap-1">
          <BsClaude />
          Claude
        </div>
      </div>
    </div>
  );
}

export default TechStack;
