import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isCollapsed: boolean;
  link: string;
}
const MenuItem = ({
  icon: Icon,
  label,
  isActive,
  isCollapsed,
  link,
}: MenuItemProps) => (
  <Link href={link}>
    <div
      className={`flex items-center gap-4 px-3 py-2.5 rounded-lg cursor-pointer transition-all group ${
        isActive
          ? "bg-primary/10 text-primary"
          : "text-textMuted hover:bg-white/5 hover:text-white"
      } ${isCollapsed ? "justify-center" : ""}`}
    >
      <Icon
        size={20}
        className={`flex-shrink-0 transition-colors ${isActive ? "stroke-primary" : "group-hover:stroke-white"}`}
      />
      {!isCollapsed && (
        <span className="text-sm font-medium whitespace-nowrap">{label}</span>
      )}
    </div>
  </Link>
);
export default MenuItem;
