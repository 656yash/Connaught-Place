import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function KharidoPage() {
  const shoppingSpots = [
    { id: "p3", name: "FC Road", vibe: "College Fashion", price: "Cheap", color: "bg-bubblegum text-navy" },
    { id: "p8", name: "Phoenix Mall", vibe: "Brands & AC", price: "Expensive", color: "bg-ivory text-navy" },
    { id: "p16", name: "Tulsi Baug", vibe: "Chaos & Bargains", price: "Very Cheap", color: "bg-sindoor text-ivory" },
    { id: "p17", name: "Clover Center", vibe: "Thrift & Tailors", price: "Mid", color: "bg-mint-safe text-navy" },
  ];

  return (
    <main className="min-h-screen bg-haldi w-full flex flex-col p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 halftone-overlay opacity-10 pointer-events-none" />

      <div className="relative z-10 flex items-center gap-4 mb-12">
        <Link href="/">
          <button className="bg-ivory border-4 border-navy p-3 rounded-xl sticker-border hover:scale-105 transition-transform">
            <ArrowLeft size={32} className="text-navy" />
          </button>
        </Link>
        <h1 className="font-display-latin text-5xl md:text-7xl text-navy text-shadow-offset transform -rotate-2">
          KHARIDO <span className="text-bubblegum text-4xl">SHOPPING SCENE</span>
        </h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        {shoppingSpots.map((spot, i) => (
          <div key={i} className={`${spot.color} border-4 border-navy p-8 rounded-[2rem] shadow-[8px_8px_0_var(--color-navy)] flex flex-col justify-between transform transition-transform hover:scale-105 ${i % 2 === 0 ? 'rotate-2' : '-rotate-1'}`}>
            <div className="flex justify-between items-start mb-8">
              <span className="font-sticker text-xl px-3 py-1 bg-navy text-ivory rounded-full border-2 border-dashed border-ivory">{spot.vibe}</span>
              <span className="font-sticker text-2xl bg-paper text-navy px-3 py-1 rounded border-2 border-navy">{spot.price}</span>
            </div>
            <h2 className="font-display-latin text-5xl mb-4 leading-none uppercase">{spot.name}</h2>
            <Link href={`/explore?place=${spot.id}`}>
              <button className="self-start font-sticker text-2xl underline decoration-4 underline-offset-4 hover:opacity-70">
                GO THERE →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
