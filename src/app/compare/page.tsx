"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComparePage() {
  const startBattle = () => {
    alert("BHAU BILLA SAYS: FC Road wins for college nostalgia, but KP wins for vibes. Match drawn! 🏆");
  };

  return (
    <div className="min-h-screen bg-sindoor w-full flex flex-col p-4 md:p-8 relative overflow-hidden text-ivory">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] gap-8">
        <Link href="/" className="absolute top-0 left-0">
          <button className="bg-ivory border-4 border-navy p-3 rounded-xl sticker-border hover:scale-105 transition-transform">
            <ArrowLeft size={32} className="text-navy" />
          </button>
        </Link>
        
        <h1 className="font-display-latin text-6xl md:text-8xl text-haldi text-shadow-offset transform -skew-x-12 -rotate-2 mb-8">
          VS ARENA
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="flex-1 bg-navy border-4 border-ivory p-8 rounded-3xl transform -rotate-3 hover:scale-105 transition-all shadow-[10px_10px_0_var(--color-haldi)]">
            <div className="font-sticker text-haldi text-2xl mb-4 text-center">Contender 1</div>
            <h2 className="font-display-latin text-5xl text-ivory text-center mb-6">FC ROAD</h2>
            <ul className="font-sans font-bold text-xl space-y-4">
              <li className="flex justify-between border-b-2 border-dashed border-ivory/30 pb-2"><span>Crowd:</span> <span className="text-bubblegum">College</span></li>
              <li className="flex justify-between border-b-2 border-dashed border-ivory/30 pb-2"><span>Food:</span> <span className="text-bubblegum">South Indian</span></li>
              <li className="flex justify-between"><span>Vibe:</span> <span className="text-bubblegum">Shopping</span></li>
            </ul>
          </div>

          {/* VS Badge */}
          <div className="font-display-latin text-7xl text-ivory bg-riso-pink rounded-full w-32 h-32 flex items-center justify-center border-8 border-navy z-20 shadow-xl sticker-border transform rotate-12">
            VS
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-ivory border-4 border-navy p-8 rounded-3xl transform rotate-3 hover:scale-105 transition-all shadow-[10px_10px_0_var(--color-navy)] text-navy">
            <div className="font-sticker text-riso-pink text-2xl mb-4 text-center">Contender 2</div>
            <h2 className="font-display-latin text-5xl text-navy text-center mb-6">KP</h2>
            <ul className="font-sans font-bold text-xl space-y-4">
              <li className="flex justify-between border-b-2 border-dashed border-navy/30 pb-2"><span>Crowd:</span> <span className="text-moss">IT & Expats</span></li>
              <li className="flex justify-between border-b-2 border-dashed border-navy/30 pb-2"><span>Food:</span> <span className="text-moss">Global Aesthetic</span></li>
              <li className="flex justify-between"><span>Vibe:</span> <span className="text-moss">Party</span></li>
            </ul>
          </div>
        </div>

        <button onClick={startBattle} className="mt-12 bg-haldi text-navy font-display-latin text-3xl px-12 py-4 rounded-xl border-4 border-navy sticker-border hover:bg-ivory hover:-translate-y-2 transition-all">
          BATTLE KAREN?
        </button>
      </div>
    </div>
  );
}
