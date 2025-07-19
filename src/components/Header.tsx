import { Button } from "@/components/ui/button";
import { Menu, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TechSupport</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-muted-foreground hover:text-foreground transition-smooth">
              Tarifs
            </button>
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-smooth">
              À propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => window.open('tel:0123456789', '_self')}>
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden lg:inline">24h/24</span>
            </Button>
            <Button variant="accent" size="sm" onClick={() => scrollToSection('booking')}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Réserver
            </Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;