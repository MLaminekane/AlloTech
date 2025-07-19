import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Gérer les ancres dans l'URL au chargement de la page
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Petit délai pour s'assurer que la page est chargée
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesGrid />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
