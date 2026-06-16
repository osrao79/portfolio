import React from "react";

const Seprator = ({ text }) => {
  return (
    <div className="flex items-center gap-6 mb-12 mx-20">
      <div className="flex-1 h-px bg-[#504945]" />
      <h2 className="font-sora text-xl uppercase text-[#fe8019] font-bold">
        {text}
      </h2>
      <div className="flex-1 h-px bg-[#504945]" />
    </div>
  );
};

export default Seprator;
