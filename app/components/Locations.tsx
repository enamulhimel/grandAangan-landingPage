// app/components/GoogleLocation.tsx
"use client";

import { useState } from "react";
import { MapPin, Navigation, Satellite } from "lucide-react";

export default function Locations() {
  const [view, setView] = useState<"roadmap" | "satellite">("roadmap");

  // Correct coordinates for Dreamway Grand Aangan (Shornail Abashon, Dhaka)
  const lat = 23.7985;
  const lng = 90.4152;
  const placeName = "Dreamway Grand Aangan";

  const getDirections = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${lat},${lng}&travelmode=driving`;
          window.open(url, "_blank");
        },
        () => {
          alert("Location access denied. Opening direct map.");
          window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, "_blank");
        }
      );
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, "_blank");
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{placeName}</h2>
                <p className="text-sm text-gray-600">Plot-1A, Road 7-8, Shornail Abashon, Dhaka</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setView(view === "roadmap" ? "satellite" : "roadmap")}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-sm font-medium"
              >
                <Satellite className="w-4 h-4" />
                {view === "satellite" ? "Map" : "Satellite"}
              </button>

              <button
                onClick={getDirections}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition text-sm font-medium"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="relative w-full h-96 md:h-[500px]">
          <iframe
            title="Dreamway Grand Aangan Location"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyD0F2X0X0X0X0X0X0X0X0X0X0X0X0X0X0X&center=${lat},${lng}&zoom=17&maptype=${view}&q=${lat},${lng}`}
          />
        </div>

        {/* Mobile Get Directions (Sticky Bottom) */}
        <div className="md:hidden p-4 bg-white border-t border-gray-200">
          <button
            onClick={getDirections}
            className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
}