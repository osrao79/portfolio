import React from "react";
import StackIcon from "tech-stack-icons";
import Seprator from "../components/Seprator";

export const Skill = () => {
  const techStack = [
    {
      category: "Frontend",
      color: "#fe8019",
      technologies: [
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs2" },
        { name: "Vue.js", icon: "vuejs" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "SASS", icon: "sass" },
      ],
    },
    {
      category: "Backend",
      color: "#b8bb26",
      technologies: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "expressjs" },
        { name: "Python", icon: "python" },
        { name: "REST APIs", icon: "swagger" },
        { name: "GraphQL", icon: "graphql" },
      ],
    },
    {
      category: "Database",
      color: "#47a248",
      technologies: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "Firebase", icon: "firebase" },
      ],
    },
    {
      category: "Tools",
      color: "#83a598",
      technologies: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Vercel", icon: "vercel" },
        { name: "Postman", icon: "postman" },
        { name: "Figma", icon: "figma" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#1d2021]">
      <Seprator text={"Technology"} />

      <div className="container max-w-6xl">
        <h2 className="text-5xl font-bold text-[#fbf1c7] mb-4">Tech Stack</h2>

        <p className="text-[#a89984] text-lg mb-12">
          Technologies I use to build scalable web applications and AI-powered
          solutions.
        </p>

        <div className="space-y-12">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {group.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="
                      group bg-[#282828]
                      border border-[#3c3836]
                      rounded-xl p-6
                      flex flex-col items-center justify-center
                      gap-3 h-36
                      transition-all duration-300
                      hover:scale-105
                      hover:shadow-lg
                    "
                  >
                    <div className="transition-transform duration-300 group-hover:scale-105">
                      <StackIcon name={tech.icon} className="w-12 h-12" />
                    </div>

                    <span
                      className="font-medium text-center"
                      style={{ color: group.color }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
