"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import React, { useState } from "react";

const TAGS = [
  "Все",
  "Аніме",
  "Ігри",
  "Музика",
  "Live",
  "Програмування",
  "React",
  "AI",
  "Lo-Fi",
  "Новини",
];

// Mock data based on your screenshots
const VIDEOS = [
  {
    id: 1,
    title: "Tumbleweed wild west - Epic Moments",
    channel: "GameHub",
    views: "12K",
    time: "2 години тому",
    duration: "1:15",
    isNew: true,
    quality: "SD",
    image: "https://picsum.photos/seed/1/320/180",
  },
  {
    id: 2,
    title: "GTA San Andreas - Retrospective 2026",
    channel: "RetroGamer",
    views: "54K",
    time: "1 день тому",
    duration: "12:45",
    isNew: true,
    quality: "1080p",
    image: "https://picsum.photos/seed/2/320/180",
  },
  {
    id: 3,
    title: "Топ 10 крутейших ігор безплатно",
    channel: "TopTen",
    views: "1.2M",
    time: "3 дні тому",
    duration: "8:20",
    isNew: false,
    quality: "4K",
    image: "https://picsum.photos/seed/3/320/180",
  },
  {
    id: 4,
    title: "Казино FULLHD 60FPS Stream Highlights",
    channel: "StreamerX",
    views: "5K",
    time: "5 годин тому",
    duration: "3:33",
    isNew: true,
    quality: "720p",
    image: "https://picsum.photos/seed/4/320/180",
  },
  {
    id: 5,
    title: "React 19 Tutorial for Beginners",
    channel: "CodeMasters",
    views: "102K",
    time: "1 тиждень тому",
    duration: "45:10",
    isNew: false,
    quality: "4K",
    image: "https://picsum.photos/seed/5/320/180",
  },
  {
    id: 6,
    title: "Building a YouTube Clone with Tailwind",
    channel: "DevTips",
    views: "8K",
    time: "2 дні тому",
    duration: "22:15",
    isNew: true,
    quality: "1080p",
    image: "https://picsum.photos/seed/6/320/180",
  },
];

export default function YouviMain() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTag, setActiveTag] = useState("Все");

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      {/* Header */}
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Content Area */}
        <main
          className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-[72px]"}`}
        >
          {/* Banner Section (Anime Style) */}
          <div className="w-full h-48 sm:h-64 rounded-2xl relative overflow-hidden mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#16213e] to-[#d94b88]/30"></div>
            {/* Decorative Background Elements */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://picsum.photos/seed/anime/800/400')] bg-cover bg-center opacity-40 mix-blend-overlay mask-image-gradient"></div>

            <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12">
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 drop-shadow-lg">
                YOUVI <span className="text-primary">PREMIUM</span>
              </h1>
              <p className="text-gray-300 max-w-lg text-sm sm:text-base mb-6 line-clamp-2">
                Дивись відео, шукай контент, створюй плейлисти. Найкраща
                платформа для аніме та ігор.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-primary text-black font-bold rounded-full hover:shadow-[0_0_15px_rgba(36,244,250,0.5)] transition-all transform hover:-translate-y-0.5">
                  Дивитись
                </button>
                <button className="px-6 py-2 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                  Детальніше
                </button>
              </div>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="sticky top-16 z-30 bg-background/95 backdrop-blur py-2 mb-6 -mx-2 px-2 border-b border-white/5">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTag === tag
                      ? "bg-primary text-black font-bold"
                      : "bg-surface border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Свіжі відео
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-8 gap-x-4">
              {VIDEOS.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
