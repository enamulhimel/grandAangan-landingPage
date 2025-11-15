
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import {
  Mail,
  User,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  Send,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");


    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reason: formData.reason,
    };

    try {
      await emailjs.send(
        "service_k1e7onb",
        "template_earudcn",
        templateParams,
        "PtI8wiqrzGPP0UqQc"
      );

      setStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          reason: "",
          
        });
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div className="relative">
  <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
  <select
    name="reason"
    value={formData.reason || ""}
    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
    required
    className="w-full appearance-none pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-white text-gray-700"
  >
    <option value="" disabled>
      Reason to Contact
    </option>
    <option value="Buy Property">Buy Property</option>
    <option value="Investment">Investment</option>
    <option value="Land Sell">Land Sell</option>
  </select>
</div>


        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
        >
          {status === "loading" ? (
            <>Sending...</>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-600 text-center font-medium">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center font-medium">
            ❌ Failed to send. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
