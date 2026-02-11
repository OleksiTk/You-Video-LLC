export function TabButton({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 text-lg font-medium transition-all relative ${
        isActive ? "text-[#24f4fa]" : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#24f4fa] shadow-[0_0_10px_#24f4fa]"></span>
      )}
    </button>
  );
}
