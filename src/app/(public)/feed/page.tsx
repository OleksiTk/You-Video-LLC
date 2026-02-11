"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MessageSquare,
  Share2,
  ArrowBigUp,
  ArrowBigDown,
  MoreHorizontal,
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

// --- Мокові дані (Розширені для формату Reddit) ---
const CATEGORIES = [
  "All",
  "Discussion",
  "Question",
  "Showcase",
  "Meme",
  "Help",
  "News",
];

const MOCK_POSTS = [
  {
    id: 1,
    author: "Tech_Master",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
    time: "2 hours ago",
    category: "Showcase",
    title: "Чи варто переходити на Next.js 14 для великого e-commerce проекту?",
    subtitle:
      "Я працюю над новим маркетплейсом і думаю про використання App Router. Але чув, що серверні екшени іноді працюють нестабільно. Ось демо того, що я вже зробив, зацініть архітектуру.",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    votes: 342,
    comments: 56,
  },
  {
    id: 2,
    author: "PC_Gods",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hardware",
    time: "5 hours ago",
    category: "News",
    title: "Витік інформації про NVIDIA RTX 5090: Ціна буде космічною?",
    subtitle:
      "Згідно з останніми інсайдами, нова карта споживатиме 600W. Хтось вже готує новий блок живлення? Обговорюємо характеристики у відео.",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    votes: 1205,
    comments: 340,
  },
  {
    id: 3,
    author: "NightCity_Walker",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer",
    time: "1 day ago",
    category: "Discussion",
    title: "Знайшов пасхалку в Cyberpunk 2077, яку ніхто не бачив раніше",
    subtitle:
      "Якщо зайти за текстури в районі Pacifica рівно о 3:00 ночі, можна почути дивний діалог. Записав це на відео. Що думаєте, це натяк на Оріон?",
    thumbnail:
      "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    votes: 890,
    comments: 112,
  },
];

export default function FeedPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

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
          {/* Центруємо контент як стрічку новин */}
          <div className="max-w-3xl mx-auto">
            {/* Категорії */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all border ${
                    activeCategory === category
                      ? "bg-[#24f4fa] text-black border-[#24f4fa]"
                      : "bg-black/40 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Стрічка постів (Reddit Style) */}
            <div className="flex flex-col gap-4 animate-fade-in">
              {MOCK_POSTS.map((post) => (
                <Link href={`/feed/${post.id}`} key={post.id} className="group">
                  <div
                    key={post.id}
                    className="flex bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden hover:border-[#24f4fa]/30 transition-colors cursor-pointer group"
                  >
                    {/* Ліва колонка: Голосування (Desktop only) */}
                    <div className="hidden sm:flex flex-col items-center p-3 gap-1 bg-black/20 w-12 flex-shrink-0 border-r border-white/5">
                      <button className="text-gray-500 hover:text-[#24f4fa] transition-colors">
                        <ArrowBigUp size={28} />
                      </button>
                      <span className="text-sm font-bold text-white">
                        {formatVotes(post.votes)}
                      </span>
                      <button className="text-gray-500 hover:text-red-500 transition-colors">
                        <ArrowBigDown size={28} />
                      </button>
                    </div>

                    {/* Основний контент */}
                    <div className="flex-1 p-3 sm:p-4">
                      {/* Header поста (Автор, час, категорія) */}
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                        <div className="relative w-5 h-5 rounded-full overflow-hidden">
                          <Image src={post.avatar} alt={post.author} fill />
                        </div>
                        <span className="font-bold text-white hover:underline decoration-[#24f4fa]">
                          u/{post.author}
                        </span>
                        <span>•</span>
                        <span>{post.time}</span>
                        {post.category && (
                          <span className="ml-auto bg-white/10 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold text-[#24f4fa]">
                            {post.category}
                          </span>
                        )}
                      </div>

                      {/* Заголовок (Питання/Тема) */}
                      <h2 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#24f4fa] transition-colors">
                        {post.title}
                      </h2>

                      {/* Підзаголовок (Текст/Обговорення) */}
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {post.subtitle}
                      </p>

                      {/* Медіа (Відео/Картинка) */}
                      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/10 mb-3 group-hover:shadow-[0_0_15px_rgba(36,244,250,0.1)] transition-all">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                          <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#24f4fa] border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>

                      {/* Footer (Дії: Коменти, Шер, Опції) */}
                      <div className="flex items-center gap-1 text-gray-400">
                        {/* Mobile Votes (Якщо приховано зліва) */}
                        <div className="flex sm:hidden items-center gap-2 bg-white/5 px-2 py-1 rounded-full mr-2">
                          <ArrowBigUp size={20} />
                          <span className="text-xs font-bold">
                            {formatVotes(post.votes)}
                          </span>
                          <ArrowBigDown size={20} />
                        </div>

                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                          <MessageSquare size={18} />
                          <span className="text-xs font-bold">
                            {post.comments} Comments
                          </span>
                        </button>

                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                          <Share2 size={18} />
                          <span className="text-xs font-bold">Share</span>
                        </button>

                        <button className="ml-auto px-2 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Утиліта для форматування чисел (1200 -> 1.2k)
function formatVotes(num: number) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
}
