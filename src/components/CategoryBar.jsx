/* ------------------ src/components/CategoryBar.jsx ------------------ */
import React from "react";

export default function CategoryBar() {
  const categories = [
    "All",
    "Music",
    "Tamil Cinema",
    "Mixes",
    "Mani Ratnam",
    "Aditya Roy Kapur",
    "News",
    "Indian pop music",
    "Aishwarya Rai Bachchan",
    "Rhythms",
    "Live",
    "Stages",
    "Recently uploaded",
  ];

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-[#0f0f0f] overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-1 rounded-lg whitespace-nowrap text-sm ${
            category === "All"
              ? "bg-white text-black"
              : "bg-[#272727] text-white hover:bg-[#3f3f3f]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

