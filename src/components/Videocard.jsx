/* ------------------ src/components/VideoCard.jsx ------------------ */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function VideoCard( {video} ){
  console.log(video.snippet);
  
  return (

<div className="bg-[#0f0f0f] rounded-lg overflow-hidden flex flex-col">
      {/* Thumbnail */}
  <img alt='logo' src={video?.snippet?.thumbnails?.medium.url} />
   {/* Video Info */}
      <div className="p-2 flex flex-col flex-grow">
  <h2 className="mt-2 text-sm font-semibold text-white line-clamp-2">{video?.snippet?.title}</h2>
  <p className="text-gray-400 text-sm mt-1">{video?.snippet?.channelTitle}</p>
    <p className="text-gray-400 text-md">{video?.statistics?.viewCount}</p>
    </div>
</div>



    /*<article className="bg-white rounded overflow-hidden shadow">
      <Link to={`/watch/${video.id}`}>
        <div className="w-full aspect-video bg-gray-200 overflow-hidden">
          <img src={video.thumbnail} alt="thumb" className="w-full h-full object-cover"/>
        </div>
      </Link>

      <div className="p-3 flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
        <div className="flex-1">
          <Link to={`/watch/${video.id}`} className="font-medium line-clamp-2 block">{video.title}</Link>
          <div className="text-sm text-gray-500">{video.channel} • {video.views}</div>
        </div>
      </div>
    </article>*/
  )
}