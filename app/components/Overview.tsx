// app/components/Overview.tsx
import React from "react";
import { LuHouse } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { MdBalcony, MdDiversity2, MdDining, MdLiving } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";

const StatCard = ({ icon: Icon, label, value, valueClass = "text-gray-700" }: any) => (
  <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center space-y-1">
    <Icon className="text-red-600 text-2xl" />
    <div className="text-sm font-semibold text-gray-800">{label}</div>
    <div className={`font-bold ${valueClass}`}>{value}</div>
  </div>
);

export default function Overview() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        <StatCard icon={LuHouse} label="Bedrooms" value="4" />
        <StatCard icon={FaBath} label="Bathrooms" value="4" />
        <StatCard icon={MdBalcony} label="Balconies" value="3" />
        <StatCard icon={MdDiversity2} label="Drawing Room" value="Available" valueClass="text-gray-600" />
        <StatCard icon={MdDining} label="Dining Room" value="Available" valueClass="text-gray-600" />
        <StatCard icon={FaKitchenSet} label="Kitchen" value="Big Kitchen" />
        <StatCard icon={MdLiving} label="Family Living" value="Available" valueClass="text-gray-600" />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">Property Description</h2>
        <p className="text-md text-gray-700 leading-relaxed bg-gray-50 p-5 rounded-lg">
          This is an amazing property located in Plot-1A, Road: 7-8, Avenue Road, Shornail Abashon. It features a beautiful B+G+M+14 building with a total area of 25+ Katha. The flat size is 2450 sft. The property is currently Land Share. Contact us today to schedule a viewing or for more information about this exceptional property.
        </p>
      </div>
    </section>
  );
}