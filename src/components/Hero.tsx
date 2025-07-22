import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-tech-support.jpg";


const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <section className="pt-16 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
            {/* Pattern de points subtil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsla(210,40%,98%,0.15)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div> 

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Support technique
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  professionnel
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Des solutions techniques expertes pour tous vos appareils. 
                Réservez votre intervention en quelques clics, 
                disponible 24h/24 avec option déplacement à domicile.
              </p>
            </div>

            {/* Points forts */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-card rounded-lg shadow-sm">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Support 24h/24</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-card rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">À domicile</span>
              </div>
              {/* <div className="flex items-center space-x-3 p-3 bg-card rounded-lg shadow-sm">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Garantie incluse</span>
              </div> */}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" onClick={scrollToBooking}>
                Réserver maintenant
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="services" size="lg" className="cursor-pointer" onClick={scrollToServices}>
                Voir nos services
              </Button>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Disponibilité</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Taux de réussite</div>
              </div>
            </div>
          </div>

          {/* Image hero */}
          <div className="relative animate-slide-up lg:animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Équipe de support technique professionnel"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
            
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-accent animate-scale-in">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-semibold">En ligne maintenant</div>
                  <div className="text-xs text-muted-foreground">Assistance immédiate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;