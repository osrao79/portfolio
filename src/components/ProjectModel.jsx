import React, { useEffect } from "react";

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 bg-[#282828] border border-[#504945] rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl px-1 py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Fixed header ── */}
        <div className="shrink-0 flex items-start justify-between gap-4 px-8 py-6 border-b border-[#3c3836]">
          <div>
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold text-[#1d2021] mb-2 ${
                project.status === "Completed" ? "bg-[#84bd22]" : "bg-[#fabd2f]"
              }`}
            >
              {project.status}
            </span>
            <h2 className="text-2xl font-bold text-[#fbf1c7]">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 rounded-full bg-[#3c3836] hover:bg-[#504945] text-[#a89984] hover:text-[#fbf1c7] transition-colors flex items-center justify-center mt-1"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto px-8 py-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#fe8019] mb-3">
              Overview
            </h3>
            {project.fullDescription.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[#a89984] text-sm leading-relaxed mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#fe8019] mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-[#bdae93]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fe8019] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#fe8019] mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-[#fe8019] px-2.5 py-0.5 text-[#fe8019] text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
