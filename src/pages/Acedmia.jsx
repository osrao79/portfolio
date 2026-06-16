import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Seprator from "../components/Seprator";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech.)",
    specialization: "Electrical Engineering",
    institution: "Mewar University",
    location: "Chittorgarh, Rajasthan",
    duration: "2013 - 2017",
  },
  {
    degree: "Full Stack Development Internship",
    specialization: "MERN Stack Development",
    institution: "Newton School",
    location: "Bengaluru, Karnataka",
    duration: "2020 - 2021",
  },
];

const Academia = () => {
  return (
    <section id="education" className="bg-[#282828] py-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <Seprator text={"Education"} />

        <h2 className="text-4xl md:text-5xl font-bold text-[#fbf1c7] mb-4 animate-fadeInUp">
          Academia
        </h2>

        <p className="text-lg text-[#a89984] mb-12 animate-fadeInUp">
          My academic background and the foundations that shaped my journey into
          software development.
        </p>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className="
                relative
                rounded-xl
                bg-[#1d2021]
                border-2
                border-[#3c3836]
                hover:border-[#fe8019]
                transition-all
                duration-300
                hover:-translate-y-1
                animate-fadeInUp
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Duration */}
              <div className="absolute top-6 right-6 text-sm font-medium text-[#a89984]">
                {item.duration}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fe8019] p-3 rounded-lg shrink-0">
                    <FaGraduationCap size={24} className="text-[#1d2021]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#fbf1c7] mb-1">
                      {item.degree}
                    </h3>

                    <p className="text-[#a89984] mb-3">{item.specialization}</p>

                    <p className="text-lg font-semibold text-[#fe8019]">
                      {item.institution}
                    </p>

                    <p className="text-sm text-[#a89984]">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academia;
