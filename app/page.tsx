import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import FloatingButtons from "./components/FloatingButtons";
import PropertyTabs from "./components/PropertyTabs";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <PropertyTabs />
      <ContactForm />
      <FloatingButtons />
    </>
  );
}
