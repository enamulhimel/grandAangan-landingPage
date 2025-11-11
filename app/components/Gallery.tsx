"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
  "/gallery-7.jpg",
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#F4F4F4] py-8 px-2 sm:px-4 overflow-hidden">

      {/* ✅ Responsive Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 overflow-hidden">

        {/* ✅ LEFT GALLERY SECTION */}
        <div className="w-full lg:w-4/6 bg-white shadow-lg rounded-xl p-3 sm:p-4 overflow-hidden">

          {/* Main Image */}
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-[460px] rounded-xl overflow-hidden">

            {/* Left arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 sm:p-3 z-20"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 sm:p-3 z-20"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            <Image
              src={images[activeIndex]}
              alt="Gallery image"
              fill
              className="object-cover"
            />
          </div>

          {/* ✅ Thumbnails — wrapped + no scroll */}
          <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">

            {images.map((img, index) => (
              <button
                key={img}
                onClick={() => setActiveIndex(index)}
                className={`relative w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-lg overflow-hidden border-2 ${
                  activeIndex === index ? "border-red-500" : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
              </button>
            ))}

          </div>

        </div>

        {/* ✅ RIGHT INFO SECTION */}
        <div className="w-full lg:w-2/6 bg-white shadow-lg rounded-xl p-5 flex flex-col">

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
            The Grand Aangan (2450 sft)
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 my-2">
            Shornali Abashon
          </p>

          <hr className="text-gray-300 my-6" />

          {/* ✅ Responsive Grid */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Land Area</p>
              <p className="font-bold">25+ Katha</p>
            </div>

            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Flat Size</p>
              <p className="font-bold">2450 sft</p>
            </div>

            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Building Type</p>
              <p className="font-bold">B+G+M+14</p>
            </div>

            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Status</p>
              <p className="font-bold">Land Share</p>
            </div>

          </div>

          <hr className="text-gray-300 my-6" />

          <button className="w-full bg-red-600 text-white py-3 rounded-md text-lg font-semibold mt-auto">
            Book a visit
          </button>

        </div>

      </div>
    </div>
  );
}
