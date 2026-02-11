"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Plus,
  Play,
  MoreVertical,
  Lock,
  Globe,
  Music,
  Trash2,
  Edit3,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

// --- Мокові дані ---
const MOCK_PLAYLISTS = [
  {
    id: "liked",
    title: "Liked Videos",
    count: 42,
    privacy: "private",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg", // Заглушка
    isSystem: true, // Це системний плейлист
  },
  {
    id: 1,
    title: "Music for Coding / Synthwave",
    count: 128,
    privacy: "public",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    updatedAt: "Updated today",
  },
  {
    id: 2,
    title: "React & Next.js Tutorials",
    count: 15,
    privacy: "public",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    updatedAt: "Updated 2 days ago",
  },
  {
    id: 3,
    title: "Funny Clips 2026",
    count: 8,
    privacy: "private",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    updatedAt: "Updated last week",
  },
  {
    id: 4,
    title: "Gym Motivation",
    count: 24,
    privacy: "public",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    updatedAt: "Updated 1 month ago",
  },
];

export default function PlaylistsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-[#24f4fa] selection:text-black font-sans relative">
      {" "}
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
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                Your Library
              </h1>
              <p className="text-gray-400 text-sm">Playlists createds by you</p>
            </div>

            {/* Фільтр (опціонально) */}
            <div className="flex gap-2">
              <button className="text-xs font-mono px-3 py-1 rounded bg-[#24f4fa] text-black font-bold">
                All
              </button>
              <button className="text-xs font-mono px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 transition">
                Created
              </button>
              <button className="text-xs font-mono px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 transition">
                Saved
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 animate-fade-in">
            {/* 1. Кнопка "Create New Playlist" */}
            <button className="group relative aspect-[4/3] flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-700 hover:border-[#24f4fa] bg-black/20 hover:bg-[#24f4fa]/5 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gray-800 group-hover:bg-[#24f4fa] flex items-center justify-center transition-colors shadow-lg">
                <Plus
                  size={32}
                  className="text-gray-400 group-hover:text-black"
                />
              </div>
              <span className="font-semibold text-gray-400 group-hover:text-[#24f4fa]">
                Create New Playlist
              </span>
            </button>

            {/* 2. Рендер списку плейлистів */}
            {MOCK_PLAYLISTS.map((playlist) => (
              <Link
                key={playlist.id}
                href={`/playlist/${playlist.id}`}
                className="group flex flex-col gap-3 cursor-pointer"
              >
                <div
                  key={playlist.id}
                  className="group flex flex-col gap-3 cursor-pointer"
                >
                  {/* Обкладинка */}
                  <div className="relative aspect-video rounded-xl bg-gray-900 border border-white/5 overflow-hidden shadow-lg group-hover:shadow-[0_0_15px_rgba(36,244,250,0.15)] transition-all duration-300">
                    {/* Якщо це Liked Videos - спеціальний градієнт */}
                    {playlist.isSystem ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                        <Heart
                          size={48}
                          className="text-white fill-white opacity-50"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    ) : (
                      <Image
                        src={playlist.thumbnail}
                        alt={playlist.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    )}

                    {/* Оверлей з кількістю відео (справа внизу) */}
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1.5 border border-white/10">
                      <Music size={12} className="text-[#24f4fa]" />
                      <span className="text-xs font-mono font-bold">
                        {playlist.count}
                      </span>
                    </div>

                    {/* Overlay Play Button (Center) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <div className="w-12 h-12 rounded-full bg-[#24f4fa] flex items-center justify-center shadow-[0_0_20px_#24f4fa] transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Play
                          size={20}
                          className="text-black ml-1 fill-black"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Інфо під обкладинкою */}
                  <div className="flex justify-between items-start px-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base truncate text-white group-hover:text-[#24f4fa] transition-colors">
                        {playlist.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        {playlist.privacy === "private" ? (
                          <span className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded text-gray-400">
                            <Lock size={10} /> Private
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded text-gray-400">
                            <Globe size={10} /> Public
                          </span>
                        )}
                        {playlist.updatedAt && (
                          <>
                            <span>•</span>
                            <span>{playlist.updatedAt}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Меню дій (з'являється при ховері) */}
                    {!playlist.isSystem && (
                      <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
