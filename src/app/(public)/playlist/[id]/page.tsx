"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Play,
  Shuffle,
  MoreVertical,
  Share2,
  Clock,
  Calendar,
  Lock,
  Globe,
  Trash2,
  ListVideo,
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// --- Мокові дані для конкретного плейлиста ---
const PLAYLIST_INFO = {
  id: "1",
  title: "Coding Music & Synthwave 2026",
  author: "Alex Gamer",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  description:
    "Найкраща підбірка музики для глибокого фокусування, програмування та нічних сесій. Оновлюється щотижня.",
  cover:
    "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
  totalVideos: 42,
  totalDuration: "3 години 15 хвилин",
  updatedAt: "Оновлено вчора",
  privacy: "public", // або 'private'
};

const PLAYLIST_VIDEOS = [
  {
    id: 101,
    title: "Cyberpunk 2077 - Official Soundtrack Mix",
    channel: "CD Projekt Red",
    thumbnail: "https://picsum.photos/seed/cyber/320/180",
    duration: "45:20",
    views: "1.2M",
    added: "2 дні тому",
  },
  {
    id: 102,
    title: "Lofi Girl - Beats to Relax/Study to",
    channel: "Lofi Girl",
    thumbnail: "https://picsum.photos/seed/lofi/320/180",
    duration: "LIVE",
    views: "54k watching",
    added: "1 тиждень тому",
  },
  {
    id: 103,
    title: "Dark Synthwave - Nightcall Drive",
    channel: "RetroWave",
    thumbnail: "https://picsum.photos/seed/synth/320/180",
    duration: "1:05:00",
    views: "890k",
    added: "2 тижні тому",
  },
  {
    id: 104,
    title: "Deep Focus - Ambient Space Music",
    channel: "Space Vibes",
    thumbnail: "https://picsum.photos/seed/space/320/180",
    duration: "3:00:00",
    views: "200k",
    added: "1 місяць тому",
  },
  {
    id: 105,
    title: "Coding in the Rain - ASMR & Jazz",
    channel: "Coffee Shop",
    thumbnail: "https://picsum.photos/seed/rain/320/180",
    duration: "45:00",
    views: "15k",
    added: "2 місяці тому",
  },
];

// Інтерфейс для отримання ID з URL
interface PlaylistPageProps {
  params: {
    id: string;
  };
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-[#24f4fa] selection:text-black">
      {/* Background Mesh */}
      <div className="bg-mesh fixed inset-0 z-0 pointer-events-none" />

      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex pt-16 relative z-10">
        <Sidebar isOpen={isSidebarOpen} />

        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-60" : "ml-[72px]"
          }`}
        >
          {/* --- HERO SECTION (REDDIT SUBREDDIT HEADER STYLE) --- */}
          <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 group">
            {/* Background Blur Image */}
            <Image
              src={PLAYLIST_INFO.cover}
              alt="cover"
              fill
              className="object-cover opacity-30 blur-md group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-end">
              {/* Playlist Cover Art */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 flex-shrink-0">
                <Image
                  src={PLAYLIST_INFO.cover}
                  alt={PLAYLIST_INFO.title}
                  fill
                  className="object-cover"
                />
                {/* Privacy Badge */}
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs flex items-center gap-1">
                  {PLAYLIST_INFO.privacy === "private" ? (
                    <Lock size={12} />
                  ) : (
                    <Globe size={12} />
                  )}
                  <span className="uppercase font-bold">
                    {PLAYLIST_INFO.privacy}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-1 mb-1">
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
                  {PLAYLIST_INFO.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={PLAYLIST_INFO.avatar}
                        alt={PLAYLIST_INFO.author}
                        fill
                      />
                    </div>
                    <span className="font-bold">u/{PLAYLIST_INFO.author}</span>
                  </div>
                  <span>•</span>
                  <span>{PLAYLIST_INFO.totalVideos} videos</span>
                  <span>•</span>
                  <span>{PLAYLIST_INFO.updatedAt}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#24f4fa] text-black px-6 py-3 rounded-full font-bold hover:shadow-[0_0_15px_rgba(36,244,250,0.4)] transition-all">
                  <Play size={20} fill="black" />
                  Play All
                </button>
                <button
                  className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  title="Shuffle"
                >
                  <Shuffle size={20} />
                </button>
                <button
                  className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  title="Share"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* --- CONTENT LAYOUT (REDDIT STYLE COLUMNS) --- */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT: VIDEO FEED */}
            <div className="flex-1 space-y-4">
              {/* Toolbar */}
              <div className="flex justify-between items-center px-2 text-sm text-gray-400 pb-2 border-b border-white/5">
                <span>
                  Sorting by:{" "}
                  <span className="text-white font-bold cursor-pointer">
                    Manual
                  </span>
                </span>
                <span>Filter</span>
              </div>

              {/* Video List */}
              {PLAYLIST_VIDEOS.map((video, index) => (
                <div
                  key={video.id}
                  className="group flex gap-4 bg-neutral-900/40 hover:bg-neutral-800/60 border border-white/5 hover:border-[#24f4fa]/30 p-3 rounded-xl transition-all cursor-pointer"
                >
                  {/* Index Number */}
                  <div className="hidden sm:flex items-center justify-center w-8 text-gray-500 font-mono text-sm">
                    {index + 1}
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-32 sm:w-40 aspect-video rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[10px] font-mono font-bold">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={24} className="text-white fill-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h3 className="text-white font-semibold text-base sm:text-lg truncate group-hover:text-[#24f4fa] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm hover:text-white transition-colors w-fit">
                      {video.channel}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span>{video.views} views</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">
                        Added {video.added}
                      </span>
                    </div>
                  </div>

                  {/* Actions (Hover) */}
                  <div className="flex flex-col justify-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-red-400"
                      title="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white sm:hidden">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: SIDEBAR INFO (Like Reddit Sidebar) */}
            <div className="w-full lg:w-80 space-y-6">
              {/* About Block */}
              <div className="bg-neutral-900/40 border border-white/10 rounded-xl p-5 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-200">About Playlist</h3>
                  <MoreVertical
                    size={16}
                    className="text-gray-500 cursor-pointer"
                  />
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {PLAYLIST_INFO.description}
                </p>

                <div className="space-y-3 text-sm font-medium">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-500 flex items-center gap-2">
                      <ListVideo size={16} /> Total videos
                    </span>
                    <span>{PLAYLIST_INFO.totalVideos}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Clock size={16} /> Duration
                    </span>
                    <span>{PLAYLIST_INFO.totalDuration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Calendar size={16} /> Created
                    </span>
                    <span>Jan 20, 2026</span>
                  </div>
                </div>

                <button className="w-full mt-6 py-2 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors text-sm font-bold">
                  Delete Playlist
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
