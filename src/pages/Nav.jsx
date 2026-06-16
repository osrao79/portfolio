import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (item) => {
    setActive(item);

    const section = document.getElementById(item.toLowerCase());

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#282828]/90 backdrop-blur-md border-b border-[#3c3836]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-[#fbf1c7]">
            Onkar Singh Rao
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#fe8019] ${
                  active === item ? "text-[#fe8019]" : "text-[#ebdbb2]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#ebdbb2]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`text-left transition-colors ${
                  active === item ? "text-[#fe8019]" : "text-[#ebdbb2]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
