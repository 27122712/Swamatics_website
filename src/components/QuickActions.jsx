// src/components/QuickActions.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { TbSwitch2 } from "react-icons/tb";

/**
 * Floating quick-actions used on Home v1 and v2.
 * Props:
 *  - variant: "old" | "new"  (controls the toggle label + target route)
 */
export default function QuickActions({ variant = "old" }) {
  const switchTo = variant === "old" ? "/new" : "/";
  const switchLabel = variant === "old" ? "New Version" : "Old Version";

  const Item = ({ href, label, children, className = "" }) => (
    <a
      href={href}
      target={href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? "_blank" : undefined}
      rel="noreferrer"
      className="group relative"
    >
      <div
        className={
          "w-12 h-12 grid place-items-center rounded-xl shadow-md transition-transform hover:-translate-y-0.5 " +
          className
        }
      >
        {children}
      </div>
      <span
        className="absolute right-full mr-2 top-1/2 -translate-y-1/2 pointer-events-none
                   text-xs font-medium px-2 py-1 rounded-md bg-slate-900/90 text-white
                   opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
      >
        {label}
      </span>
    </a>
  );

  return (
    <div className="fixed right-5 top-40 z-[60]">
      <div className="flex flex-col items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur border border-white/20 shadow-lg">
        <Item href="/brochure.pdf" label="Download" className="bg-[#2D73FF]">
          <HiOutlineDocumentText className="w-6 h-6 text-white" />
        </Item>
        <Item href="tel:+911204082333" label="+91 0120 4082333" className="bg-[#10B981]">
          <FiPhone className="w-6 h-6 text-white" />
        </Item>
        <Item href="mailto:mail@swam.in" label="mail@swam.in" className="bg-[#7E57FF]">
          <FiMail className="w-6 h-6 text-white" />
        </Item>
        <Item href="https://wa.me/917428862195" label="WhatsApp" className="bg-[#22C55E]">
          <FaWhatsapp className="w-6 h-6 text-white" />
        </Item>

        <Link to={switchTo} className="group relative">
          <div className="w-12 h-12 grid place-items-center rounded-xl bg-slate-800 text-white shadow-md transition-transform hover:-translate-y-0.5">
            <TbSwitch2 className="w-6 h-6" />
          </div>
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 text-xs font-medium px-2 py-1 rounded-md bg-slate-900/90 text-white">
            {switchLabel}
          </span>
        </Link>
      </div>
    </div>
  );
}
