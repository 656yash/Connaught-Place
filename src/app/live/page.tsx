import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LivePage() {
  return (
    <div className="min-h-screen bg-ink-blue w-full flex flex-col p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="bg-bubblegum border-4 border-navy p-3 rounded-xl sticker-border hover:scale-105 transition-transform">
              <ArrowLeft size={32} className="text-navy" />
            </button>
          </Link>
          <h1 className="font-display-latin text-5xl md:text-7xl text-mint-safe text-shadow-offset transform -skew-x-2">
            CITY PULSE
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-navy border-2 border-mint-safe px-4 py-2 rounded-full text-mint-safe font-sticker animate-pulse">
          <span className="w-3 h-3 bg-sindoor rounded-full"></span> LIVE NOW
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {/* Weather Widget */}
        <div className="bg-ivory border-4 border-navy p-6 rounded-3xl shadow-[8px_8px_0_var(--color-navy)] flex flex-col justify-between transform hover:scale-105 transition-transform">
          <div className="font-sticker text-navy text-2xl mb-4">Mausam ☁️</div>
          <div className="flex items-center justify-between">
            <h2 className="font-display-latin text-7xl text-ink-blue">28°C</h2>
            <div className="text-right font-sans font-bold text-navy">
              <p>Haze / Partly Cloudy</p>
              <p className="text-moss">Perfect for Misal.</p>
            </div>
          </div>
        </div>

        {/* Traffic Widget */}
        <div className="bg-sindoor border-4 border-navy p-6 rounded-3xl shadow-[8px_8px_0_var(--color-navy)] flex flex-col justify-between text-ivory transform hover:scale-105 transition-transform">
          <div className="font-sticker text-ivory text-2xl mb-4">Traffic 🚦</div>
          <h2 className="font-display-latin text-5xl mb-2">UNIVERSITY ROAD</h2>
          <p className="font-sans font-bold text-xl bg-navy inline-block px-3 py-1 rounded">Status: Jammed. Mat jao.</p>
        </div>

        {/* Trending Topic */}
        <div className="bg-haldi border-4 border-navy p-6 rounded-3xl shadow-[8px_8px_0_var(--color-navy)] flex flex-col justify-between text-navy transform hover:scale-105 transition-transform md:col-span-2 lg:col-span-1">
          <div className="font-sticker text-navy text-2xl mb-4">Trending 📈</div>
          <h2 className="font-display-devanagari text-4xl mb-2">#PuneRains</h2>
          <p className="font-sans font-bold text-lg">Everyone is currently posting stories from their balcony.</p>
        </div>

        {/* Vibe Check Widget */}
        <div className="bg-bubblegum border-4 border-navy p-6 rounded-3xl shadow-[8px_8px_0_var(--color-navy)] flex flex-col items-center justify-center text-navy transform hover:scale-105 transition-transform lg:col-span-3 min-h-[250px]">
          <h2 className="font-display-latin text-6xl text-ivory text-shadow-offset text-center">
            PUNE VIBE LEVEL: <span className="text-haldi">9000+</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
