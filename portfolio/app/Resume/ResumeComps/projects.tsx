"use client";
import React from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: { name: string; color: string }[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
}

export const PROJECTS: Project[] = [
  {
    id: "devlab",
    title: "DevLab",
    shortDescription: "A gamified coding platform where challenges replace tutorials and progress is earned through solving, debugging, and building.",
    longDescription: "DevLab is a Capstone project that turns coding into a game. It focuses on interactive learning, providing users with real-world debugging scenarios and building challenges. The platform features a progression system, leaderboards, and a variety of coding environments.",
    tags: [
      { name: "Next.js", color: "bg-neutral-100 text-neutral-800 border-neutral-300" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-600 border-blue-200" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
      { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-600 border-indigo-200" },
    ],
    thumbnail: "/Imgs/Portfolio/PortFolio.png",
    images: ["/Imgs/Portfolio/PortFolio.png", "/Imgs/Portfolio/PortFolio.png", "/Imgs/Portfolio/PortFolio.png"],
    githubUrl: "https://github.com",
  },
  {
    id: "frva",
    title: "Family Risk and Vulnerability Assessment (FRVA)",
    shortDescription: "A sophisticated platform designed for specialized vertical analysis and data visualization in industrial contexts.",
    longDescription: "FRVA is a robust application built for engineers to visualize and analyze complex vertical data structures. It features real-time data streaming, interactive charts, and secure cloud storage for analysis reports.",
    tags: [
      { name: "Next.js", color: "bg-neutral-100 text-neutral-800 border-neutral-300" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-600 border-blue-200" },
      { name: "Supabase", color: "bg-emerald-100 text-emerald-600 border-emerald-200" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
    ],
    thumbnail: "/Imgs/FRVA/FRVA1.png",
    images: ["/Imgs/FRVA/FRVA1.png", "/Imgs/FRVA/FRVA2.png", "/Imgs/FRVA/FRVA3.png", "/Imgs/FRVA/FRVA4.png"],
    githubUrl: "https://github.com",
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio",
    shortDescription: "A responsive portfolio web application built to showcase projects, skills, and experience with a focus on clean UI.",
    longDescription: "This portfolio project focuses on delivering a high-performance, accessible, and visually appealing experience. It utilizes modern web technologies like Next.js 15 and Tailwind CSS 4 to ensure scalability and ease of maintenance.",
    tags: [
      { name: "Next.js", color: "bg-neutral-100 text-neutral-800 border-neutral-300" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
      { name: "Framer Motion", color: "bg-purple-100 text-purple-600 border-purple-200" },
    ],
    thumbnail: "/Imgs/Portfolio/PortFolio.png",
    images: ["/Imgs/Portfolio/PortFolio.png", "/Imgs/Portfolio/PortFolio.png"],
    githubUrl: "https://github.com",
  },
  {
    id: "faced",
    title: "Family Access Card in Emergencies and Disasters (FACED)",
    shortDescription: "A gamified coding platform where challenges replace tutorials and progress is earned through solving, debugging, and building.",
    longDescription: "DevLab is a Capstone project that turns coding into a game. It focuses on interactive learning, providing users with real-world debugging scenarios and building challenges. The platform features a progression system, leaderboards, and a variety of coding environments.",
    tags: [
      { name: "Next.js", color: "bg-neutral-100 text-neutral-800 border-neutral-300" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-600 border-blue-200" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
      { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-600 border-indigo-200" },
    ],
    thumbnail: "/Imgs/Portfolio/PortFolio.png",
    images: ["/Imgs/Portfolio/PortFolio.png", "/Imgs/Portfolio/PortFolio.png", "/Imgs/Portfolio/PortFolio.png"],
    githubUrl: "https://github.com",
  },
];

export const Tag = ({ name, color }: { name: string; color: string }) => (
  <span className={`px-2 py-0.5 rounded-md text-[0.75rem] border font-medium ${color}`}>
    {name}
  </span>
);

// 👇 Drawer content extracted — used in page.tsx
export const ProjectDrawerContent = ({ project }: { project: Project }) => (
  <>
    <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
          {project.title}
        </h2>
        <span className="text-xs text-gray-400 font-medium">Project Case Study</span>
      </div>
      <label htmlFor="project-drawer" className="btn btn-ghost btn-circle btn-sm">✕</label>
    </div>

    <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh] flex flex-col gap-8" data-lenis-prevent>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => <Tag key={i} name={tag.name} color={tag.color} />)}
      </div>

      <div className="carousel w-full rounded-xl shadow-inner bg-gray-50 border">
        {project.images.map((img, idx) => (
          <div key={idx} id={`img-${idx}`} className="carousel-item relative w-full aspect-video">
            <img src={img} className="w-full h-full object-cover" alt={`screenshot ${idx + 1}`} />
            <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#img-${idx === 0 ? project.images.length - 1 : idx - 1}`} className="btn btn-circle btn-xs btn-ghost bg-white/50 backdrop-blur-sm">❮</a>
              <a href={`#img-${idx === project.images.length - 1 ? 0 : idx + 1}`} className="btn btn-circle btn-xs btn-ghost bg-white/50 backdrop-blur-sm">❯</a>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-slate-50/50 rounded-2xl p-6 border border-dashed border-slate-200">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{"// Project Scope"}</h3>
        <p className="text-gray-600 leading-relaxed text-[0.95rem]">{project.longDescription}</p>
      </section>

      <div className="flex gap-3 pt-4 mt-auto">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-neutral flex-1 gap-2 h-14 rounded-xl shadow-lg shadow-black/5">
            <FaGithub size={20} /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1 gap-2 h-14 rounded-xl shadow-lg shadow-black/5">
            <FaExternalLinkAlt size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </>
);

// 👇 Card no longer has its own drawer — just calls onOpen
const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) => (
  <div className="group card bg-[#F9F8F6] w-full h-full shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 text-black overflow-hidden flex flex-col">
    <figure className="h-32 overflow-hidden relative">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
        <label
          htmlFor="project-drawer"
          className="btn btn-sm btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
          onClick={() => onOpen(project)}
        >
          View Details
        </label>
      </div>
    </figure>
    <div className="card-body p-4 flex flex-col gap-2 flex-grow">
      <h2 className="card-title text-lg font-bold">{project.title}</h2>
      <p className="text-[0.75rem] leading-relaxed text-gray-600 line-clamp-3">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {project.tags.slice(0, 3).map((tag, i) => <Tag key={i} name={tag.name} color={tag.color} />)}
        {project.tags.length > 3 && (
          <span className="text-[0.7rem] text-gray-400 self-center">+{project.tags.length - 3} more</span>
        )}
      </div>
    </div>
  </div>
);

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <div className="w-full bg-white rounded-xl p-6 flex flex-col gap-4 border shadow-sm fade-in-right-normal">
      <div className="flex justify-between items-center">
        <h2 className="text-[1.5rem] font-semibold flex gap-3 items-center text-black">
          <span className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 shadow-sm text-emerald-600">
            <GoProjectRoadmap />
          </span>
          Projects
        </h2>
        <span className="text-xs text-gray-400 font-mono">Total: {PROJECTS.length}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-1 items-stretch custom-scrollbar" data-lenis-prevent>
        {PROJECTS.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} onOpen={onOpen} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;