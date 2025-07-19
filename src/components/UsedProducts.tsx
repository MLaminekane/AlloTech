import UsedProductsSection from "@/components/UsedProductsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-tech-support.jpg";

const UsedProducts = () => (
  <main className="min-h-screen bg-background">
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow pt-16">
        <UsedProductsSection />
      </div>
      <Footer />
    </div>
  </main>
);

export default UsedProducts;
