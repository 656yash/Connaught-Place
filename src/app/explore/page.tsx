"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { places } from "../../data/places";

const Map = dynamic(() => import("../../components/map/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-ivory text-navy">
      <h2 className="font-display-latin text-4xl text-navy text-shadow-offset">MAP LOADING...</h2>
    </div>
  ),
});

/**
 * ExplorePage Component
 * 
 * Main interactive map page for navigating Connaught Place (Pune Edition).
 * Uses MapLibre GL for rendering and supports URL query parameters for deep linking.
 */
export default function ExplorePage() {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  useEffect(() => {
    // Read from query params without triggering Next.js useSearchParams suspense requirements
    const params = new URLSearchParams(window.location.search);
    const place = params.get("place");
    if (place) {
      setSelectedPlaceId(place);
    }
  }, []);

  return (
    <main aria-label="Interactive Map Exploration" className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-ivory">
      {/* Sidebar / Bottom Sheet */}
      <div className="w-full md:w-96 h-1/3 md:h-full bg-ivory border-t-4 md:border-t-0 md:border-r-4 border-navy z-10 flex flex-col relative shadow-[10px_0_20px_rgba(0,0,0,0.1)]">
        <div className="p-4 bg-haldi border-b-4 border-navy flex items-center justify-between">
          <h2 className="font-display-latin text-3xl text-navy">EXPLORE</h2>
          <Link href="/">
            <button className="bg-bubblegum border-2 border-navy p-2 rounded-full sticker-border hover:scale-105 transition-transform">
              <ArrowLeft size={24} className="text-navy" />
            </button>
          </Link>
        </div>
        
        <div className="p-4 flex gap-2 overflow-x-auto border-b-2 border-navy border-dashed">
          {["Veg Only", "Trendy", "Late Night", "Aesthetic"].map(filter => (
            <button key={filter} className="whitespace-nowrap px-3 py-1 bg-ivory text-navy border-2 border-navy rounded-md font-sticker text-lg hover:bg-riso-pink hover:text-ivory transition-colors">
              {filter}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {places.map((place) => (
            <div 
              key={place.id} 
              onClick={() => setSelectedPlaceId(place.id)}
              className={`bg-paper p-4 border-2 border-navy rounded-lg transform hover:scale-105 transition-all cursor-pointer ${selectedPlaceId === place.id ? 'shadow-[0_0_0_4px_var(--color-navy)] scale-105' : 'shadow-[4px_4px_0_var(--color-navy)] hover:-translate-y-1'}`}
            >
              <div className="text-xs font-sticker text-riso-pink mb-1">{place.type}</div>
              <h3 className="font-display-devanagari text-xl text-navy">{place.name}</h3>
              <div className="flex justify-between mt-2 font-sans text-sm font-bold text-moss">
                <span>{place.area}</span>
                <span>{place.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-ivory">
        <Map selectedPlaceId={selectedPlaceId} />
      </div>
    </div>
  );
}
