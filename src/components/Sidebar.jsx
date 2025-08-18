/* ------------------ src/components/Sidebar.jsx ------------------ */
import React from "react";
import {
  FaHome,
  FaHistory,
  FaRegClock,
  FaVideo,
  FaRegPlayCircle,
  FaBolt,
  FaListUl
} from "react-icons/fa";

export default function Sidebar() {
  const items = [
    { name: "Home", icon: <FaHome size={18} /> },
    { name: "Shorts", icon: <FaBolt size={18} /> },
    { name: "Subscriptions", icon: <FaListUl size={18} /> },
    { name: "Library", icon: <FaRegPlayCircle size={18} /> },
    { name: "History", icon: <FaHistory size={18} /> },
    { name: "Your videos", icon: <FaVideo size={18} /> },
    { name: "Watch later", icon: <FaRegClock size={18} /> },
  ];

  return (
    <nav className="fixed top-26 py-2 bg-[#0f0f0f] rounded shadow-sm text-white w-60">
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-700 cursor-pointer"
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

