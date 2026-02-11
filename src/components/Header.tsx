import React from "react";
import { Menu, Search, Bell, Upload, User, Monitor } from "lucide-react";
import Button from "./Button"; // Твій компонент кнопки (або спрощений варіант нижче)
import Image from "next/image";
import Link from "next/link";
interface HeaderProps {
  toggleSidebar: () => void; // Функція, яка нічого не приймає і нічого не повертає
}
export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a] text-[#ededed] backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 z-50">
      {/* Left: Logo & Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <Link href={"/main"}>
            {/* Logo Placeholder */}
            <Image
              src={"/youvideo-logo-2.png"}
              alt="logo"
              width={124}
              height={124}
            />
          </Link>
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-2xl mx-4 hidden sm:flex">
        <div className="flex w-full group">
          <input
            type="text"
            placeholder="Пошук відео..."
            className="w-full bg-[#121212] border border-[#333] text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
          />
          <button className="bg-[#222] border border-l-0 border-[#333] px-5 rounded-r-full hover:bg-[#333] text-gray-400 hover:text-white transition-colors">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-500 p-[1px] cursor-pointer">
          <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
            <Link href={"/profile"}>
              <User size={16} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
