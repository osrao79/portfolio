import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Seprator from "../components/Seprator";

const contacts = [
  {
    title: "GitHub",
    description: "See what I made",
    icon: FaGithub,
    href: "https://github.com/osrao79",
  },
  {
    title: "LinkedIn",
    description: "See what I yap about",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/onkar-singh-rao-a597b0201",
  },
  {
    title: "Email",
    description: "Shoot me a mail",
    icon: BiLogoGmail,
    href: "mailto:osrao79@gmail.com",
  },
];

const ContactCard = ({ title, description, icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="block rounded-xl bg-[#282828] border-2 border-[#3c3836] hover:border-[#fe8019] transition-all duration-200 hover:scale-105"
  >
    <div className="p-6 flex items-center gap-4">
      <Icon size={32} className="text-[#fe8019]" />

      <div>
        <h3 className="text-xl font-semibold text-[#fbf1c7]">{title}</h3>

        <p className="text-sm text-[#a89984]">{description}</p>
      </div>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="bg-[#1d2021]">
      <div className="container max-w-6xl pb-8">
        <Seprator text={"Contact me"} />

        <h2 className="text-4xl md:text-5xl font-bold text-[#fbf1c7] mb-4 animate-fadeInUp">
          Get In Touch
        </h2>

        <p className="text-lg text-[#a89984] mb-12 animate-fadeInUp">
          Hey, I am always open to a good chat. Let's talk.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slideInLeft">
            <NetworkAnimation />
          </div>

          <div className="order-1 lg:order-2 space-y-6 animate-slideInRight">
            {contacts.map((contact) => (
              <ContactCard key={contact.title} {...contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const NetworkAnimation = () => {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <circle id="packet" r="6" fill="#fe8019">
          <animate
            attributeName="opacity"
            values="1;0.4;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </defs>

      {/* Frontend */}
      <g>
        <rect
          x="40"
          y="150"
          width="140"
          height="80"
          rx="10"
          fill="#282828"
          stroke="#83a598"
          strokeWidth="3"
        />
        <text
          x="110"
          y="185"
          textAnchor="middle"
          fill="#fbf1c7"
          fontSize="16"
          fontWeight="bold"
        >
          React/Next.js
        </text>
        <text x="110" y="205" textAnchor="middle" fill="#a89984" fontSize="12">
          Frontend
        </text>
      </g>

      {/* Backend */}
      <g>
        <rect
          x="230"
          y="150"
          width="140"
          height="80"
          rx="10"
          fill="#282828"
          stroke="#b8bb26"
          strokeWidth="3"
        />
        <text
          x="300"
          y="185"
          textAnchor="middle"
          fill="#fbf1c7"
          fontSize="16"
          fontWeight="bold"
        >
          Node.js
        </text>
        <text x="300" y="205" textAnchor="middle" fill="#a89984" fontSize="12">
          API Layer
        </text>
      </g>

      {/* Database */}
      <g>
        <rect
          x="420"
          y="150"
          width="140"
          height="80"
          rx="10"
          fill="#282828"
          stroke="#d3869b"
          strokeWidth="3"
        />
        <text
          x="490"
          y="185"
          textAnchor="middle"
          fill="#fbf1c7"
          fontSize="16"
          fontWeight="bold"
        >
          MongoDB
        </text>
        <text x="490" y="205" textAnchor="middle" fill="#a89984" fontSize="12">
          Database
        </text>
      </g>

      {/* Connections */}
      <line
        x1="180"
        y1="190"
        x2="230"
        y2="190"
        stroke="#504945"
        strokeWidth="3"
      />

      <line
        x1="370"
        y1="190"
        x2="420"
        y2="190"
        stroke="#504945"
        strokeWidth="3"
      />

      {/* Packet 1 */}
      <use href="#packet" x="180" y="190">
        <animate
          attributeName="x"
          from="180"
          to="230"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </use>

      {/* Packet 2 */}
      <use href="#packet" x="370" y="190">
        <animate
          attributeName="x"
          from="370"
          to="420"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </use>

      {/* Developer */}
      <circle cx="300" cy="70" r="35" fill="#fe8019" opacity="0.15" />

      <text
        x="300"
        y="75"
        textAnchor="middle"
        fill="#fe8019"
        fontSize="20"
        fontWeight="bold"
      >
        👨‍💻
      </text>

      <text x="300" y="120" textAnchor="middle" fill="#fbf1c7" fontSize="14">
        Full Stack Developer
      </text>
    </svg>
  );
};
