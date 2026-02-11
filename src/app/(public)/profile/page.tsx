"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Heart,
  MessageSquare,
  LogOut,
  Settings,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { StatItem } from "@/components/StatItem";
import { TabButton } from "@/components/TabButton";

// Мокові дані (імітуємо те, що прийде з бекенду)
const MOCK_USER = {
  name: "Alex Gamer",
  email: "alex.gamer@gmail.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  role: "User",
  stats: {
    liked: 42,
    comments: 15,
    watched: 128,
  },
};

const LIKED_VIDEOS = [
  {
    id: 1,
    title: "Як зібрати ПК за $500",
    thumbnail: "/api/placeholder/400/225",
    views: "1.2k",
    duration: "12:05",
  },
  {
    id: 2,
    title: "Terraria: Гайд для новачків",
    thumbnail: "/api/placeholder/400/225",
    views: "850",
    duration: "08:30",
  },
  {
    id: 3,
    title: "Огляд CS2 оновлення",
    thumbnail: "/api/placeholder/400/225",
    views: "10k",
    duration: "04:15",
  },
  {
    id: 4,
    title: "React 19: Що нового?",
    thumbnail: "/api/placeholder/400/225",
    views: "5.4k",
    duration: "20:00",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"liked" | "history">("liked");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-[#24f4fa] selection:text-black font-sans relative">
        <div className="flex pt-16">
          <Sidebar isOpen={isSidebarOpen} />

          <main
            className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-[72px]"}`}
          >
            {/* Профіль-картка з градієнтною обводкою та тінню */}
            <div className="max-w-4xl mx-auto mb-12 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#24f4fa]/20 via-transparent to-[#24f4fa]/5 blur-xl -z-10" />
              <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 shadow-[0_0_40px_-10px_rgba(36,244,250,0.15)]">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Аватар з кільцем */}
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#24f4fa]/60 to-[#24f4fa]/20 opacity-70 blur-sm" />
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#24f4fa]/40 p-1 bg-[#0a0a0a] ring-2 ring-white/5">
                      <Image
                        src="https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg"
                        alt={MOCK_USER.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[#24f4fa] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-[#24f4fa]/30">
                      {MOCK_USER.role}
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left space-y-5">
                    <div className="space-y-1">
                      <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                        {MOCK_USER.name}
                      </h1>
                      <p className="text-gray-400 font-mono text-sm tracking-wide">
                        {MOCK_USER.email}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-8">
                      <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-3">
                        <StatItem
                          icon={<Heart size={18} />}
                          value={MOCK_USER.stats.liked}
                          label="Liked"
                        />
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-3">
                        <StatItem
                          icon={<MessageSquare size={18} />}
                          value={MOCK_USER.stats.comments}
                          label="Comments"
                        />
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-3">
                        <StatItem
                          icon={<Clock size={18} />}
                          value={MOCK_USER.stats.watched}
                          label="Watched"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 min-w-[140px]">
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#24f4fa]/30 bg-[#24f4fa]/5 text-[#24f4fa] font-medium">
                      <Settings size={18} />
                      <span>Settings</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/40 font-medium">
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Секція табів і відео */}
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-8 mb-8 border-b-2 border-white/10 pb-3">
                <TabButton
                  isActive={activeTab === "liked"}
                  onClick={() => setActiveTab("liked")}
                  label="Liked Videos"
                />
                <TabButton
                  isActive={activeTab === "history"}
                  onClick={() => setActiveTab("history")}
                  label="Watch History"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {LIKED_VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/70 shadow-lg"
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm font-medium">
                        VIDEO IMG
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/90 px-2.5 py-1 rounded-md text-xs font-mono text-[#24f4fa] border border-[#24f4fa]/20">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-4 border-t border-white/5 bg-black/20">
                      <h3 className="font-semibold text-white truncate">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#24f4fa] shrink-0" />
                        <span>{video.views} views</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
