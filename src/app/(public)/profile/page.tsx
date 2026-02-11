"use client";

import Image from "next/image";
import { useState } from "react";
import {
  User,
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
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", // Випадковий аватар
  role: "User", // або "Admin"
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
      <div className="min-h-screen relative overflow-hidden text-[#ededed] font-sans selection:bg-[#24f4fa] selection:text-black">
        <div className="flex pt-16">
          <Sidebar isOpen={isSidebarOpen} />

          <main
            className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-[72px]"}`}
          >
            <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border  rounded-2xl p-8 mb-12 ">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="absolute -inset-1  rounded-full opacity-40 blur group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2  p-1 bg-black">
                    <Image
                      src={
                        "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg"
                      }
                      alt={MOCK_USER.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 bg-[#24f4fa] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {MOCK_USER.role}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold color-text mb-1">
                      {MOCK_USER.name}
                    </h1>
                    <p className="text-gray-400 font-mono text-sm">
                      {MOCK_USER.email}
                    </p>
                  </div>

                  <div className="flex justify-center md:justify-start gap-6">
                    <StatItem
                      icon={<Heart size={18} />}
                      value={MOCK_USER.stats.liked}
                      label="Liked"
                    />
                    <StatItem
                      icon={<MessageSquare size={18} />}
                      value={MOCK_USER.stats.comments}
                      label="Comments"
                    />
                    <StatItem
                      icon={<Clock size={18} />}
                      value={MOCK_USER.stats.watched}
                      label="Watched"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-w-[140px]">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-700  hover:text-[#24f4fa] transition-colors  bg-black/50">
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500 transition-all">
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex gap-8 mb-8 border-b border-white/10 pb-2">
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
                    className="group relative bg-neutral-900/50 rounded-xl overflow-hidden border border-white/5  transition-all duration-300 "
                  >
                    <div className="relative aspect-video bg-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        VIDEO IMG
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-mono text-[#24f4fa]">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-white group-hover:text-[#24f4fa] transition-colors truncate">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#24f4fa]"></span>
                        {video.views} views
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
