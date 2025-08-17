import React from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { HandThumbUpIcon, ShareIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import avatar from "../assets/avatar1.jpg";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  // Get state from Redux
  const titlee = useSelector((state) => state?.youtube || {});

  // Ensure array format
  const videos = Array.isArray(titlee.title) ? titlee.title : [];

  // Find current video
  const currentVideo = videos.find((v) => v.id === id);
  if (!currentVideo) {
    return <p className="text-center mt-10">Video not found</p>;
  }

  return (
    <div className="flex gap-4 px-8 bg-[#0f0f0f] text-white">
      {/* Left - Main Video Area */}
      <div className="w-[70%] py-8">
        {currentVideo ? (
          <>
            {/* Video Player */}
            <iframe
              className="rounded-lg"
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${currentVideo.id}`}
              title={currentVideo.snippet?.title}
              frameBorder="0"
              allowFullScreen
            />

            {/* Title */}
            <h1 className="text-xl font-bold mt-4">
              {currentVideo.snippet?.title}
            </h1>

            {/* Channel Info + Actions */}
            <div className="flex justify-between items-center mt-3 flex-wrap gap-3">
              <p className="text-gray-400">{currentVideo.snippet?.channelTitle}</p>
              <div className="flex gap-3">
                <button className="flex items-center gap-1 bg-[#272727] hover:bg-[#3f3f3f] px-3 py-1 rounded-full">
                 <HandThumbUpIcon className="w-5 h-5" />37K
                </button>
                <button className="flex items-center gap-1 bg-[#272727] hover:bg-[#3f3f3f] px-3 py-1 rounded-full">
                  <ShareIcon className="w-5 h-5" /> Share
                </button>
                <button className="flex items-center gap-1 bg-[#272727] hover:bg-[#3f3f3f] px-3 py-1 rounded-full">
                  <ArrowDownTrayIcon className="w-5 h-5" /> Download
                </button>
              </div>
            </div>

            {/* Views & Description */}
            <div className="bg-[#272727] rounded-lg p-3 mt-4">
              <p className="text-sm font-semibold">
                8.7M views • 4 months ago
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Watch this Song "{currentVideo.snippet?.description}".
              </p>
            </div>

            {/* Comments Section */}
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-3">{currentVideo.statistics.commentCount} Comments</h2>
              <div className="flex gap-3 items-start mb-5">
                <img
                  src="/assets/avatar.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="bg-transparent border-b border-gray-500 outline-none w-full p-1"
                />
              </div>

              {/* Example Comment */}
              <div className="flex gap-3 mb-4">
                <img
                  src="/assets/avatar1.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">s.prabakaran • 2 months ago</p>
                  <p className="text-sm mt-1">
                   2025 யார் கேக்கறீங்க ❤🎉
                  </p>
                  <button className="text-xs text-gray-400 mt-1 hover:underline">Reply</button>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <img
                  src="/assets/avatar1.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">s.prabakaran • 2 months ago</p>
                  <p className="text-sm mt-1">
                    Awesome 
                  </p>
                  <button className="text-xs text-gray-400 mt-1 hover:underline">Reply</button>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <img
                  src="/assets/avatar1.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">s.prabakaran • 2 months ago</p>
                  <p className="text-sm mt-1">
                    Nice content
                  </p>
                  <button className="text-xs text-gray-400 mt-1 hover:underline">Reply</button>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <img
                  src="/assets/avatar1.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">s.prabakaran • 2 months ago</p>
                  <p className="text-sm mt-1">
                    இந்தப் பாடலை கேட்டும்போது ஒரு பிரியமான நினைவு...
                  </p>
                  <button className="text-xs text-gray-400 mt-1 hover:underline">Reply</button>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <img
                  src="/assets/avatar1.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">s.prabakaran • 2 months ago</p>
                  <p className="text-sm mt-1">
                    2025 லும் இந்த பாடலை தேடி வந்த வங்க யாரும் இருக்கீங்களா.😍😍
                  </p>
                  <button className="text-xs text-gray-400 mt-1 hover:underline">Reply</button>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <img
                  src="/assets/avatar1.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">s.prabakaran • 2 months ago</p>
                  <p className="text-sm mt-1">
                    2023 and still ARR is rocking our hearts and ruling our homes ❤❤
                  </p>
                  <button className="text-xs text-gray-400 mt-1 hover:underline">Reply</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading video...</p>
        )}
      </div>

      {/* Right - Suggested Videos */}
      <div className="w-[30%] flex flex-col gap-3 py-8">
        {videos
          .filter((v) => v.id !== id)
          .map((video) => (
            
            <div key={video.id} className="flex gap-2 cursor-pointer hover:bg-[#1c1c1c] p-2 rounded-lg">
              <img
                src={video.snippet?.thumbnails?.medium?.url}
                alt={video.snippet?.title}
                className="w-40 h-24 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-semibold line-clamp-2">
                  {video.snippet?.title}
                </p>
                <p className="text-xs text-gray-400">
                  {video.snippet?.channelTitle}
                </p>
                <p className="text-xs text-gray-500">
                  {video.snippet?.publishedAt}
                </p>
              </div>
            </div>
      
          ))}
      </div>
    </div>
  );
};

export default Watch;

