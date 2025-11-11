// app/components/FloorPlans.tsx
"use client";

import { useState, useEffect } from "react";

type Floor = "typical" | "ground" | "roof" | "ground-interior";

const images: Record<Floor, string> = {
  typical: "https://i.pinimg.com/474x/4b/d0/4e/4bd04ecdc24ab75bc93d1e982624f7bd.jpg",
  ground: "https://i.ytimg.com/vi/F54saEf9phA/maxresdefault.jpg",
  roof: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZpGfzxDDBTu959_45pkZtVIx0SXNVDJs2A&s",
  "ground-interior": "https://i.pinimg.com/474x/4b/d0/4e/4bd04ecdc24ab75bc93d1e982624f7bd.jpg",
};

export default function FloorPlans() {
  const [active, setActive] = useState<Floor>("typical");

  useEffect(() => {
    if (active === "ground") {
      const timer = setTimeout(() => setActive("ground-interior"), 40000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Floor Plan</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">
        {(["typical", "ground", "roof"] as const).map((floor) => (
          <button
            key={floor}
            onClick={() => setActive(floor)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active.startsWith(floor) && active !== "ground-interior"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {floor === "typical" ? "Typical Floor" : floor === "ground" ? "Ground Floor" : "Roof Floor"}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="relative rounded-lg overflow-hidden bg-gray-100">
        <img
          src={images[active]}
          alt={active}
          className="w-full h-auto object-cover"
        />

        {/* Roof Branding */}
        {/* {active === "roof" && (
          <div className="absolute bottom-6 right-6 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg text-right">
            <div className="text-xl font-bold text-gray-800">THE GRAND MANGAN</div>
            <div className="text-sm text-gray-600">by DREAMWAY</div>
          </div>
        )} */}
      </div>
    </section>
  );
}