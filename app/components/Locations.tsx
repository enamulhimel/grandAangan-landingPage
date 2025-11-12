"use client";

import { useState } from "react";
import { MapPin, Satellite, Navigation } from "lucide-react";

export default function Location() {
  const [satelliteView, setSatelliteView] = useState(false);

  // Location info
  const address = "Plot: 1A, Block # A, Shornali Abashon, Dhaka 1229, Bangladesh";

  // URLs for embed maps (no API key needed)
  const roadMapSrc =
    "https://www.google.com/maps?q=Plot:+1A,+Block:+A,+Shornali+Abashon,+Dhaka+1229,+Bangladesh&output=embed";
  const satelliteMapSrc =
    "https://www.google.com/maps?q=Plot:+1A,+Block:+A,+Shornali+Abashon,+Dhaka+1229,+Bangladesh&output=embed&t=k";

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-start mb-6">Location</h2>

      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={satelliteView ? satelliteMapSrc : roadMapSrc}
          loading="lazy"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>

        {/* Buttons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => window.open(directionsUrl, "_blank")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md text-sm sm:text-base transition"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </button>

          <button
            onClick={() => setSatelliteView(!satelliteView)}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl shadow-md text-sm sm:text-base transition"
          >
            <Satellite className="w-4 h-4" />
            {satelliteView ? "Road View" : "Satellite View"}
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm sm:text-base flex justify-center items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-600" />
          {address}
        </p>
      </div>
    </section>
  );
}
