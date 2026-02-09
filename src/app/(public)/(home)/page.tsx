"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function HOME() {
  const router = useRouter();
  return (
    <div className="min-h-screen tex   bg-[#0a0a0a] text-white font-sans selection:bg-[#24f4fa] selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-20 ">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#24f4fa] blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#24f4fa] blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 relative">
              <Image
                width={20}
                height={20}
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(36,244,250,0.6)] group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">
              YOU VIDEO <span className="text-[#24f4fa]">LLC</span>
            </h1>
          </div>
        </nav>

        <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-4 py-1 border border-[#24f4fa]/30 rounded-full bg-[#24f4fa]/5 text-[#24f4fa] text-xs font-bold tracking-[0.2em] mb-4">
              NEXT GENERATION VIDEO HOSTING
            </div>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter pt-2">
              МАЙБУТНЄ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24f4fa] via-white to-[#24f4fa] drop-shadow-[0_0_15px_rgba(36,244,250,0.3)]">
                КОНТЕНТУ
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Приєднуйся до You Video LLC — платформи, де творчість
              зустрічається з інноваціями. Найвища якість 4K, чесна монетизація
              та спільнота, що надихає.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <Button
                text="Регестрація"
                onClick={() => router.push("/sign-up")}
                isBlue={true}
              />
              <Button
                text="До перегляду"
                onClick={() => router.push("/main")}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-16 border-t border-white/5 mt-16 text-left">
              <div className="flex justify-center flex-col items-center">
                <div className="text-[#24f4fa] text-3xl font-black">4K+</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                  Ultra HD Якість
                </div>
              </div>
              <div className="flex justify-center flex-col items-center">
                <div className="text-[#24f4fa] text-3xl font-black">90%</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                  Доходу Авторам
                </div>
              </div>
              <div className="flex justify-center flex-col items-center">
                <div className="text-[#24f4fa] text-3xl font-black">0%</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                  Зайвої Реклами
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-white/5 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-[10px] tracking-[0.4em] uppercase font-bold">
              © 2024 You Video LLC • Всі права захищено
            </div>
            <div className="flex gap-6">
              <span className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:border-[#24f4fa] hover:text-[#24f4fa] transition-all cursor-pointer">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:border-[#24f4fa] hover:text-[#24f4fa] transition-all cursor-pointer">
                <i className="fab fa-youtube"></i>
              </span>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
