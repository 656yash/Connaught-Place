import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-paper w-full flex flex-col p-4 md:p-8 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-4 mb-12">
        <Link href="/">
          <button className="bg-bubblegum border-4 border-navy p-3 rounded-xl sticker-border hover:scale-105 transition-transform">
            <ArrowLeft size={32} className="text-navy" />
          </button>
        </Link>
        <h1 className="font-display-latin text-5xl md:text-7xl text-haldi text-shadow-plum transform -skew-x-2 -rotate-1">
          KHAO <span className="text-ivory">PUNE</span>
        </h1>
      </div>

      {/* Mastani Meter */}
      <div className="relative z-10 max-w-md mx-auto mb-16 bg-ivory border-4 border-navy p-6 rounded-2xl shadow-[8px_8px_0_var(--color-ink-blue)] rotate-1">
        <h2 className="font-display-devanagari text-2xl text-navy mb-4">Mastani Meter 🍨</h2>
        <div className="w-full h-8 bg-paper border-2 border-navy rounded-full overflow-hidden">
          <div className="h-full bg-bubblegum w-[75%] border-r-2 border-navy"></div>
        </div>
        <p className="mt-2 font-sans text-sm font-bold opacity-70">You've explored 75% of Pune's iconic spots!</p>
      </div>

      {/* Foodie Wall (Masonry-ish) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: "p11", name: "Vaishali", tag: "Student Classic", price: "Rs. 300", bg: "bg-ivory text-navy" },
          { id: "p12", name: "Kayani Bakery", tag: "Irani Heritage", price: "Rs. 150", bg: "bg-haldi text-navy" },
          { id: "p1", name: "Bedekar Misal", tag: "Spicy", price: "Rs. 150", bg: "bg-sindoor text-ivory" },
          { id: "p13", name: "Sujata Mastani", tag: "Thick Shake", price: "Rs. 120", bg: "bg-riso-pink text-ivory" },
          { id: "p5", name: "Cafe Goodluck", tag: "Bun Maska", price: "Rs. 200", bg: "bg-paper text-navy" },
        ].map((spot, i) => (
          <div key={i} className={`p-6 border-4 border-navy rounded-xl shadow-[6px_6px_0_var(--color-navy)] hover:-translate-y-2 hover:shadow-[10px_10px_0_var(--color-navy)] transition-all cursor-pointer ${spot.bg} transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-1'}`}>
            <div className="flex justify-between items-start mb-12">
              <span className="font-sticker text-xl px-2 py-1 bg-navy text-ivory rounded">{spot.tag}</span>
              <span className="font-sticker text-2xl">{spot.price}</span>
            </div>
            <h3 className="font-display-devanagari text-3xl mb-2">{spot.name}</h3>
            <div className="flex justify-between items-end mt-4">
              <Link href={`/explore?place=${spot.id}`}>
                <button className="font-sticker text-xl underline decoration-2 underline-offset-4 hover:opacity-70">DEKH ROUTE</button>
              </Link>
              <div className="w-12 h-12 rounded-full border-2 border-navy bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white opacity-50"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
