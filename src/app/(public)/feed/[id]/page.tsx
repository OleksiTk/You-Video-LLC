"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowBigUp,
  ArrowBigDown,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Flag,
  Send,
  CornerDownRight,
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// --- Mock Data: Дані поста ---
const POST_DATA = {
  id: "1",
  community: "r/nextjs",
  author: "Code_Wizard",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Code",
  time: "4 hours ago",
  title: "Чому Next.js 14 Server Actions це геймчейнджер? (Повний огляд)",
  content: `Всім привіт! Я витратив останні два тижні на переписування свого e-commerce проекту з Pages Router на App Router, використовуючи Server Actions.
  
  Основні переваги, які я помітив:
  1. Зменшення клієнтського бандлу на 40%.
  2. Відсутність необхідності створювати окремі API роути для простих мутацій.
  3. Типізація "з коробки" працює ідеально.
  
  Ось відео з демонстрацією архітектури та замірами швидкодії. Що думаєте про стабільність?`,
  media: "https://picsum.photos/seed/code/800/450", // Відео або картинка
  votes: 1420,
  commentsCount: 234,
  upvoteRatio: "98%",
};

// --- Mock Data: Коментарі ---
const COMMENTS = [
  {
    id: 1,
    author: "Senior_Dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sen",
    time: "2 hours ago",
    text: "Server Actions справді круті, але як щодо обробки помилок? Я стикався з проблемами при валідації форм через Zod на сервері.",
    votes: 156,
    replies: [
      {
        id: 2,
        author: "Code_Wizard",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Code",
        time: "1 hour ago",
        text: "Я використовую `useFormState` для цього. Воно дозволяє повернути об'єкт помилок з сервера і відобразити їх біля інпутів. Працює стабільно.",
        votes: 45,
        isOp: true, // Автор поста
      },
    ],
  },
  {
    id: 3,
    author: "ReactFanboy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fan",
    time: "3 hours ago",
    text: "Чесно кажучи, я досі сиджу на Pages Router. App Router здається занадто складним для простих сайтів.",
    votes: -5,
    replies: [],
  },
];

export default function PostPage({ params }: { params: { id: string } }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [commentText, setCommentText] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-[#24f4fa] selection:text-black">
      <div className="bg-mesh fixed inset-0 z-0 pointer-events-none" />

      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex pt-16 relative z-10">
        <Sidebar isOpen={isSidebarOpen} />

        <main
          className={`flex-1 p-4 md:p-6 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-[72px]"}`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* --- LEFT COLUMN: POST CONTENT --- */}
            <div className="lg:col-span-2">
              {/* Post Container */}
              <div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden mb-6">
                <div className="flex">
                  {/* Vote Column (Desktop) */}
                  <div className="hidden sm:flex flex-col items-center p-3 gap-1 bg-black/20 w-12 flex-shrink-0 border-r border-white/5">
                    <button className="text-gray-400 hover:text-[#24f4fa] hover:bg-white/5 p-1 rounded transition-colors">
                      <ArrowBigUp size={26} />
                    </button>
                    <span className="font-bold text-white">
                      {formatVotes(POST_DATA.votes)}
                    </span>
                    <button className="text-gray-400 hover:text-red-500 hover:bg-white/5 p-1 rounded transition-colors">
                      <ArrowBigDown size={26} />
                    </button>
                  </div>

                  {/* Post Body */}
                  <div className="flex-1 p-4 sm:p-6">
                    {/* Header */}
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden">
                        <Image
                          src={POST_DATA.avatar}
                          alt={POST_DATA.author}
                          fill
                        />
                      </div>
                      <span className="font-bold text-white hover:underline cursor-pointer">
                        {POST_DATA.community}
                      </span>
                      <span>•</span>
                      <span>Posted by u/{POST_DATA.author}</span>
                      <span>•</span>
                      <span>{POST_DATA.time}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {POST_DATA.title}
                    </h1>

                    {/* Text Content */}
                    <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line mb-6">
                      {POST_DATA.content}
                    </div>

                    {/* Media */}
                    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/10 mb-6">
                      <Image
                        src={POST_DATA.media}
                        alt="media"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center gap-2 text-gray-400 border-t border-white/5 pt-4">
                      <div className="flex sm:hidden items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full mr-2">
                        <ArrowBigUp size={20} />
                        <span className="text-xs font-bold">
                          {formatVotes(POST_DATA.votes)}
                        </span>
                        <ArrowBigDown size={20} />
                      </div>

                      <ActionButton
                        icon={<MessageSquare size={18} />}
                        label={`${POST_DATA.commentsCount} Comments`}
                      />
                      <ActionButton icon={<Share2 size={18} />} label="Share" />
                      <ActionButton icon={<Flag size={18} />} label="Report" />

                      <div className="ml-auto text-xs text-gray-500 hidden sm:block">
                        {POST_DATA.upvoteRatio} Upvoted
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- COMMENTS SECTION --- */}
              <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-4 sm:p-6">
                {/* Comment Input */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400 mb-2">
                    Comment as{" "}
                    <span className="text-[#24f4fa]">Guest_User</span>
                  </p>
                  <div className="relative">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="What are your thoughts?"
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-[#24f4fa] min-h-[120px] resize-y"
                    />
                    <div className="absolute bottom-3 right-3 flex gap-2">
                      <button className="px-4 py-1.5 bg-[#24f4fa] text-black font-bold text-xs rounded-full hover:shadow-[0_0_10px_#24f4fa] transition-all">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filter / Sort */}
                <div className="border-b border-white/5 pb-2 mb-6">
                  <span className="text-xs font-bold text-[#24f4fa] uppercase tracking-wide">
                    Top Comments
                  </span>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {COMMENTS.map((comment) => (
                    <div key={comment.id} className="group">
                      <CommentItem comment={comment} />

                      {/* Replies (Nested) */}
                      {comment.replies.length > 0 && (
                        <div className="ml-8 mt-4 pl-4 border-l-2 border-white/5">
                          {comment.replies.map((reply) => (
                            <CommentItem
                              key={reply.id}
                              comment={reply}
                              isReply
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: COMMUNITY INFO --- */}
            <div className="hidden lg:block space-y-6">
              <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-4 sticky top-24">
                <div className="h-12 bg-[#24f4fa]/20 -mx-4 -mt-4 mb-4 rounded-t-xl"></div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-black border-2 border-[#24f4fa] overflow-hidden relative -mt-8">
                    <Image
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Community"
                      alt="comm"
                      fill
                    />
                  </div>
                  <h2 className="font-bold text-lg">{POST_DATA.community}</h2>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  The best place to discuss Next.js, React, and modern web
                  development.
                </p>

                <div className="flex gap-4 text-sm font-bold border-b border-white/5 pb-4 mb-4">
                  <div className="flex flex-col">
                    <span>125k</span>
                    <span className="text-xs text-gray-500 font-normal">
                      Members
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>{" "}
                      420
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      Online
                    </span>
                  </div>
                </div>

                <button className="w-full py-2 bg-[#24f4fa] text-black font-bold rounded-full hover:shadow-[0_0_10px_#24f4fa] transition-all">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// --- Helper Component: Comment Item ---
function CommentItem({
  comment,
  isReply = false,
}: {
  comment: any;
  isReply?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden relative border border-white/10">
          <Image src={comment.avatar} alt={comment.author} fill />
        </div>
        {/* Thread Line */}
        {!isReply && (
          <div className="w-0.5 flex-1 bg-white/5 mt-2 group-last:hidden"></div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-sm text-gray-200">
            {comment.author}
          </span>
          {comment.isOp && (
            <span className="text-[10px] font-bold bg-[#24f4fa] text-black px-1.5 rounded">
              OP
            </span>
          )}
          <span className="text-xs text-gray-500">• {comment.time}</span>
        </div>

        <p className="text-sm text-gray-300 mb-2 leading-relaxed">
          {comment.text}
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-500">
            <button className="hover:text-[#24f4fa]">
              <ArrowBigUp size={18} />
            </button>
            <span className="text-xs font-bold">{comment.votes}</span>
            <button className="hover:text-red-500">
              <ArrowBigDown size={18} />
            </button>
          </div>
          <button className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-white transition-colors">
            <MessageSquare size={14} /> Reply
          </button>
          <button className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-white transition-colors">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: any; label: string }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
      {icon}
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}

function formatVotes(num: number) {
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num;
}
