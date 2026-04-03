import React from "react";
import { BsSuitcaseLgFill } from "react-icons/bs";

const experiences = [
  {
    year: "2026",
    title: "On-the-job-Traning",
    company: "LGU Paniqui - Municipal of Social Welfare Development Office",
    description: "Developed a Family Risk and Vulnerability Assessment System survey with an admin dashboard that provides summarized data per respondent and barangay, handling over 10,000 respondents.",
  },
];

function Experience() {
  return (
    <div className="w-full bg-white rounded-xl p-4 flex flex-col gap-3 border">
      <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span><BsSuitcaseLgFill /></span>
        Experience
      </h2>

      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 relative">
            {/* Left line + dot */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-black mt-1 z-10 shrink-0" />
              {index !== experiences.length - 1 && (
                <div className="w-[2px] bg-gray-200 flex-1 my-1" />
              )}
            </div>

            {/* Content */}
            <div className="pb-6 w-full">
              <span className="text-[0.75rem] text-gray-400 font-medium">{exp.year}</span>
              <h3 className="text-black font-semibold text-[0.95rem] leading-tight">{exp.title}</h3>
              <p className="text-gray-400 text-[0.8rem]">{exp.company}</p>
              <p className="text-gray-500 text-[0.8rem] mt-1">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;