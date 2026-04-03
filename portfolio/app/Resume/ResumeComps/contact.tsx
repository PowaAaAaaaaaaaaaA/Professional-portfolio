import React from "react";
import { TbMailStar } from "react-icons/tb";

function Contact() {
  return (
    <div className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2">
      <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span><TbMailStar /></span>
        Get in Touch
      </h2>
      <div>
        <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>

      </div>
      <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"

    title="Only letters, numbers or dash"
  />
</label>
<p className="validator-hint">
  Must be 3 to 30 characters
  <br />containing only letters, numbers or dash
</p>
      <textarea placeholder="Neutral" className="textarea textarea-neutral"></textarea>
      
    </div>
  );
}

export default Contact;
