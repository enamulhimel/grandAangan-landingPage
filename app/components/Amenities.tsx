// app/components/Amenities.tsx
import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const amenities = [
  ["drawing", "family living", "Sub-station", "CC Camera", "Prayer Zone", "Gardening"],
  ["dining", "Car Parking", "Generator", "Conference Room", "BBQ Zone", "Swimming Pool"],
  ["kitchen", "Servant Bed", "Elevator", "Health Club", "Child Corner"],
];

export default function Amenities() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Property Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
        {amenities.map((col, i) => (
          <ul key={i} className="space-y-3">
            {col.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-red-600 font-bold text-sm"><FaAngleRight /></span>
                <span className="capitalize text-lg">{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}