// app/components/PropertyTabs.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Overview from "./Overview";
import Amenities from "./Amenities";
import FloorPlans from "./FloorPlans";
import Location from "./Location";


export default function PropertyTabs() {
  const tabs = ["Overview", "Amenities", "Floor Plan","Location"];
  const [activeTab, setActiveTab] = useState("Overview");

  const overviewRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      Overview: overviewRef,
      Amenities: amenitiesRef,
      "Floor Plan": floorRef,
      location: locationRef,
    };

    const ref = refs[section];
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      const positions = [
        { name: "Overview", top: overviewRef.current?.offsetTop ?? 0 },
        { name: "Amenities", top: amenitiesRef.current?.offsetTop ?? 0 },
        { name: "Floor Plan", top: floorRef.current?.offsetTop ?? 0 },
        { name: "Location", top: locationRef.current?.offsetTop ?? 0 },
      ].sort((a, b) => b.top - a.top);

      for (const { name, top } of positions) {
        if (scrollPos >= top) {
          setActiveTab(name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-30 bg-white shadow-md cursor-pointer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex gap-8 border-b border-gray-200 overflow-x-auto scrollbar-hide cursor-pointer">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`relative py-4 px-1 text-lg font-semibold transition-colors whitespace-nowrap${
                  activeTab === tab
                    ? "text-red-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div ref={overviewRef} className="pt-8">
          <Overview />
        </div>

        <div ref={amenitiesRef} className="pt-8">
          <Amenities />
        </div>

        <div ref={floorRef} className="pt-8">
          <FloorPlans />
        </div>
        <div ref={locationRef} className="pt-8">
          <Location />
        </div>
      </div>
    </>
  );
}