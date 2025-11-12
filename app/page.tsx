import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import FloatingButtons from "./components/FloatingButtons";
import PropertyTabs from "./components/PropertyTabs";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <PropertyTabs />
      <ContactForm />
      <Footer/>
      {/* <FloatingButtons /> */}
    </>
  );
}
