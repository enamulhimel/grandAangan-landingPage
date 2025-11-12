// app/components/FloorPlans.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Import images from the public folder
import typical from "../../public/typical-floor.jpeg";
import ground from "../../public/ground-floor.jpeg";
import roof from "../../public/roof.jpeg";


type Floor = "typical" | "ground" | "roof" | "ground-interior";

// Local images object
const images: Record<Floor, any> = {
  typical,
  ground,
  roof,
  "ground-interior": ground, // fallback
};

export default function FloorPlans() {
  const [active, setActive] = useState<Floor>("typical");

  // Automatically show ground-interior after 40s
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
            {floor === "typical"
              ? "Typical Floor"
              : floor === "ground"
              ? "Ground Floor"
              : "Roof Floor"}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <div className="relative w-[90%] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[350px] md:h-[800px] rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={images[active]}
          alt={`${active} plan`}
          fill
          className="object-contain"
          />
        </div>
    </div>

    </section>
  );
}
