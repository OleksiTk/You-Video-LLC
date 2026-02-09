import React from "react";
import {
  Home,
  Compass,
  Clock,
  ThumbsUp,
  Layers,
  Tv,
  Film,
  Music,
  Gamepad2,
  ChevronRight,
} from "lucide-react";
import MenuItem from "./MenuItem";
interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-surface border-r border-white/5 overflow-y-auto custom-scrollbar transition-all duration-300 z-40 ${
        isOpen ? "w-60" : "w-[72px]"
      }`}
    >
      <div className="flex flex-col gap-1 p-3">
        {/* Navigation Section */}
        <MenuItem
          icon={Home}
          label="Головна"
          isActive={true}
          isCollapsed={!isOpen}
        />
        <MenuItem icon={Compass} label="Feed" isCollapsed={!isOpen} />

        <div className={`my-2 border-t border-white/5 ${!isOpen && "mx-2"}`} />

        {/* Library Section */}
        {!isOpen ? null : (
          <h3 className="px-3 text-[11px] font-bold text-textMuted uppercase mb-1 mt-2">
            Бібліотека
          </h3>
        )}
        <MenuItem icon={Clock} label="Історія" isCollapsed={!isOpen} />
        <MenuItem icon={ThumbsUp} label="Обране" isCollapsed={!isOpen} />
        <MenuItem icon={Layers} label="Плейлисти" isCollapsed={!isOpen} />

        <div className={`my-2 border-t border-white/5 ${!isOpen && "mx-2"}`} />

        {/* Categories Section */}
        {!isOpen ? null : (
          <h3 className="px-3 text-[11px] font-bold text-textMuted uppercase mb-1 mt-2">
            Категорії
          </h3>
        )}
        <MenuItem icon={Gamepad2} label="Ігри" isCollapsed={!isOpen} />
        <MenuItem icon={Tv} label="Аніме" isCollapsed={!isOpen} />
        <MenuItem icon={Film} label="Кіно" isCollapsed={!isOpen} />
        <MenuItem icon={Music} label="Музика" isCollapsed={!isOpen} />
      </div>
    </aside>
  );
}
