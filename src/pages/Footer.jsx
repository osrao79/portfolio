import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const icons = [
  "💻", // Coding
  "🚀", // Launch / Growth
  "🤖", // AI
  "🧠", // Problem Solving
  "💡", // Ideas
  "✨", // Creativity
  "🎯", // Focus
  "🏆", // Achievement
  "🌟", // Excellence
  "📚", // Learning
  "🎓", // Education
  "🛠️", // Building
  "🌐", // Web
  "📱", // Apps
];
const Footer = () => {
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[iconIndex];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#282828] border-t border-[#3c3836] py-8">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Brand */}
        {/* <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-[#fbf1c7] mb-2">
            Onkar Singh Rao
          </h3>

          <p className="text-[#a89984]">Full Stack Developer • AI Enthusiast</p>
        </div> */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-0 border-[#3c3836]">
          <p className="text-sm text-[#a89984] text-center md:text-left">
            © {new Date().getFullYear()} Onkar. All rights reserved.
          </p>

          <div className="relative w-10 h-10 flex items-center justify-center">
            {CurrentIcon}
          </div>

          <button
            onClick={scrollToTop}
            className="
              flex items-center gap-2
              px-4 py-2
              text-sm font-medium
              rounded-md
              border border-[#fe8019]
              text-[#fe8019]
              hover:bg-[#fe8019]
              hover:text-[#1d2021]
              transition-all duration-200
            "
          >
            <FaArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
