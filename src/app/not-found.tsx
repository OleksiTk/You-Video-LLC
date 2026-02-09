import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="text-center space-y-8 max-w-md w-full">
        <div className="flex  justify-center mb-8">
          <video
            src="/logo.mp4"
            autoPlay
            loop
            muted // Обов'язково для автоплею в Chrome/Safari
            playsInline // Обов'язково для iOS
            className="h-26 w-26" // Tailwind класи
          />
        </div>

        <h1 className="text-8xl font-bold tracking-tight animate-fade-in-up color-text">
          404
        </h1>
        <p className="text-xl text-gray-300 animate-fade-in-up delay-100">
          Ця сторінка не існує. Можливо, ви заблукали у цифровій чорній дірі?
        </p>
        <p className="text-md text-gray-400 animate-fade-in-up delay-200">
          На жаль, ми не знайшли те, що ви шукали.
        </p>

        <Link href="/" passHref>
          <button className="cursor-pointer mt-8 px-8 py-3 color-bg text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg text-lg animate-fade-in-up delay-300">
            Повернутися на головну
          </button>
        </Link>

        <div className="mt-12 text-gray-500 text-sm animate-fade-in-up delay-400">
          <p>&copy; 2026 You Video Corp. Всі права захищено.</p>
        </div>
      </div>
    </div>
  );
}
