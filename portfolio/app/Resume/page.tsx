import React from "react";
import Image from "next/image";
import Card from "@/Components/Card";
import Contact from "./ResumeComps/contact";

import Experience from "./ResumeComps/experience";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
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
import { BiBadgeCheck } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";

// backdrop-blur-[2px]

function page() {
  return (
    <main className="element min-h-screen p-10 pb-5">
      <div className="m-auto w-[70%] p-2 flex justify-center  rounded-2xl flex-col gap-10">
        {/* Profile */}
        <div className="flex w-[95%] p-2 gap-5">
          <div className="">
            <Image
              className="border-3 border-black rounded-2xl"
              src="/Imgs/Myke.jpg"
              alt="Myke"
              width={180}
              height={180}
            />
          </div>
          {/* Information */}
          <div className="w-[80%] flex flex-col justify-center gap-1">
            <h2 className="text-black text-[2rem] font-bold font-mono">
              Mike Brian Mayo
            </h2>
            <p className="text-black flex gap-2 text-[1rem]">
              <IoLocationOutline /> Paniqui, Tarlac, Philppines, 2307
            </p>
            <p className="text-black font-bold text-[1.1rem]">
              Full-Stack Developer | Student Freelancer | UI/UX
            </p>
            <div className="flex gap-4">
              <button className="btn btn-neutral btn-outline w-[15%] md:w-[25%] relative">
                <MdOutlineArrowOutward className="absolute text-[1.3rem] left-3 text-black" />
                Get Resume
              </button>
              <button className="btn btn-neutral btn-outline w-[15%] md:w-[25%] relative">
                <MdOutlineArrowOutward className="absolute text-[1.3rem] left-3 text-black" />
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Cards Info */}
        <div className="flex gap-2 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-2 w-[40%]">
            <Card
              title="Overview"
              description="I'm a Full-Stack Developer who enjoys building interactive, responsive experiences that feel intuitive and engaging. For me, coding isn't just about making things work—it's about making them feel right.

I like working across the stack, from clean UI design to the logic behind it, and I enjoy solving complex problems through iteration and refinement. I'm naturally curious, always exploring new ideas and pushing my work to be smoother, smarter, and more efficient.

As a fresh graduate, I'm continuously learning and improving, focused on building systems that balance creativity and solid engineering."
              icon={<BsPersonFill />}
            />
            <Card
              title="Education"
              description={
                <>
                  <span className="font-bold text-black">
                    BS Information Technology{" "}
                  </span>
                  <br />
                  Specialized In Web and Mobile Application
                  <br />
                  <span>• Tarlac State University</span>
                  <br />• 2022-2026
                </>
              }
              icon={<MdOutlineCastForEducation />}
            />
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
<div className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2">
<h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span><BiBadgeCheck /></span>Certifactions</h2>
        <div className="p-4 rounded-sm bg-gray-200">
          <h2 className="text-black font-bold pb-2">JavaScript Essential 1</h2>
          <p className="text-gray-600 text-[0.8rem]">DICT-ITU DTC Initiative • 2025</p>
        </div>
        <div className="p-4 rounded-sm bg-gray-200">
          <h2 className="text-black font-bold pb-2">JavaScript Essential 1</h2>
          <p className="text-gray-600 text-[0.8rem]">DICT-ITU DTC Initiative • 2025</p>
        </div>
</div>
<div className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2">
<h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span><BsArrowsFullscreen /></span>Beyond the Screen</h2>
        <p className="text-gray-500 text-[0.8rem]">
Outside of coding, I enjoy playing games like Dota 2 and Valorant, hanging out with friends on Discord, and watching anime. I also like staying active through jogging and spending time with Families and Friends.
</p><div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
          </div>

          {/* Right Column - Projects */}
          <div className="w-[60%] flex flex-col gap-4">
              <Experience/>
            <div className="w-full bg-white rounded-xl p-4 flex flex-col gap-3 border">
              <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
                <span>
                  <GoProjectRoadmap />
                </span>
                Projects
              </h2>
              <div className="grid grid-cols-[45%_45%] gap-4 justify-center max-h-[60vh] overflow-y-auto">
                <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
                  <figure>
                    <img
                      src="/Imgs/DevLab.png"
                      alt="Devlab"
                      className="w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">DevLab</h2>
                    <p className="text-[0.7rem]">
                      DevLab is a Capstone project that turns coding into a
                      game—where challenges replace tutorials and progress is
                      earned through solving, debugging, and building.
                    </p>
                  </div>
                </div>
                <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
                  <figure>
                    <img
                      src="/Imgs/DevLab.png"
                      alt="Devlab"
                      className="w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">DevLab</h2>
                    <p className="text-[0.7rem]">
                      DevLab is a Capstone project that turns coding into a
                      game—where challenges replace tutorials and progress is
                      earned through solving, debugging, and building.
                    </p>
                  </div>
                </div>
                <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
                  <figure>
                    <img
                      src="/Imgs/DevLab.png"
                      alt="Devlab"
                      className="w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">DevLab</h2>
                    <p className="text-[0.7rem]">
                      DevLab is a Capstone project that turns coding into a
                      game—where challenges replace tutorials and progress is
                      earned through solving, debugging, and building.
                    </p>
                  </div>
                </div>
                <div className="card bg-[#F9F8F6] w-full shadow-sm text-black">
                  <figure>
                    <img
                      src="/Imgs/DevLab.png"
                      alt="Devlab"
                      className="w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">DevLab</h2>
                    <p className="text-[0.7rem]">
                      DevLab is a Capstone project that turns coding into a
                      game—where challenges replace tutorials and progress is
                      earned through solving, debugging, and building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              <Contact/>
          </div>
        </div>
      </div>
<footer className="text-center text-gray-600 pt-10 text-sm opacity-70">
  <p className="italic">"Code is not just what it does, but how it feels."</p>
  <p className="mt-2">— Built and designed by Mykeee © 2026</p>
</footer>
    </main>
  );
}

export default page;
