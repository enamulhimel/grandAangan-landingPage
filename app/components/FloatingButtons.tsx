export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3">
      <a href="https://wa.me/yourNumber" className="bg-green-500 text-white p-4 rounded-full shadow-xl">
        WhatsApp
      </a>
      <a href="tel:0123456789" className="bg-blue-500 text-white p-4 rounded-full shadow-xl">
        Call Now
      </a>
    </div>
  );
}
