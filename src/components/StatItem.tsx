export function StatItem({
  icon,
  value,
  label,
}: {
  icon: any;
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center md:items-start text-gray-300">
      <div className="flex items-center gap-2 text-[#24f4fa] mb-1">
        {icon}
        <span className="font-bold text-lg">{value}</span>
      </div>
      <span className="text-xs uppercase tracking-wider text-gray-500">
        {label}
      </span>
    </div>
  );
}
