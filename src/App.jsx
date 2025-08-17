import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Watch from './pages/Watch';
import Movies from './Movies';
import CategoryBar from './components/CategoryBar';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import History from './pages/History';
import YourVideos from './pages/YourVideos';
import WatchLater from './pages/WatchLater';
import Shorts from './pages/Shorts';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">

      {/* Main content */}
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/your-videos" element={<YourVideos />} />
          <Route path="/watch-later" element={<WatchLater />} />
        </Routes>
      </div>
    </div>
  );
}
