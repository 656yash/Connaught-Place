import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-navy relative overflow-hidden font-sans selection:bg-riso-pink selection:text-ivory">
      {/* Background Grid & Textures */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      
      {/* Scrolling Marquees */}
      <div className="absolute top-0 w-full overflow-hidden bg-navy text-ivory py-2 border-b-4 border-navy z-10 transform -rotate-1 origin-top-left -ml-4 w-[110%]">
        <div className="flex animate-[marquee_10s_linear_infinite] whitespace-nowrap font-sticker text-xl tracking-widest uppercase">
          <span className="mx-4">PUNE KO SURVIVE MAT KARO. JEEYO.</span> •
          <span className="mx-4">SAB RASTE CP SE JAATE HAIN</span> •
          <span className="mx-4">KHAO • GHOOMO • KHARIDO</span> •
          <span className="mx-4">PUNE KO SURVIVE MAT KARO. JEEYO.</span> •
          <span className="mx-4">SAB RASTE CP SE JAATE HAIN</span> •
        </div>
      </div>

      <div className="absolute bottom-10 w-full overflow-hidden bg-haldi text-navy py-3 border-y-4 border-navy z-10 transform rotate-2 origin-bottom-right -mr-4 w-[110%]">
        <div className="flex animate-[marquee_15s_linear_infinite_reverse] whitespace-nowrap font-display-latin text-2xl uppercase">
          <span className="mx-4">THE ONLY CIRCLE YOU NEED</span> ✦
          <span className="mx-4">BHAU BILLA IS WATCHING</span> ✦
          <span className="mx-4">THE ONLY CIRCLE YOU NEED</span> ✦
          <span className="mx-4">BHAU BILLA IS WATCHING</span> ✦
        </div>
      </div>

      {/* Decorative Background Stickers */}
      <div className="absolute top-16 right-4 md:right-24 w-32 md:w-64 h-32 md:h-64 -rotate-12 opacity-80 pointer-events-none animate-pulse">
        <Image src="/Landing Page/landing4.png" alt="Deco" fill className="object-contain" />
      </div>
      <div className="absolute bottom-24 left-4 md:left-24 w-40 md:w-80 h-40 md:h-80 rotate-6 opacity-70 pointer-events-none">
        <Image src="/Landing Page/landingcorner.png" alt="Deco" fill className="object-contain" />
      </div>
      <div className="absolute top-1/3 left-10 w-24 h-24 -rotate-12 opacity-60 pointer-events-none mix-blend-multiply">
        <Image src="/Landing Page/landing1.png" alt="Deco" fill className="object-contain" />
      </div>
      <div className="absolute bottom-1/3 right-10 w-48 h-48 rotate-12 opacity-60 pointer-events-none rounded-full overflow-hidden border-4 border-dashed border-navy">
        <Image src="/Landing Page/landing2.jpg" alt="Deco" fill className="object-cover" />
      </div>

      {/* Main Content & Floating Stickers */}
      <div className="relative z-20 w-full h-screen flex flex-col items-center justify-center">
        
        {/* Central Title */}
        <div className="text-center mb-8 relative z-30 pointer-events-none">
          <h1 className="font-display-latin text-[4rem] md:text-[8rem] leading-none text-navy text-shadow-offset transform -rotate-2">
            CONNAUGHT<br/>PLACE
          </h1>
          <div className="bg-bubblegum text-navy font-sticker text-2xl md:text-3xl px-6 py-2 inline-block border-4 border-navy transform rotate-3 -mt-6 relative z-10 shadow-[8px_8px_0_var(--color-navy)]">
            (PUNE EDITION)
          </div>
        </div>

        {/* Mascot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] w-48 h-48 md:w-64 md:h-64 z-20 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
          <Image src="/stickers/mascot.png" alt="Bhau Billa Mascot" fill className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Explore Button */}
        <Link href="/explore" className="relative z-40 mt-32 md:mt-48">
          <button className="bg-sindoor text-ivory font-display-devanagari text-3xl md:text-5xl px-8 md:px-12 py-4 md:py-6 rounded-2xl border-4 border-navy sticker-border hover:bg-haldi hover:text-navy hover:scale-110 hover:-rotate-2 transition-all">
            EXPLORE KAROONGA
          </button>
        </Link>

        {/* Floating Navigation Stickers */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* KHAO (Food) */}
          <Link href="/food" className="pointer-events-auto absolute top-[15%] left-[10%] md:left-[20%] hover:scale-125 hover:rotate-6 transition-transform group">
            <div className="relative w-28 h-28 md:w-40 md:h-40 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_15px_25px_rgba(255,62,165,0.6)]">
              <Image src="/stickers/food-sticker.png" alt="Khao" fill className="object-contain" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ivory text-navy font-sticker text-xl px-3 py-1 border-2 border-navy rounded opacity-0 group-hover:opacity-100 transition-opacity">
              KHAO
            </div>
          </Link>

          {/* GHOOMO (Heritage) */}
          <Link href="/heritage" className="pointer-events-auto absolute top-[20%] right-[10%] md:right-[20%] hover:scale-125 hover:-rotate-12 transition-transform group">
            <div className="relative w-32 h-32 md:w-44 md:h-44 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_15px_25px_rgba(63,94,58,0.6)]">
              <Image src="/stickers/heritage-sticker.png" alt="Ghoomo" fill className="object-contain" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ivory text-navy font-sticker text-xl px-3 py-1 border-2 border-navy rounded opacity-0 group-hover:opacity-100 transition-opacity">
              GHOOMO
            </div>
          </Link>

          {/* KHARIDO (Shopping) */}
          <Link href="/kharido" className="pointer-events-auto absolute bottom-[25%] left-[5%] md:left-[15%] hover:scale-125 hover:rotate-12 transition-transform group">
            <div className="relative w-32 h-32 md:w-48 md:h-48 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_15px_25px_rgba(255,233,77,0.6)]">
              <Image src="/stickers/mall-sticker.png" alt="Kharido" fill className="object-contain" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ivory text-navy font-sticker text-xl px-3 py-1 border-2 border-navy rounded opacity-0 group-hover:opacity-100 transition-opacity">
              KHARIDO
            </div>
          </Link>

          {/* COMPARE */}
          <Link href="/compare" className="pointer-events-auto absolute bottom-[20%] right-[5%] md:right-[15%] hover:scale-125 hover:-rotate-6 transition-transform group">
            <div className="relative w-28 h-28 md:w-40 md:h-40 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_15px_25px_rgba(230,57,70,0.6)]">
              <Image src="/stickers/battle-sticker.png" alt="Compare" fill className="object-contain" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ivory text-navy font-sticker text-xl px-3 py-1 border-2 border-navy rounded opacity-0 group-hover:opacity-100 transition-opacity">
              COMPARE
            </div>
          </Link>

          {/* LIVE (City Pulse) */}
          <Link href="/live" className="pointer-events-auto absolute top-[40%] right-[2%] md:right-[5%] hover:scale-125 hover:rotate-12 transition-transform group">
            <div className="relative w-24 h-24 md:w-36 md:h-36 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_15px_25px_rgba(47,63,214,0.6)]">
              <Image src="/stickers/live-sticker.png" alt="Live" fill className="object-contain" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ivory text-navy font-sticker text-xl px-3 py-1 border-2 border-navy rounded opacity-0 group-hover:opacity-100 transition-opacity">
              LIVE
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
