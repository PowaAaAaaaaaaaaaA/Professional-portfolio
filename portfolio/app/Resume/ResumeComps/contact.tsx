import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbMailStar } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const links = [
  {
    label: "GITHUB",
    value: "PowaAaAaaaaaaA",
    href: "https://github.com/PowaAaAaaaaaaaaaA",
    icon: <FaGithub className="text-[1.2rem]" />,
    accent: "#24292e",
  },
  {
    label: "LINKEDIN",
    value: "Mike Brian Mayo",
    href: "https://www.linkedin.com/in/mike-brian-mayo/",
    icon: <FaLinkedin className="text-[1.2rem]" />,
    accent: "#0077b5",
  },
  {
    label: "EMAIL",
    value: "Mikemayo482@gmail.com",
    href: "mailto:Mikemayo482@gmail.com",
    icon: <MdEmail className="text-[1.2rem]" />,
    accent: "#e84343",
  },
  {
    label: "DISCORD",
    value: "mykeeexd",
    href: "#",
    icon: <FaDiscord className="text-[1.2rem]" />,
    accent: "#5865f2",
  },
];

function Contact() {
  return (
    <div className="p-5 rounded-xl shadow-md border bg-white flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="p-2 bg-orange-50 rounded-lg border border-orange-100 shadow-sm text-orange-600">
          <TbMailStar />
        </span>
        <h2 className="text-[1.3rem] font-semibold text-black tracking-tight">
          Get in Touch
        </h2>
      </div>

      <p className="text-gray-400 text-xs tracking-widest uppercase border-b pb-3">
        Let's connect and build something great
      </p>

      {/* Links */}
      <div className="flex flex-col gap-3 flex-1">
        {links.map(({ label, value, href, icon, accent }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="group flex-1 flex items-center justify-between px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            {/* Left: icon + text */}
            <div className="flex items-center gap-3">
              <span
                className="p-2 rounded-md text-white transition-all duration-200"
                style={{ backgroundColor: accent }}
              >
                {icon}
              </span>
              <div className="flex flex-col">
                <span className="text-[0.6rem] text-gray-400 uppercase tracking-widest leading-none">
                  {label}
                </span>
                <span className="text-sm font-medium text-gray-800 mt-0.5">
                  {value}
                </span>
              </div>
            </div>

            {/* Right: arrow */}
            <MdOutlineArrowOutward
              className="text-gray-300 group-hover:text-gray-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-[1.1rem]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Contact;