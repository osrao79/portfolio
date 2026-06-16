import React from "react";
import { BiBrain, BiCode, BiServer } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import Seprator from "../components/Seprator";

const About = () => {
  const highlights = [
    {
      title: "Full Stack Development",
      color: "text-[#A855F7] border-[#A855F7]", // AI purple
    },
    {
      title: "React & Next.js",
      color: "text-[#61DAFB] border-[#61DAFB]", // React blue
    },
    {
      title: "Node.js & APIs",
      color: "text-[#b8bb26] border-[#b8bb26]", // Node.js green
    },
    {
      title: "AI-Powered Applications",
      color: "text-[#E34F26] border-[#E34F26]", // Full-stack / Web (HTML5 orange)
    },
  ];

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Building fast, responsive, and user-friendly interfaces with React, Next.js, Tailwind CSS, and modern JavaScript.",
      icon: BiCode,
      color: "#61DAFB", // React Blue
    },
    {
      title: "Backend Development",
      description:
        "Designing scalable REST APIs, authentication systems, and business logic using Node.js, Express, and MongoDB.",
      icon: BiServer,
      color: "#b8bb26", // Node.js Green
    },
    {
      title: "AI Integration",
      description:
        "Integrating LLMs, vector databases, and AI workflows to build intelligent and automated user experiences.",
      icon: BiBrain,
      color: "#FF6B35", // AI / OpenAI-inspired Orange
    },
    {
      title: "Database Design",
      description:
        "Creating efficient schemas, optimizing queries, and managing data across MongoDB and SQL databases.",
      icon: BsDatabase,
      color: "#47A248", // MongoDB Green
    },
  ];

  return (
    <section id="about" className="bg-[#282828] py-24 px-20">
      <Seprator text={"About me"} />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#fbf1c7] mb-4">
          About Me
        </h2>

        <p className="text-lg text-[#a89984] mb-8">
          Here's a quick overview of who I am and what I do.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {highlights.map((item) => (
            <span
              key={item.title}
              className={`px-4 py-2 rounded-md border text-sm font-semibold ${item.color}`}
            >
              {item.title}
            </span>
          ))}
        </div>
        <p className="text-lg text-[#ebdbb2] max-w-3xl leading-relaxed mb-12">
          I'm a Full Stack Developer with 5+ years of experience building modern
          web applications using React, Node.js, Express, and MongoDB. I enjoy
          turning complex business requirements into intuitive user experiences
          and scalable backend systems. Recently, I've been working on
          AI-powered products, integrating LLMs and automation workflows to
          create smarter applications.
        </p>

        <h3 className="text-2xl font-bold text-[#fbf1c7] mb-6">Core Skills</h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="rounded-xl border-2 p-6 hover:scale-105 transition-all duration-300"
                style={{
                  borderColor: skill.color,
                  backgroundColor: `${skill.color}15`,
                }}
              >
                <Icon
                  size={32}
                  style={{ color: skill.color }}
                  className="mb-4"
                />

                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ color: skill.color }}
                >
                  {skill.title}
                </h4>

                <p className="text-sm text-[#a89984]">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
