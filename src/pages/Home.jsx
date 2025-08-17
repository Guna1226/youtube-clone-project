import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/Videocard";
import { Link } from "react-router-dom";
import CategoryBar from "../components/CategoryBar";
import { useDispatch } from "react-redux";
import { addTitle } from "../components/AppSlice";

export default function Home() {
  const [movie, SetMovie] = useState([]);
  const dispatch = useDispatch();

  const getMovie = async () => {
    const API_KEY = "AIzaSyAKlQ3btUjINZvWzIc3maqc0W9xCX4-5ZI";
    let allVideos = [];

    // First request (50 videos)
    const res1 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
    );
    const data1 = await res1.json();
    allVideos = [...data1.items];

    // Second request (next 50 if available)
   if (data1.nextPageToken) {
  const res2 = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&regionCode=IN&&videoCategoryId=10&q=தமிழ்&key=${API_KEY}`
  );
  const data2 = await res2.json();

  // Extract video IDs from search results
  const videoIds = data2.items.map(item => item.id.videoId).join(",");

  // Fetch full details (snippet + statistics) for these IDs
  const res3 = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
  );
  const data3 = await res3.json();

  // Merge into allVideos
  allVideos = [...allVideos, ...data3.items];
}


    SetMovie(allVideos);
    dispatch(addTitle(allVideos)); // Save in Redux
    console.log("Fetched videos:", allVideos.length);
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (!movie) return null;

  return (
    <>
      <CategoryBar />

      <div className="w-full max-w-full overflow-x-hidden bg-[#0f0f0f] text-white min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-2">
    
    {/* Sidebar — hidden on mobile */}
    <aside className="hidden md:block md:col-span-1">
      <Sidebar />
    </aside>

    {/* Main content */}
    <main className="md:col-span-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {movie.map((v) => (
          <Link key={v.id} to={`/watch?v=${v.id}`}>
            <VideoCard video={v} />
          </Link>
        ))}
      </div>
    </main>

  </div>
</div>

    </>
  );
}
