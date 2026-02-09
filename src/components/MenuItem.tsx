import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon; // Тип для компонента іконки
  label: string;
  isActive?: boolean; // ? означає, що це необов'язково
  isCollapsed: boolean;
}
const MenuItem = ({
  icon: Icon,
  label,
  isActive,
  isCollapsed,
}: MenuItemProps) => (
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
);
export default MenuItem;
