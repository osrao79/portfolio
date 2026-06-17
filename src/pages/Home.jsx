import React from "react";
import resumePdf from "../assets/resume.pdf";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { PiReadCvLogo } from "react-icons/pi";

const ActionButton = ({ href, icon: Icon, label, primary = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${"border border-[#fe8019] text-[#fe8019] hover:bg-[#fe8019] hover:text-[#1d2021]"}`}
  >
    <Icon size={18} />
    {label}
  </a>
);

const Home = () => {
  const actions = [
    {
      label: "Resume",
      href: resumePdf,
      icon: PiReadCvLogo,
      primary: true,
      download: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/osrao79",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/onkar-singh-rao-a597b0201",
      icon: RxLinkedinLogo,
    },
  ];

  return (
    <section
      id="home"
      className="bg-[#1d2021] min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full border border-[#84bd22] text-[#84bd22]">
          Available for Work
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-[#fbf1c7] mb-6">
          Hi, I'm <span className="text-[#fe8019]">Onkar Singh Rao</span>
        </h1>

        <p className="text-lg md:text-2xl text-[#a89984] max-w-2xl mx-auto mb-12 leading-relaxed">
          Building products end-to-end—from intuitive user interfaces to
          scalable backend architectures.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {actions.map((action) => (
            <ActionButton
              key={action.label}
              href={action.href}
              icon={action.icon}
              label={action.label}
              primary={action.primary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
