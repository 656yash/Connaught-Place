import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-navy relative overflow-x-hidden font-sans selection:bg-riso-pink selection:text-ivory flex flex-col justify-between items-center py-10 md:py-6 px-4">
      {/* Subtle Background Textures */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15 pointer-events-none" />
      
      {/* Top Scrolling Marquee */}
      <div className="absolute top-0 w-full overflow-hidden bg-navy text-ivory py-2 border-b-4 border-navy z-10 transform -rotate-1 origin-top-left -ml-4 w-[110%]">
        <div className="flex animate-[marquee_10s_linear_infinite] whitespace-nowrap font-sticker text-xl tracking-widest uppercase">
          <span className="mx-4">PUNE KO SURVIVE MAT KARO. JEEYO.</span> •
          <span className="mx-4">SAB RASTE CP SE JAATE HAIN</span> •
          <span className="mx-4">KHAO • GHOOMO • KHARIDO</span> •
          <span className="mx-4">PUNE KO SURVIVE MAT KARO. JEEYO.</span> •
          <span className="mx-4">SAB RASTE CP SE JAATE HAIN</span> •
        </div>
      </div>

      {/* Central Content (Title, Mascot, Explore CTA) */}
      <div className="relative z-20 w-full max-w-xl mx-auto flex flex-col items-center justify-center my-auto pt-6 pb-2">
        
        {/* Central Title */}
        <div className="text-center relative z-30 pointer-events-none mb-1">
          <h1 className="font-display-latin text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-[0.88] text-navy text-shadow-offset transform -rotate-2 select-none">
            CONNAUGHT<br/>PLACE
          </h1>
          <div className="bg-bubblegum text-navy font-sticker text-lg sm:text-2xl md:text-2xl px-5 py-1.5 md:px-6 md:py-1.5 inline-block border-4 border-navy transform rotate-3 -mt-3 md:-mt-4 relative z-10 shadow-[5px_5px_0_var(--color-navy)]">
            (PUNE EDITION)
          </div>
        </div>

        {/* Mascot - Positioned directly below Pune Edition */}
        <div className="relative z-20 my-2 md:my-3">
          <div 
            className="relative w-32 h-32 sm:w-38 sm:h-38 md:w-44 md:h-44 animate-float cursor-pointer hover:scale-105 transition-transform" 
            style={{ animationDuration: '3.4s' }}
          >
            <Image 
              src="/stickers/mascot.png" 
              alt="Bhau Billa Mascot" 
              fill 
              priority
              className="object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.38)]" 
            />
          </div>
        </div>

        {/* Explore Button */}
        <Link href="/explore" className="relative z-40 mt-1 md:mt-2">
          <button className="bg-sindoor text-ivory font-display-devanagari text-2xl sm:text-3xl md:text-4xl px-8 md:px-12 py-3 md:py-4 rounded-2xl border-4 border-navy sticker-border hover:bg-haldi hover:text-navy hover:scale-105 hover:-rotate-2 transition-all shadow-[6px_6px_0_var(--color-navy)] active:translate-y-1 cursor-pointer">
            EXPLORE KAROONGA
          </button>
        </Link>
      </div>

      {/* Navigation Stickers: Placed relative to full screen (main), distributed across the outer wings on desktop with zero overlap */}
      <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-6 md:mt-0 md:contents">
        
        {/* 1. KHAO (Food) - Outer Top-Left Wing */}
        <Link 
          href="/food" 
          aria-label="Explore Food Section" 
          className="group flex flex-col items-center transition-all duration-300 hover:scale-115 md:absolute md:top-[14%] md:left-[4%] lg:left-[6%] md:-rotate-6 z-30 pointer-events-auto"
        >
          <div 
            className="relative w-20 h-20 sm:w-22 sm:h-22 md:w-26 md:h-26 filter drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_30px_rgba(255,62,165,0.7)] animate-float"
            style={{ animationDuration: '3.2s', animationDelay: '0s' }}
          >
            <Image src="/stickers/food-sticker.png" alt="Khao Icon" fill className="object-contain" />
          </div>
          <span className="mt-2 font-sticker text-xs md:text-sm uppercase tracking-wider bg-ivory text-navy px-3 py-1 border-2 border-navy rounded-lg shadow-[3px_3px_0_var(--color-navy)] group-hover:bg-riso-pink group-hover:text-ivory transition-all whitespace-nowrap">
            KHAO • FOOD
          </span>
        </Link>

        {/* 2. LIVE (City Pulse) - Inner Mid-Left Wing */}
        <Link 
          href="/live" 
          aria-label="Explore Live City Pulse Section" 
          className="group flex flex-col items-center transition-all duration-300 hover:scale-115 md:absolute md:top-[48%] md:-translate-y-1/2 md:left-[13%] lg:left-[16%] md:rotate-8 z-30 pointer-events-auto"
        >
          <div 
            className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 filter drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_30px_rgba(47,63,214,0.7)] animate-float"
            style={{ animationDuration: '4.1s', animationDelay: '1.8s' }}
          >
            <Image src="/stickers/live-sticker.png" alt="Live Icon" fill className="object-contain" />
          </div>
          <span className="mt-2 font-sticker text-xs md:text-sm uppercase tracking-wider bg-ivory text-navy px-3 py-1 border-2 border-navy rounded-lg shadow-[3px_3px_0_var(--color-navy)] group-hover:bg-ink-blue group-hover:text-ivory transition-all whitespace-nowrap">
            LIVE • CITY PULSE
          </span>
        </Link>

        {/* 3. KHARIDO (Shopping) - Outer Bottom-Left Wing */}
        <Link 
          href="/kharido" 
          aria-label="Explore Shopping Section" 
          className="group flex flex-col items-center transition-all duration-300 hover:scale-115 md:absolute md:bottom-[15%] md:left-[4%] lg:left-[6%] md:-rotate-3 z-30 pointer-events-auto"
        >
          <div 
            className="relative w-20 h-20 sm:w-22 sm:h-22 md:w-26 md:h-26 filter drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_30px_rgba(255,233,77,0.7)] animate-float"
            style={{ animationDuration: '3.6s', animationDelay: '0.9s' }}
          >
            <Image src="/stickers/mall-sticker.png" alt="Kharido Icon" fill className="object-contain" />
          </div>
          <span className="mt-2 font-sticker text-xs md:text-sm uppercase tracking-wider bg-ivory text-navy px-3 py-1 border-2 border-navy rounded-lg shadow-[3px_3px_0_var(--color-navy)] group-hover:bg-haldi group-hover:text-navy transition-all whitespace-nowrap">
            KHARIDO • SHOPPING
          </span>
        </Link>

        {/* 4. GHOOMO (Heritage) - Outer Top-Right Wing */}
        <Link 
          href="/heritage" 
          aria-label="Explore Heritage Section" 
          className="group flex flex-col items-center transition-all duration-300 hover:scale-115 md:absolute md:top-[16%] md:right-[5%] lg:right-[7%] md:rotate-6 z-30 pointer-events-auto"
        >
          <div 
            className="relative w-22 h-22 sm:w-24 sm:h-24 md:w-28 md:h-28 filter drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_30px_rgba(63,94,58,0.7)] animate-float"
            style={{ animationDuration: '3.8s', animationDelay: '0.5s' }}
          >
            <Image src="/stickers/heritage-sticker.png" alt="Ghoomo Icon" fill className="object-contain" />
          </div>
          <span className="mt-2 font-sticker text-xs md:text-sm uppercase tracking-wider bg-ivory text-navy px-3 py-1 border-2 border-navy rounded-lg shadow-[3px_3px_0_var(--color-navy)] group-hover:bg-moss group-hover:text-ivory transition-all whitespace-nowrap">
            GHOOMO • HERITAGE
          </span>
        </Link>

        {/* 5. COMPARE (VS Arena) - Outer Bottom-Right Wing */}
        <Link 
          href="/compare" 
          aria-label="Explore VS Arena Section" 
          className="group flex flex-col items-center transition-all duration-300 hover:scale-115 md:absolute md:bottom-[15%] md:right-[5%] lg:right-[8%] md:-rotate-6 z-30 pointer-events-auto"
        >
          <div 
            className="relative w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 filter drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_30px_rgba(230,57,70,0.7)] animate-float"
            style={{ animationDuration: '3.5s', animationDelay: '1.4s' }}
          >
            <Image src="/stickers/battle-sticker.png" alt="Compare Icon" fill className="object-contain" />
          </div>
          <span className="mt-2 font-sticker text-xs md:text-sm uppercase tracking-wider bg-ivory text-navy px-3 py-1 border-2 border-navy rounded-lg shadow-[3px_3px_0_var(--color-navy)] group-hover:bg-sindoor group-hover:text-ivory transition-all whitespace-nowrap">
            COMPARE • VS ARENA
          </span>
        </Link>

      </div>

      {/* Bottom Scrolling Marquee */}
      <div className="absolute bottom-2 w-full overflow-hidden bg-haldi text-navy py-2 md:py-3 border-y-4 border-navy z-10 transform rotate-1 origin-bottom-right -mr-4 w-[110%]">
        <div className="flex animate-[marquee_15s_linear_infinite_reverse] whitespace-nowrap font-display-latin text-xl md:text-2xl uppercase">
          <span className="mx-4">THE ONLY CIRCLE YOU NEED</span> ✦
          <span className="mx-4">BHAU BILLA IS WATCHING</span> ✦
          <span className="mx-4">THE ONLY CIRCLE YOU NEED</span> ✦
          <span className="mx-4">BHAU BILLA IS WATCHING</span> ✦
        </div>
      </div>
    </main>
  );
}
