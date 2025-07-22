import { Button } from "@/components/ui/button";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">AlloTech</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </button>
            {/* <Link to="/used-products" className="text-muted-foreground hover:text-foreground transition-smooth">
              Produits usagés
            </Link> */}
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-10 bg-background/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4 bg-card/50 backdrop-blur-sm rounded-lg shadow-xl p-6 border border-border/50">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left py-3 px-4 text-muted-foreground hover:text-foreground transition-smooth border-b border-border"
              >
                Services
              </button>
              {/* <Link 
                to="/used-products" 
                className="py-3 px-4 text-muted-foreground hover:text-foreground transition-smooth border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produits usagés
              </Link> */}
              <button 
                onClick={() => scrollToSection('booking')} 
                className="text-left py-3 px-4 text-muted-foreground hover:text-foreground transition-smooth border-b border-border"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left py-3 px-4 text-muted-foreground hover:text-foreground transition-smooth border-b border-border"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-3 px-4 text-muted-foreground hover:text-foreground transition-smooth border-b border-border"
              >
                Contact
              </button>
              
              {/* Mobile actions */}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start" 
                  onClick={() => window.open('tel:0123456789', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  24h/24
                </Button>
                <Button 
                  variant="accent" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => scrollToSection('booking')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Réserver
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;