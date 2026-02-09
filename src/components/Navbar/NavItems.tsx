import React from "react";

interface NavItemProps {
  label: string; // або React.ReactNode, якщо там може бути JSX
  active?: boolean;
}

const NavItems = ({ label, active = false }: NavItemProps) => (
  <div
    className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active
        ? "bg-[#24f4fa]/10 text-[#24f4fa]"
        : "hover:bg-white/5 text-gray-400"
    }`}
  >
    <div
      className={`w-5 h-5 rounded ${active ? "bg-[#24f4fa]" : "bg-gray-600"}`}
    ></div>
    <span className="font-medium">{label}</span>
  </div>
);

export default NavItems;
