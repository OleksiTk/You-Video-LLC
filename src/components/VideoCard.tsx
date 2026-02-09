import React from "react";
import { Play } from "lucide-react";
interface VideoCardProps {
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  image: string;
  isNew?: boolean;
  quality?: string;
}
export default function VideoCard({
  title,
  channel,
  views,
  time,
  duration,
  image,
  isNew,
  quality,
}: VideoCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col gap-2">
      {/* Thumbnail Container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-white/5 group-hover:border-primary/50 transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay Darken on Hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {quality && (
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${
                quality === "4K" ? "bg-purple-600" : "bg-primary/80 text-black"
              }`}
            >
              {quality}
            </span>
          )}
        </div>

        {isNew && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
            New
          </span>
        )}

        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {duration}
        </span>
      </div>

      {/* Info */}
      <div className="flex gap-3 items-start pr-2">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-800 to-primary flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">
          {channel[0]}
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-textMain line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="text-xs text-textMuted mt-1">
            <a href="#" className="hover:text-white transition-colors">
              {channel}
            </a>
          </div>
          <div className="text-xs text-textMuted flex items-center gap-1">
            <span>{views} переглядів</span>
            <span className="w-0.5 h-0.5 bg-textMuted rounded-full"></span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
