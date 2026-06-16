import React from "react";
import { BiBriefcase } from "react-icons/bi";
import Seprator from "../components/Seprator";

const experiences = [
  {
    id: 2,
    role: "Software Engineer",
    company: "Classic Informatics",
    duration: "April 2021 - Present",
    achievements: [
      "Developed and maintained scalable web applications for client and internal projects using JavaScript, React, Node.js, Express, and MongoDB.",
      "Built performant, reusable, and maintainable frontend and backend solutions, ensuring high-quality user experiences and application reliability.",
      "Collaborated with cross-functional teams throughout the software development lifecycle, from requirements gathering and implementation to deployment and support.",
    ],
  },
  {
    id: 1,
    role: "Intern",
    company: "Newton School",
    duration: "August 2020 - April 2021",
    achievements: [
      "Completed an intensive 9-month Software Development Internship focused on full-stack web development using modern frontend and backend technologies.",
      "Built hands-on experience in designing and developing web applications while strengthening problem-solving and software engineering fundamentals.",
    ],
  },
];

const ExperienceCard = ({ experience }) => (
  <div
    className="rounded-xl bg-[#1d2021] border-2 border-[#3c3836] hover:border-[#fe8019] transition-all duration-200 animate-fadeInUp relative"
    style={{ animationDelay: experience.delay }}
  >
    <div className="absolute top-6 right-6 text-sm text-[#a89984] font-medium">
      {experience.duration}
    </div>

    <div className="p-6">
      <div className="flex items-start gap-4">
        <div className="bg-[#fe8019] p-3 rounded-lg">
          <BiBriefcase className="text-[#1d2021]" size={24} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#fbf1c7] mb-1">
            {experience.role}
          </h3>
          <p className="text-[#fe8019] text-lg font-semibold">
            {experience.company}
          </p>
        </div>
      </div>
    </div>

    <div className="px-6 pb-6">
      <ul className="space-y-3">
        {experience.achievements.map((item, index) => (
          <li key={index} className="flex gap-3 text-[#ebdbb2]">
            <span className="text-[#fe8019] mt-1">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-[#282828] py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <Seprator text={"Experience"} />

        <h2 className="text-4xl md:text-5xl font-bold text-[#fbf1c7] mb-4 animate-fadeInUp">
          Professional Journey
        </h2>

        <p className="text-lg text-[#a89984] mb-12 animate-fadeInUp">
          Here's how my skills have created value across different roles.
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${index}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
