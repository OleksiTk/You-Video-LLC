import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <aside className="w-64 border-r border-white/5 flex flex-col p-6 gap-8 hidden lg:flex">
      <div className="text-2xl font-black text-[#24f4fa] tracking-tighter">
        YOUVI
      </div>

      <nav className="flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 px-4">
          Навігація
        </p>
        <NavItems label="Головна" active />
        <NavItems label="Тренди" />
        <NavItems label="Підписки" />
      </nav>

      <nav className="flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 px-4">
          Бібліотека
        </p>
        <NavItems label="Історія" />
        <NavItems label="Обране" />
      </nav>
    </aside>
  );
}
