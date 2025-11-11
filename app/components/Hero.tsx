"use client";

import Image from "next/image";
import hero from "../../public/hero.jpg"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src={hero} 
        alt="The Grand Aangan"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Text section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          The Grand Aangan (2450 sft)
        </h1>

        <p className="mt-3 text-lg md:text-xl font-medium opacity-90">
          Shornali Abashon
        </p>
      </div>
    </div>
  );
}
