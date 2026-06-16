import React, { useState } from "react";
import Seprator from "../components/Seprator";
import { ProjectModal } from "../components/ProjectModel";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "The HiVE",
      description:
        "A location-based SaaS platform that enables users to monitor and manage cleaning operations across multiple sites. Integrated Google Maps to visualize service locations and provide detailed insights into clients, staff, and service activities.",
      // image: hive,
      status: "Completed",
      technologies: [
        "React",
        "Redux",
        "SASS",
        "Material UI",
        "Google Maps API",
      ],
      fullDescription:
        "The HiVE is a comprehensive SaaS platform designed for facility management companies that operate cleaning services across multiple locations. The platform provides real-time visibility into field operations through an interactive Google Maps integration, allowing supervisors to see exactly where staff are deployed and track service progress as it happens.\n\nThe dashboard offers granular insights — from client satisfaction scores and staff attendance to service completion rates and time-on-site metrics. Managers can drill down into any site to view historical logs, flag issues, and generate reports for clients. Role-based access ensures that field supervisors, back-office staff, and clients each see only what's relevant to them.\n\nA key challenge was designing a data model that could handle hundreds of concurrent sites without performance degradation, and building a notification system that alerts the right person at the right time when a service falls behind schedule.",
      highlights: [
        "Real-time field operations dashboard",
        "Multi-site Google Maps integration",
        "Role-based access for supervisors, staff, and clients",
        "Automated alerts and service status tracking",
      ],
    },
    {
      title: "Isomer AI",
      description:
        "An AI platform for biopharma manufacturers that allows teams to build, deploy, and manage machine learning pipelines through a drag-and-drop workflow interface. Focused on creating intuitive user experiences for complex AI operations.",
      // image: isomer,
      status: "Completed",
      technologies: ["React", "Redux", "React Flow", "Material UI", "SASS"],
      fullDescription:
        "Isomer AI was built to democratize machine learning inside biopharma organizations — enabling data scientists and process engineers to collaborate on ML pipelines without deep infrastructure expertise. The core interaction is a drag-and-drop canvas powered by React Flow, where users assemble pipeline nodes (data ingestion, preprocessing, model training, evaluation) into executable workflows.\n\nEach node is configurable through a side panel with contextual controls, so users can adjust hyperparameters, connect data sources, or swap model architectures without writing code. Completed pipelines can be versioned, scheduled, and monitored from a centralized deployment console.\n\nThe UX challenge was significant: translating highly technical ML concepts into a visual language that non-engineers could act on confidently, while still giving data scientists the depth they need.",
      highlights: [
        "Drag-and-drop ML pipeline builder",
        "Visual node editor with React Flow",
        "Pipeline versioning and deployment console",
        "Designed for non-engineer biopharma teams",
      ],
    },
    {
      title: "LeadGen Automation",
      description:
        "A lead generation and campaign management platform that helps businesses create, manage, and track project leads. Includes campaign creation, lead management, and performance tracking features.",
      // image: leadgen,
      status: "Completed",
      technologies: ["React", "Redux", "Firebase", "Material UI", "SASS"],
      fullDescription:
        "LeadGen Automation is an end-to-end campaign and lead management platform built for sales and marketing teams. Users can create outreach campaigns, define targeting criteria, and track every lead's journey from first contact through to conversion — all in one place.\n\nThe platform includes a campaign builder with a step editor, a lead inbox with filtering and tagging, and a performance dashboard that surfaces metrics like open rates, response rates, and cost-per-lead. Firebase powers real-time data sync, so team members see lead status updates instantly without refreshing.\n\nA notable feature is the duplicate detection engine, which flags leads that match existing contacts based on email domain, phone number, or company name — preventing wasted outreach and keeping the CRM clean.",
      highlights: [
        "Campaign builder with step-by-step editor",
        "Real-time lead tracking via Firebase",
        "Duplicate detection engine",
        "CSV import/export for external CRMs",
      ],
    },
    {
      title: "Roaming Duck",
      description:
        "A travel planning platform that allows users to search and book flights, hotels, and activities while building personalized itineraries. Includes collaborative trip planning, note sharing, and location-based travel recommendations.",
      // image: roamingduck,
      status: "Completed",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "Bootstrap",
        "Google Places API",
      ],
      fullDescription:
        "Roaming Duck is a collaborative travel planning platform designed to eliminate the back-and-forth of group trip coordination. Users can search for flights, hotels, and activities, save their picks to a shared itinerary, and invite co-travelers to vote, comment, and suggest alternatives — all without leaving the app.\n\nThe itinerary builder visualizes the trip day-by-day on an interactive Google Places-powered map, so travelers can see geographical clusters and optimize their routing. Each item in the itinerary has a notes section for tips, confirmation numbers, or packing reminders.\n\nThe Node.js/Express backend handles authentication, itinerary persistence, and a recommendation engine that suggests nearby activities based on the user's current saved locations.",
      highlights: [
        "Collaborative itinerary builder with real-time sync",
        "Google Places-powered map view",
        "Group voting and comment threads",
        "Location-based activity recommendations",
      ],
    },
  ];

  return (
    <section id="projects" className="bg-[#1d2021]">
      <div className="container max-w-6xl">
        <Seprator text={"Projects"} />

        <h2 className="text-4xl md:text-5xl font-bold text-[#fbf1c7] mb-4 animate-fadeInUp">
          Systems I Built
        </h2>
        <p className="text-lg text-[#a89984] mb-12 animate-fadeInUp">
          Here's how I used all the above mentioned skills.
        </p>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="relative bg-[#1d2021] border-2 border-[#3c3836] rounded-xl overflow-hidden hover:border-[#fe8019] transition-all duration-300 flex flex-col space-y-1.5 p-6 pt-10 cursor-pointer group"
              >
                {/* Status badge */}
                <div
                  className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors border-transparent shadow absolute top-4 left-6 text-[#1d2021] font-semibold ${
                    project.status === "Completed"
                      ? "bg-[#84bd22]"
                      : "bg-[#fabd2f]"
                  }`}
                >
                  {project.status}
                </div>

                {/* View details hint */}
                <span className="absolute top-4 right-6 text-xs text-[#665c54] group-hover:text-[#fe8019] transition-colors duration-200 flex items-center gap-1">
                  View details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                )}

                {/* Content */}
                <div className="p-2 bg-[#1d2021]">
                  <h3 className="text-2xl font-bold text-[#fbf1c7] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#a89984] text-base leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold border-[#fe8019] text-[#fe8019] text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal rendered outside the grid */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
