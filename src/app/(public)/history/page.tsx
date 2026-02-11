"use client";

import Image from "next/image";
import { useState } from "react";
import { Trash2, Search, X, MoreVertical, PlayCircle } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// --- Мокові дані ---
const INITIAL_HISTORY = [
  {
    date: "Today",
    videos: [
      {
        id: 1,
        title: "Advanced Next.js Server Actions",
        channel: "Web Dev Cody",
        views: "12k views",
        thumbnail:
          "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
        description:
          "Learn how to use Server Actions in Next.js 14 to build robust forms...",
        progress: 80, // % перегляду
        duration: "14:20",
      },
      {
        id: 2,
        title: "Lo-Fi Beats to Relax/Study to",
        channel: "Lofi Girl",
        views: "55k views",
        thumbnail:
          "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
        description: "Best music for coding and relaxing.",
        progress: 30,
        duration: "Live",
      },
    ],
  },
  {
    date: "Yesterday",
    videos: [
      {
        id: 3,
        title: "Cyberpunk 2077: Secrets you missed",
        channel: "GamingBolt",
        views: "200k views",
        thumbnail:
          "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
        description: "Hidden locations and legendary weapons guide.",
        progress: 100,
        duration: "22:15",
      },
      {
        id: 4,
        title: "Why Rust is the future",
        channel: "Fireship",
        views: "1.5M views",
        thumbnail:
          "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
        description: "Should you learn Rust in 2026? Let's break it down.",
        progress: 10,
        duration: "04:30",
      },
    ],
  },
];

export default function HistoryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [historyData, setHistoryData] = useState(INITIAL_HISTORY);

  // Функція для видалення відео (імітація)
  const removeVideo = (dateGroupIndex: number, videoId: number) => {
    const newData = historyData
      .map((group, index) => {
        if (index === dateGroupIndex) {
          return {
            ...group,
            videos: group.videos.filter((v) => v.id !== videoId),
          };
        }
        return group;
      })
      .filter((group) => group.videos.length > 0); // Видаляємо пусті групи дат
    setHistoryData(newData);
  };

  // Функція очищення всієї історії
  const clearAllHistory = () => {
    if (confirm("Are you sure you want to clear your watch history?")) {
      setHistoryData([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-[#24f4fa] selection:text-black">
      {/* Фон */}
      <div className="bg-mesh fixed inset-0 z-0 pointer-events-none" />

      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex pt-16 relative z-10">
        <Sidebar isOpen={isSidebarOpen} />

        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-60" : "ml-[72px]"
          }`}
        >
          {/* Верхня панель: Заголовок + Пошук + Очищення */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h1 className="text-2xl font-bold text-white">Watch History</h1>

            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Пошук */}
              <div className="relative group flex-1 md:w-80">
                <input
                  type="text"
                  placeholder="Search in watch history"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border-b border-white/20 px-4 py-2 pl-10 focus:outline-none focus:border-[#24f4fa] transition-colors text-sm placeholder-gray-500"
                />
                <Search className="absolute left-0 top-2.5 text-gray-500 w-4 h-4" />
              </div>

              {/* Кнопка очищення */}
              <button
                onClick={clearAllHistory}
                className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm px-4 py-2 hover:bg-red-500/10 rounded-lg"
              >
                <Trash2 size={16} />
                <span className="hidden sm:inline">Clear all history</span>
              </button>
            </div>
          </div>

          {/* Список історії */}
          <div className="max-w-5xl space-y-8 animate-fade-in">
            {historyData.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <p>Your watch history is empty.</p>
              </div>
            ) : (
              historyData.map((group, groupIndex) => (
                <div key={group.date}>
                  <h2 className="text-lg font-bold mb-4 text-[#24f4fa]">
                    {group.date}
                  </h2>

                  <div className="space-y-4">
                    {group.videos.map((video) => (
                      <div
                        key={video.id}
                        className="group flex flex-col sm:flex-row gap-4 bg-black/20 hover:bg-white/5 rounded-xl p-3 transition-colors relative"
                      >
                        {/* Thumbnail Container */}
                        <div className="relative w-full sm:w-[240px] aspect-video flex-shrink-0 rounded-lg overflow-hidden bg-gray-800">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover"
                          />
                          {/* Час тривалості */}
                          <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-mono text-white">
                            {video.duration}
                          </div>

                          {/* Progress Bar (Червона смужка внизу) */}
                          <div className="absolute bottom-0 left-0 h-1 bg-gray-700 w-full">
                            <div
                              className="h-full bg-[#24f4fa]"
                              style={{ width: `${video.progress}%` }}
                            ></div>
                          </div>

                          {/* Overlay Play Icon on Hover */}
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <PlayCircle className="text-white w-10 h-10" />
                          </div>
                        </div>

                        {/* Інформація */}
                        <div className="flex-1 min-w-0 flex flex-col justify-start py-1">
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#24f4fa] transition-colors line-clamp-2 leading-tight cursor-pointer">
                              {video.title}
                            </h3>

                            {/* Кнопка видалення (з'являється при наведенні) */}
                            <button
                              onClick={() => removeVideo(groupIndex, video.id)}
                              className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-red-400"
                              title="Remove from watch history"
                            >
                              <X size={18} />
                            </button>
                          </div>

                          <div className="mt-2 text-sm text-gray-400 space-y-1">
                            <p className="hover:text-white transition-colors cursor-pointer w-fit">
                              {video.channel}
                            </p>
                            <p className="text-xs text-gray-500">
                              {video.views}
                            </p>
                          </div>

                          <p className="mt-2 text-xs text-gray-500 line-clamp-1 sm:line-clamp-2 hidden sm:block">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
