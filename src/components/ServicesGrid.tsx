import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Smartphone, 
  Laptop, 
  HardDrive, 
  Settings, 
  Shield, 
  ShoppingCart,
  ArrowRight,
  Clock,
  MapPin
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Transfert de données",
    description: "Migration sécurisée de vos données entre appareils (mobile, tablette, ordinateur)",
    icon: HardDrive,
    price: "À partir de 49€",
    duration: "1-2h",
    homeService: true,
    popular: false
  },
  {
    id: 2,
    title: "Installation de logiciels",
    description: "Installation et configuration de logiciels, applications et systèmes d'exploitation",
    icon: Settings,
    price: "À partir de 39€",
    duration: "30min-1h",
    homeService: true,
    popular: true
  },
  {
    id: 3,
    title: "Configuration d'appareils",
    description: "Configuration complète ordinateurs, imprimantes, routeurs et appareils connectés",
    icon: Laptop,
    price: "À partir de 59€",
    duration: "1-3h",
    homeService: true,
    popular: false
  },
  {
    id: 4,
    title: "Antivirus & Sécurité",
    description: "Installation et configuration de solutions antivirus et sécurité informatique",
    icon: Shield,
    price: "À partir de 45€",
    duration: "30min-1h",
    homeService: false,
    popular: true
  },
  {
    id: 5,
    title: "Réparation mobile/tablette",
    description: "Diagnostic et réparation de smartphones et tablettes, tous modèles",
    icon: Smartphone,
    price: "À partir de 29€",
    duration: "1-24h",
    homeService: false,
    popular: false
  },
  {
    id: 6,
    title: "Vente d'appareils",
    description: "Achat et vente d'appareils reconditionnés avec garantie incluse",
    icon: ShoppingCart,
    price: "Prix variables",
    duration: "Immédiat",
    homeService: true,
    popular: false
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos services techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solutions complètes pour tous vos besoins informatiques et technologiques, 
            avec intervention possible à domicile.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`relative group hover:shadow-lg transition-smooth animate-slide-up ${
                service.popular ? 'ring-2 ring-accent ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-4 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Populaire
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <div className="text-sm text-muted-foreground mt-1">
                        {service.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-primary">
                      {service.price}
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{service.duration}</span>
                      </div>
                      {service.homeService && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>À domicile</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant={service.popular ? "accent" : "outline"} 
                  className="w-full group"
                >
                  Réserver ce service
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center bg-gradient-to-r from-secondary to-muted p-8 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Besoin d'un service personnalisé ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis sur mesure. Nos experts vous conseilleront 
            la meilleure solution pour vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Demander un devis
            </Button>
            <Button variant="outline" size="lg">
              Assistance immédiate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;