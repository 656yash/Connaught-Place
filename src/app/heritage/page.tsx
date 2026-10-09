import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HeritagePage() {
  const places = [
    { id: "p2", name: "Shaniwar Wada", desc: "The haunted Peshwa seat. Fort vibes in the middle of traffic.", year: "1732" },
    { id: "p4", name: "Aga Khan Palace", desc: "Gandhi's prison turned architectural marvel. Pure aesthetics.", year: "1892" },
    { id: "p14", name: "Pataleshwar", desc: "8th-century rock-cut cave temple right on JM Road. Actually insane.", year: "8th C" },
    { id: "p15", name: "Sinhagad Fort", desc: "Trek, eat pitla bhakri, and look at the clouds. Classic Sunday.", year: "Ancient" },
  ];

  return (
    <div className="min-h-screen bg-moss w-full flex flex-col p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />

      <div className="relative z-10 flex items-center gap-4 mb-12">
        <Link href="/">
          <button className="bg-ivory border-4 border-navy p-3 rounded-xl sticker-border hover:scale-105 transition-transform">
            <ArrowLeft size={32} className="text-navy" />
          </button>
        </Link>
        <h1 className="font-display-latin text-5xl md:text-7xl text-haldi text-shadow-plum transform rotate-1">
          GHOOMO <span className="text-ivory text-4xl">ITIHAAS TRAIL</span>
        </h1>
      </div>

      <div className="relative z-10 flex flex-col gap-8 max-w-4xl mx-auto w-full">
        {places.map((place, i) => (
          <div key={i} className={`bg-paper border-4 border-navy p-6 rounded-2xl shadow-[8px_8px_0_var(--color-navy)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transform transition-transform hover:-translate-y-2 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
            <div>
              <div className="font-sticker text-riso-pink text-xl mb-1">EST. {place.year}</div>
              <h2 className="font-display-devanagari text-4xl text-navy mb-2">{place.name}</h2>
              <p className="font-sans text-navy font-bold text-lg max-w-md">{place.desc}</p>
            </div>
            <Link href={`/explore?place=${place.id}`}>
              <button className="bg-bubblegum text-navy font-sticker text-2xl px-6 py-3 rounded-full border-2 border-navy sticker-border hover:scale-110 transition-transform whitespace-nowrap">
                DEKH MAP
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
