import React from "react";
import Image from "next/image";
import Card from "@/Components/Card";
import Contact from "./ResumeComps/contact";
import TechStack from "./ResumeComps/techStack";
import Experience from "./ResumeComps/experience";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import Certificates from "./ResumeComps/Certificates";
import BeyondTheScreen from "./ResumeComps/BeyondTheScreen";
import Projects from "./ResumeComps/projects";

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
                <MdOutlineArrowOutward className="absolute text-[1.3rem] left-3 " />
                Get Resume
              </button>
              <button className="btn btn-neutral btn-outline w-[15%] md:w-[25%] relative">
                <MdOutlineArrowOutward className="absolute text-[1.3rem] left-3 " />
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
<TechStack/>
<Certificates/>
<BeyondTheScreen/>
          </div>

          {/* Right Column - Projects */}
          <div className="w-[60%] flex flex-col gap-4">
              <Experience/>
              <Projects/>
              <Contact/>
          </div>
        </div>
      </div>
<footer className="text-center text-gray-800 pt-10 text-sm opacity-70">
  <p className="italic">"Code is not just what it does, but how it feels."</p>
  <p className="mt-2">— Built and designed by Mykeee © 2026</p>
</footer>
    </main>
  );
}

export default page;
