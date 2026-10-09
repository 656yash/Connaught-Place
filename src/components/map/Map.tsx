"use client";

import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { places } from "../../data/places";

export default function Map({ selectedPlaceId }: { selectedPlaceId: string | null }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markers = useRef<{ [id: string]: maplibregl.Marker }>({});

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          "carto-light": {
            type: "raster",
            tiles: [
              "https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png?key=cb1_4f2e_1_94722a7cae1e2d2c99494f19",
              "https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png?key=cb1_4f2e_1_94722a7cae1e2d2c99494f19",
              "https://c.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png?key=cb1_4f2e_1_94722a7cae1e2d2c99494f19"
            ],
            tileSize: 256
          }
        },
        layers: [
          {
            id: "carto-light-layer",
            type: "raster",
            source: "carto-light",
            minzoom: 0,
            maxzoom: 22
          }
        ]
      },
      center: [73.8567, 18.5204], // Pune
      zoom: 12,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    places.forEach((place) => {
      const popup = new maplibregl.Popup({ offset: 25, closeButton: false }).setHTML(
        `<div style="color: #1B1F36; font-family: sans-serif; padding: 4px;">
           <strong style="font-size: 16px;">${place.name}</strong><br/>
           <span style="font-size: 12px; font-weight: bold; color: ${place.color};">${place.type}</span>
         </div>`
      );

      const marker = new maplibregl.Marker({ color: place.color })
        .setLngLat(place.lngLat)
        .setPopup(popup)
        .addTo(map.current!);

      markers.current[place.id] = marker;
    });
  }, []);

  useEffect(() => {
    if (selectedPlaceId && map.current) {
      const place = places.find(p => p.id === selectedPlaceId);
      if (place) {
        map.current.flyTo({
          center: place.lngLat,
          zoom: 15,
          speed: 1.2,
        });
        
        // Close all other popups
        Object.values(markers.current).forEach(m => {
          if (m.getPopup().isOpen()) m.togglePopup();
        });

        // Open this popup
        const marker = markers.current[place.id];
        if (marker && !marker.getPopup().isOpen()) {
          marker.togglePopup();
        }
      }
    }
  }, [selectedPlaceId]);

  return <div ref={mapContainer} className="absolute inset-0 w-full h-full" />;
}
