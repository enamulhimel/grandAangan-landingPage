// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "/gallery-1.jpg",
//   "/gallery-2.jpg",
//   "/gallery-3.jpg",
//   "/gallery-4.jpg",
//   "/gallery-5.jpg",
//   "/gallery-6.jpg",
//   "/gallery-7.jpg",
// ];

// export default function GallerySection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="w-full bg-[#F4F4F4] py-8 px-2 sm:px-4 overflow-hidden">

//       {/* ✅ Responsive Layout */}
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 overflow-hidden">

//         {/* ✅ LEFT GALLERY SECTION */}
//         <div className="w-full lg:w-4/6 bg-white shadow-lg rounded-xl p-3 sm:p-4 overflow-hidden">

//           {/* Main Image */}
//           <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-[460px] rounded-xl overflow-hidden">

//             {/* Left arrow */}
//             <button
//               onClick={handlePrev}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 sm:p-3 z-20"
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
//             </button>

//             {/* Right arrow */}
//             <button
//               onClick={handleNext}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 sm:p-3 z-20"
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
//             </button>

//             <Image
//               src={images[activeIndex]}
//               alt="Gallery image"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* ✅ Thumbnails — wrapped + no scroll */}
//           <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">

//             {images.map((img, index) => (
//               <button
//                 key={img}
//                 onClick={() => setActiveIndex(index)}
//                 className={`relative w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-lg overflow-hidden border-2 ${
//                   activeIndex === index ? "border-red-500" : "border-transparent"
//                 }`}
//               >
//                 <Image
//                   src={img}
//                   alt="Thumbnail"
//                   fill
//                   className="object-cover"
//                 />
//               </button>
//             ))}

//           </div>

//         </div>

//         {/* ✅ RIGHT INFO SECTION */}
//         <div className="w-full lg:w-2/6 bg-white shadow-lg rounded-xl p-5 flex flex-col">

//           <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
//             The Grand Aangan (2450 sft)
//           </h1>

//           <p className="text-lg sm:text-xl text-gray-500 my-2">
//             Shornali Abashon
//           </p>

//           <hr className="text-gray-300 my-6" />

//           {/* ✅ Responsive Grid */}
//           <div className="grid grid-cols-2 gap-4">

//             <div className="bg-gray-100 p-4 md:p-5 rounded-md">
//               <p className="text-gray-500">Land Area</p>
//               <p className="font-bold">25+ Katha</p>
//             </div>

//             <div className="bg-gray-100 p-4 md:p-5 rounded-md">
//               <p className="text-gray-500">Flat Size</p>
//               <p className="font-bold">2450 sft</p>
//             </div>

//             <div className="bg-gray-100 p-4 md:p-5 rounded-md">
//               <p className="text-gray-500">Building Type</p>
//               <p className="font-bold">B+G+M+14</p>
//             </div>

//             <div className="bg-gray-100 p-4 md:p-5 rounded-md">
//               <p className="text-gray-500">Status</p>
//               <p className="font-bold">Land Share</p>
//             </div>

//           </div>

//           <hr className="text-gray-300 my-6" />

//           <button className="w-full bg-red-600 text-white py-3 rounded-md text-lg font-semibold mt-auto cursor-pointer">
//             Book a visit
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
  "/gallery-7.jpg",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: null as Date | null,
    time: null as Date | null,
  });
  const [status, setStatus] = useState("");

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Format date and time
    const formattedDate = formData.date ? formData.date.toLocaleDateString() : "";
    const formattedTime = formData.time ? formData.time.toLocaleTimeString() : "";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      date: formattedDate,
      time: formattedTime,
    };

    emailjs
      .send(
        "service_4irzyfj", // Replace with your EmailJS Service ID (e.g., service_abc123)
        "template_ppfk37f", // Replace with your EmailJS Template ID (e.g., template_def456)
        templateParams,
        "PtI8wiqrzGPP0UqQc" // Replace with your EmailJS User ID (e.g., user_ghi789)
      )
      .then(
        () => {
          setStatus("Request sent successfully!");
          setTimeout(() => {
            setIsModalOpen(false);
            setStatus("");
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
              date: null,
              time: null,
            });
          }, 2000);
        },
        (error) => {
          setStatus("Failed to send. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="w-full bg-[#F4F4F4] py-8 px-2 sm:px-4 overflow-hidden">
      {/* ✅ Responsive Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 overflow-hidden">
        {/* ✅ LEFT GALLERY SECTION */}
        <div className="w-full lg:w-4/6 bg-white shadow-lg rounded-xl p-3 sm:p-4 overflow-hidden">
          {/* Main Image */}
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-[520px] rounded-xl overflow-hidden">
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
                className={`relative w-20 h-14 sm:w-24 sm:h-16 md:w-16 md:h-12 rounded-lg overflow-hidden border-2 ${
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
            The Grand Aangan 
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
              <p className="font-bold">A & B: 2450 SFT</p>
              <p className="font-bold">C & D: 2050 SFT</p>
              <p className="font-bold"> Sky Villa: 4900 SFT</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Bedrooms</p>
              <p className="font-bold">4</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Building Type</p>
              <p className="font-bold">B+G+M+14</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Status</p>
              <p className="font-bold">Land Share</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-5 rounded-md">
              <p className="text-gray-500">Facing</p>
              <p className="font-bold">South Facing</p>
              <p className="font-bold">North Facing</p>
              <p className="font-bold">West Facing</p>
            </div>
          </div>
          <hr className="text-gray-300 my-6" />
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-red-600 text-white py-3 rounded-md text-lg font-semibold mt-auto cursor-pointer"
          >
            Book a visit
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Book a Visit</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
              <div className="flex gap-4">
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => setFormData({ ...formData, date })}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Appointment Date"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                  required
                />
                <DatePicker
                  selected={formData.time}
                  onChange={(time) => setFormData({ ...formData, time })}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="Appointment Time"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-md text-lg font-semibold"
              >
                Submit
              </button>
              {status && <p className="text-center text-sm mt-2">{status}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
