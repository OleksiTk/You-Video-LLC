"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  MoreHorizontal,
  Bell,
  Check,
  Send,
  MoreVertical,
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// --- Mock Data: Поточне відео ---
const CURRENT_VIDEO = {
  id: "1",
  title: "Створюємо клон YouTube на Next.js 14 за 1 годину (Full Course)",
  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // Тестове відео
  poster: "https://picsum.photos/seed/video_poster/1280/720",
  views: "125,432",
  date: "2 дні тому",
  description: `У цьому відео ми розберемо архітектуру сучасного відеохостингу. 
  
  Ми використаємо:
  - Next.js 14 (App Router)
  - Tailwind CSS для стилізації
  - Lucide React для ікон
  - Node.js бекенд
  
  Таймкоди:
  00:00 - Вступ
  05:30 - Налаштування проекту
  15:45 - Створення плеєра
  `,
  channel: {
    name: "Code_Master",
    subscribers: "1.2M",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Master",
    isSubscribed: false,
  },
  stats: {
    likes: "12K",
    dislikes: "0",
  },
};

// --- Mock Data: Рекомендації (Sidebar) ---
const RELATED_VIDEOS = [
  {
    id: 2,
    title: "React 19: Все що треба знати",
    channel: "Frontend Daily",
    views: "54K",
    time: "5 годин тому",
    img: "https://picsum.photos/seed/react/320/180",
  },
  {
    id: 3,
    title: "NVIDIA RTX 5090 Test",
    channel: "Hardware Unboxed",
    views: "1.5M",
    time: "1 день тому",
    img: "https://picsum.photos/seed/gpu/320/180",
  },
  {
    id: 4,
    title: "Lo-Fi Beats 24/7",
    channel: "Lofi Girl",
    views: "Live",
    time: "Live",
    img: "https://picsum.photos/seed/lofi/320/180",
  },
  {
    id: 5,
    title: "Як вивчити Python?",
    channel: "IT Beard",
    views: "200K",
    time: "1 тиждень тому",
    img: "https://picsum.photos/seed/py/320/180",
  },
  {
    id: 6,
    title: "Cyberpunk 2077 Secrets",
    channel: "GamerHub",
    views: "89K",
    time: "3 дні тому",
    img: "https://picsum.photos/seed/cyber/320/180",
  },
  {
    id: 7,
    title: "Топ 10 ігор 2026",
    channel: "IGN",
    views: "500K",
    time: "2 тижні тому",
    img: "https://picsum.photos/seed/ign/320/180",
  },
];

// --- Mock Data: Коментарі ---
const COMMENTS = [
  {
    id: 1,
    user: "Alex_Dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    text: "Дуже крутий туторіал! Дякую за пояснення App Router.",
    date: "1 годину тому",
    likes: 45,
  },
  {
    id: 2,
    user: "React_Fan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fan",
    text: "Чекаю наступну частину про бекенд!",
    date: "3 години тому",
    likes: 12,
  },
  {
    id: 3,
    user: "Guest123",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest",
    text: "А який шрифт ти використовуєш в VS Code?",
    date: "5 годин тому",
    likes: 2,
  },
];

export default function WatchPage({ params }: { params: { id: string } }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // На сторінці перегляду сайдбар зазвичай згорнутий
  const [isSubscribed, setIsSubscribed] = useState(
    CURRENT_VIDEO.channel.isSubscribed,
  );
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-[#24f4fa] selection:text-black">
      {/* Background Mesh */}
      <div className="bg-mesh fixed inset-0 z-0 pointer-events-none" />

      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex pt-16 relative z-10">
        {/* Sidebar тут має бути поверх контенту або зсувати його, залежно від вподобань. 
            На YouTube він зазвичай "Over" режим в watch page, але тут залишимо як є */}
        <Sidebar isOpen={isSidebarOpen} />

        <main
          className={`flex-1 p-4 md:p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-60" : "ml-[0] md:ml-[72px]"
            /* На watch page відступ менший, якщо сайдбар закритий */
          }`}
        >
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* --- LEFT COLUMN: PLAYER & INFO (Takes 3/4 width on large screens) --- */}
            <div className="lg:col-span-2 xl:col-span-3">
              {/* 1. VIDEO PLAYER CONTAINER */}
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(36,244,250,0.1)] border border-white/10 mb-4 group">
                <video
                  src={CURRENT_VIDEO.src}
                  poster={CURRENT_VIDEO.poster}
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* 2. TITLE */}
              <h1 className="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2">
                {CURRENT_VIDEO.title}
              </h1>

              {/* 3. CHANNEL & ACTIONS BAR */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                {/* Channel Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={CURRENT_VIDEO.channel.avatar}
                      alt="avatar"
                      fill
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-base hover:text-[#24f4fa] cursor-pointer transition-colors">
                      {CURRENT_VIDEO.channel.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {CURRENT_VIDEO.channel.subscribers} subscribers
                    </span>
                  </div>

                  {/* Subscribe Button */}
                  <button
                    onClick={() => setIsSubscribed(!isSubscribed)}
                    className={`ml-4 px-4 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                      isSubscribed
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-[#24f4fa] text-black hover:shadow-[0_0_15px_#24f4fa]"
                    }`}
                  >
                    {isSubscribed ? (
                      <>
                        {" "}
                        <Check size={16} /> Subscribed{" "}
                        <Bell size={16} className="ml-1" />{" "}
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>

                {/* Actions (Like, Share, etc) */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                  {/* Like/Dislike Group */}
                  <div className="flex items-center bg-white/10 rounded-full overflow-hidden">
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-white/20 border-r border-white/10 transition-colors">
                      <ThumbsUp size={20} />
                      <span className="font-bold text-sm">
                        {CURRENT_VIDEO.stats.likes}
                      </span>
                    </button>
                    <button className="px-4 py-2 hover:bg-white/20 transition-colors">
                      <ThumbsDown size={20} />
                    </button>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-sm font-bold">
                    <Share2 size={20} /> Share
                  </button>

                  <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>

              {/* 4. DESCRIPTION BOX */}
              <div
                className={`bg-white/5 rounded-xl p-3 text-sm cursor-pointer hover:bg-white/10 transition-colors mb-6 ${showFullDesc ? "" : "max-h-28 overflow-hidden"}`}
                onClick={() => setShowFullDesc(!showFullDesc)}
              >
                <div className="font-bold mb-2 flex gap-2 text-white">
                  <span>{CURRENT_VIDEO.views} views</span>
                  <span>{CURRENT_VIDEO.date}</span>
                </div>
                <p className="whitespace-pre-line text-gray-300 leading-relaxed">
                  {CURRENT_VIDEO.description}
                </p>
                <button className="mt-2 text-[#24f4fa] font-bold text-xs uppercase">
                  {showFullDesc ? "Show Less" : "...more"}
                </button>
              </div>

              {/* 5. COMMENTS SECTION */}
              <div className="mt-6">
                <div className="flex items-center gap-6 mb-6">
                  <h3 className="text-xl font-bold">24 Comments</h3>
                  <span className="text-sm text-gray-400 cursor-pointer flex items-center gap-1 hover:text-white">
                    Sort by <MoreHorizontal size={16} />
                  </span>
                </div>

                {/* Add Comment */}
                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Me"
                      alt="me"
                      fill
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-[#24f4fa] transition-colors"
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button className="text-sm font-bold text-gray-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10">
                        Cancel
                      </button>
                      <button className="text-sm font-bold bg-[#24f4fa] text-black px-4 py-1.5 rounded-full hover:bg-[#24f4fa]/80">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {COMMENTS.map((comment) => (
                    <div key={comment.id} className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0 border border-white/10">
                        <Image src={comment.avatar} alt={comment.user} fill />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm hover:text-[#24f4fa] cursor-pointer transition-colors">
                            {comment.user}
                          </span>
                          <span className="text-xs text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">
                          {comment.text}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <button className="flex items-center gap-1 hover:text-white">
                            <ThumbsUp size={14} /> {comment.likes}
                          </button>
                          <button className="hover:text-white">
                            <ThumbsDown size={14} />
                          </button>
                          <button className="font-bold hover:text-white hover:bg-white/10 px-2 py-1 rounded-full">
                            Reply
                          </button>
                        </div>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-full h-fit transition-all text-gray-400">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: UP NEXT (RECOMMENDATIONS) --- */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Up Next</h3>
                <button className="text-xs text-[#24f4fa] border border-[#24f4fa] px-2 py-1 rounded hover:bg-[#24f4fa]/10 transition-colors">
                  Autoplay
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {RELATED_VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    className="flex gap-2 cursor-pointer group"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-white/5 group-hover:border-[#24f4fa] transition-all">
                      <Image
                        src={video.img}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-[10px] font-mono">
                        12:04
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-1 min-w-0">
                      <h4 className="font-bold text-sm text-white leading-tight line-clamp-2 group-hover:text-[#24f4fa] transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-400 hover:text-white">
                        {video.channel}
                      </p>
                      <div className="text-[10px] text-gray-500">
                        {video.views} views • {video.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
