"use client";
export default function ContactForm() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">Get More Info</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg"
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
