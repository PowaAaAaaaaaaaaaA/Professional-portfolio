"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "@/Components/Card";
import Contact from "./ResumeComps/contact";
import TechStack from "./ResumeComps/techStack";
import Experience from "./ResumeComps/experience";
import Certificates, { Certificate, CertificateModalContent } from "./ResumeComps/Certificates";
import BeyondTheScreen from "./ResumeComps/BeyondTheScreen";
import Projects, { Project, ProjectDrawerContent } from "./ResumeComps/projects";
import ChatBubble from "./ResumeComps/ChatBubble";
import ScrollReveal from "@/Components/ScrollReveal";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";

function Page() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  return (
    <>
      <main className="element min-h-screen p-4 md:p-10 pb-5">
        <div className="mx-auto w-full lg:w-[85%] xl:w-[75%] p-2 flex flex-col gap-6 md:gap-10">

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start w-full p-2 gap-6 md:gap-8">
            <ScrollReveal direction="down" distance={30}>
              <div className="flex-shrink-0">
                <Image
                  className="border-2 md:border-3 border-black rounded-2xl shadow-lg"
                  src="/Imgs/Myke1.png"
                  alt="Myke"
                  width={180}
                  height={180}
                  priority
                />
              </div>
            </ScrollReveal>
            <div className="w-full flex flex-col justify-center text-center md:text-left gap-2 md:gap-1">
              <ScrollReveal direction="left" delay={0.2}>
                <h2 className="text-black text-3xl md:text-[2rem] font-bold font-mono">
                  Mike Brian Mayo
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <p className="text-black flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                  <IoLocationOutline className="text-gray-600" /> Paniqui, Tarlac, Philippines, 2307
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.4}>
                <p className="text-black font-bold text-base md:text-[1.1rem]">
                  Full-Stack Developer | Student Freelancer | UI/UX
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.5} distance={20}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 justify-center md:justify-start">
                  <button className="btn btn-neutral btn-outline w-full sm:w-auto px-8 relative overflow-hidden group">
                    <MdOutlineArrowOutward className="absolute text-[1.2rem] left-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span className="ml-4">Get Resume</span>
                  </button>
                  <button className="btn btn-neutral btn-outline w-full sm:w-auto px-8 relative overflow-hidden group">
                    <MdOutlineArrowOutward className="absolute text-[1.2rem] left-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span className="ml-4">Contact</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full lg:w-[40%]">
              <ScrollReveal direction="right" delay={0.1}>
                <Card
                  title="Overview"
                  description="I'm a Full-Stack Developer who enjoys building interactive, responsive experiences that feel intuitive and engaging."
                  icon={<BsPersonFill />}
                  color="bg-violet-50 border-violet-100 text-violet-600"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <Card
                  title="Education"
                  description={
                    <div className="space-y-1">
                      <span className="font-bold text-black block">BS Information Technology</span>
                      <p className="text-gray-600">Specialized In Web and Mobile Application</p>
                      <p className="flex items-center gap-2">• Tarlac State University</p>
                      <p className="flex items-center gap-2">• 2022-2026</p>
                    </div>
                  }
                  icon={<MdOutlineCastForEducation />}
                  color="bg-amber-50 border-amber-100 text-amber-600"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <TechStack />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4}>
                <Certificates onOpen={setActiveCertificate} />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.5}>
                <BeyondTheScreen />
              </ScrollReveal>
            </div>

            <div className="w-full lg:w-[60%] flex flex-col gap-2">
              <ScrollReveal direction="left" delay={0.2}>
                <Experience />
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.3}>
                {/* Pass setActiveProject down */}
                <Projects onOpen={setActiveProject} />
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.4}>
                <Contact />
              </ScrollReveal>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-800 pt-12 pb-8 text-sm">
          <ScrollReveal direction="up" distance={20}>
            <div className="opacity-70">
              <p className="italic">"Code is not just what it does, but how it feels."</p>
              <p className="mt-2 font-medium tracking-wide">— Built and designed by Mykeee © 2026</p>
            </div>
          </ScrollReveal>
        </footer>
      </main>
      <ChatBubble />

      {/* Project Modal */}
      <input id="project-drawer" type="checkbox" className="modal-toggle" />
      <div className="modal z-[9999]" role="dialog">
        <div className="modal-box w-11/12 max-w-4xl bg-white p-0 overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
          {activeProject && <ProjectDrawerContent project={activeProject} />}
        </div>
        <label className="modal-backdrop" htmlFor="project-drawer">Close</label>
      </div>

      {/* Certificate Modal */}
      <input id="certificate-modal" type="checkbox" className="modal-toggle" />
      <div className="modal z-[9999]" role="dialog">
        <div className="modal-box w-11/12 max-w-4xl bg-white p-0 overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
          {activeCertificate && <CertificateModalContent cert={activeCertificate} />}
        </div>
        <label className="modal-backdrop" htmlFor="certificate-modal">Close</label>
      </div>
    </>
  );
}

export default Page;