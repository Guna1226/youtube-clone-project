import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaMicrophone, FaBell, FaPlus } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  
  
 
  

  const getSuggestions = async () => {
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+input);
    const json = await data.json();
    setData(json[1])
    
  }

  useEffect(()=>{

    getSuggestions();

  },[input])

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-gray-900 text-white px-2 py-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            <FaBars size={20} />
          </button>
          <Link to="/" className="flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/YouTube_full-color_icon_%282024%29.svg/1280px-YouTube_full-color_icon_%282024%29.svg.png"
              alt="YouTube"
              className="h-5"
            />
            <span className="text-lg font-semibold hidden sm:inline">
              YouTube
            </span>
          </Link>
        </div>

       {/* Center Search */}
<div className="relative flex-1 flex justify-center">
  {/* Search bar visible from sm+ */}
  <div className="hidden sm:flex items-center bg-[#121212] border border-gray-600 rounded-full overflow-hidden max-w-xl w-full">
    <input
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        setShowSuggestions(true);
      }}
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      type="text"
      placeholder="Search"
      className="flex-1 px-4 py-1 bg-transparent text-sm outline-none text-white"
    />

    <button className="px-4 py-2 bg-[#222] border-l border-gray-600">
      <FaSearch size={16} />
    </button>
  </div>

  {/* Suggestions dropdown */}
  {getSuggestions && input && (
    <div className="absolute top-full  mt-1 bg-[#212121] text-white rounded-lg w-full max-w-xl shadow-lg z-50">
      <ul className="py-2">
        {data &&
          data
            .filter((v) => v.toLowerCase().includes(input.toLowerCase()))
            .map((v, i) => (
              <li
                key={i}
                onClick={() => setInput(v)}
                className="px-4 py-2 hover:bg-[#333] cursor-pointer"
              >
                {v}
              </li>
            ))}
      </ul>
    </div>
  )}

  {/* Mobile search + mic */}
  <input
    type="text"
    placeholder="Search"
    className="flex sm:hidden flex-1 px-3 py-1.5 ml-2 bg-[#222] text-white text-sm rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
  />

  {/* Mic Button */}
  <button className="hidden sm:inline-flex ml-1 p-2 bg-[#222] rounded-full hover:bg-[#333]">
    <FaMicrophone size={16} className="text-white" />
  </button>
</div>

        

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 px-1 py-1 bg-[#222] rounded-full hover:bg-[#333]">
             <span className="hidden sm:inline">
    <FaPlus size={14} />
  </span>
            <span className="hidden sm:inline">Create</span>
          </button>
          <button className="p-1 hover:bg-[#222] rounded-full relative">
            <FaBell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button
            className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden"
            onClick={() => navigate("/")}
          >
            <img
              src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
        
      </header>
       

      {/* Sidebar */}
{isSidebarOpen && (
  <div className="fixed top-0 left-0 w-64 h-full bg-[#0f0f0f] text-white shadow-xl p-4 z-40 transform animate-slideIn overflow-y-auto">
    {/* Close Button */}
    <button
      onClick={() => setIsSidebarOpen(false)}
      className="mb-6 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
    >
      ✖
    </button>

    {/* Menu Sections */}
    <ul className="space-y-2 text-sm">
      {/* First Section */}
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
        <span className="text-lg">🏠</span> Home
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
        <span className="text-lg">🔥</span> Trending
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
        <span className="text-lg">📺</span> Subscriptions
      </li>

      {/* Divider */}
      <hr className="my-4 border-gray-700" />

      {/* Second Section */}
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
        <span className="text-lg">📚</span> Library
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
        <span className="text-lg">🕒</span> History
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
        <span className="text-lg">👍</span> Liked Videos
      </li>

      {/* Divider */}
      <hr className="my-4 border-gray-700" />

      {/* Footer */}
      <p className="text-xs text-gray-400 px-2">
        © 2025 YouTube Clone – Guna
      </p>
    </ul>
  </div>
)}

    </>
  );
}


