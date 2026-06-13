import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaRegCalendarAlt, FaAward } from "react-icons/fa";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image: string;
  color: string;
  description?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "js-essential-1",
    title: "JavaScript Essential 1",
    issuer: "DICT-ITU DTC Initiative",
    date: "2025",
    image: "/Imgs/Portfolio/PortFolio.png", // Placeholder image
    color: "border-l-yellow-400",
    description: "Fundamental concepts of JavaScript, including data types, operators, control flow, and functions.",
  },
  {
    id: "js-essential-2",
    title: "JavaScript Essential 2",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/Imgs/Portfolio/PortFolio.png", // Placeholder image
    color: "border-l-blue-500",
    description: "Advanced JavaScript topics such as objects, prototypes, classes, and asynchronous programming.",
  },
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024",
    image: "/Imgs/Portfolio/PortFolio.png", // Placeholder image
    color: "border-l-green-500",
    description: "Comprehensive certification covering HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.",
  },
];

const CertificateCard = ({ cert, onOpen }: { cert: Certificate; onOpen: (c: Certificate) => void }) => (
  <label 
    htmlFor="certificate-modal"
    onClick={() => onOpen(cert)}
    className={`p-4 rounded-lg bg-slate-50 border border-slate-100 border-l-4 ${cert.color} transition-all duration-300 hover:shadow-sm hover:translate-x-1 flex justify-between items-center group cursor-pointer`}
  >
    <div>
      <h3 className="text-black font-bold text-[0.95rem] leading-tight group-hover:text-primary transition-colors">
        {cert.title}
      </h3>
      <p className="text-gray-500 text-[0.75rem] mt-1 flex items-center gap-1">
        <span className="font-medium text-gray-700">{cert.issuer}</span>
        <span className="text-gray-300">•</span>
        <span>{cert.date}</span>
      </p>
    </div>
    <div className="p-2 rounded-full group-hover:bg-white text-gray-300 group-hover:text-primary transition-all">
      <HiOutlineExternalLink size={18} />
    </div>
  </label>
);

export const CertificateModalContent = ({ cert }: { cert: Certificate }) => (
  <>
    {/* Header */}
    <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
          Certificate View
        </h2>
        <span className="text-xs text-gray-400 font-medium">Verify your achievement</span>
      </div>
      <label htmlFor="certificate-modal" className="btn btn-ghost btn-circle btn-sm">
        ✕
      </label>
    </div>

    <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh] flex flex-col gap-8">
      {/* Certificate Image Preview */}
      <div className="group relative w-full aspect-[1.4/1] rounded-2xl overflow-hidden border shadow-inner bg-slate-50">
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="w-full h-full object-contain p-4"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-black tracking-tight">{cert.title}</h1>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <FaAward className="text-indigo-600" /> {cert.issuer}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <FaRegCalendarAlt className="text-indigo-600" />
            </div>
            <div>
              <p className="text-[0.65rem] text-gray-400 uppercase font-bold tracking-wider">Issued On</p>
              <p className="text-black font-semibold mt-0.5">{cert.date}</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm text-xs font-bold text-indigo-600">ID</div>
            <div className="min-w-0 flex-1">
              <p className="text-[0.65rem] text-gray-400 uppercase font-bold tracking-wider">Credential ID</p>
              <p className="text-black font-semibold mt-0.5 truncate">#{cert.id.toUpperCase()}</p>
            </div>
          </div>
        </div>

        {cert.description && (
          <section className="bg-slate-50/50 rounded-2xl p-6 border border-dashed border-slate-200">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{"// DESCRIPTION"}</h3>
            <p className="text-gray-600 leading-relaxed text-[0.95rem]">
              {cert.description}
            </p>
          </section>
        )}

        <div className="pt-4 mt-auto">
          <a 
            href={cert.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn btn-neutral w-full h-14 rounded-xl gap-2 shadow-lg shadow-black/5 ${!cert.link && 'btn-disabled opacity-50'}`}
          >
            <HiOutlineExternalLink size={20} />
            Verify Credential
          </a>
          {!cert.link && (
            <p className="text-center text-[0.7rem] text-gray-400 mt-3 italic">Verification link not provided for this sample</p>
          )}
        </div>
      </div>
    </div>
  </>
);

function Certificates({ onOpen }: { onOpen: (c: Certificate) => void }) {
  return (
    <div className="p-5 rounded-xl shadow-sm border bg-white flex flex-col gap-4">
      <div className="flex justify-between items-center border-b pb-3 border-slate-50">
        <h2 className="text-[1.5rem] font-semibold flex gap-3 items-center text-black">
          <span className="p-2 bg-indigo-50 rounded-lg border border-indigo-100 shadow-sm text-indigo-600">
            <BiBadgeCheck />
          </span>
          Certifications
        </h2>
        <span className="text-[0.7rem] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium">
          {CERTIFICATES.length} Total
        </span>
      </div>
      
      <div className="flex flex-col gap-3">
        {CERTIFICATES.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
