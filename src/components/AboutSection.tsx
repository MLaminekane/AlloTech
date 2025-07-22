import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Shield, 
  Wrench,
  Star,
  CheckCircle,
  Phone
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      value: "100+",
      label: "Clients satisfaits",
      description: "Depuis notre création"
    },
    {
      icon: Clock,
      value: "24h/24",
      label: "Disponibilité",
      description: "7 jours sur 7"
    },
    {
      icon: Award,
      value: "98%",
      label: "Taux de satisfaction",
      description: "Clients recommandent"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Sécurité & Confidentialité",
      description: "Protection totale de vos données personnelles et professionnelles pendant nos interventions."
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Intervention rapide avec un délai de réponse garanti sous 24h maximum."
    },
    {
      icon: CheckCircle,
      title: "Qualité certifiée",
      description: "Interventions garanties 15 jours pour votre tranquillité."
    },
    {
      icon: MapPin,
      title: "Service de proximité",
      description: "Basés au Saguenay, nous intervenons dans toute la région Lac-Saint-Jean."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-16 bg-background text-foreground border-t border-border/50">
      {/* Pattern de points subtil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsla(210,40%,98%,0.15)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            À propos d'AlloTech
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Votre partenaire technologique de confiance au Saguenay-Lac-Saint-Jean 
          </p>
        </div>

        {/* Notre histoire */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground">Notre mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Chez <span className="text-foreground font-semibold">AlloTech</span>, nous croyons que la technologie doit simplifier votre vie, pas la compliquer. 
              Depuis notre création, nous nous spécialisons dans le support technique personnalisé pour particuliers et petites entreprises.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre équipe de techniciens certifiés intervient rapidement pour résoudre tous vos problèmes informatiques, 
              que ce soit pour un transfert de données, une installation de logiciel, ou la configuration d'appareils connectés.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Basés à <span className="text-accent font-medium">Chicoutimi</span>, nous desservons toute la région du Saguenay-Lac-Saint-Jean 
              avec des interventions possibles à domicile.
            </p>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-foreground">Pourquoi nous choisir ?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expertise locale</h4>
                  <p className="text-sm text-muted-foreground">Connaissance parfaite des besoins technologiques de notre région.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Tarifs transparents</h4>
                  <p className="text-sm text-muted-foreground">Diagnostic gratuit et devis détaillé avant toute intervention.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Service personnalisé</h4>
                  <p className="text-sm text-muted-foreground">Chaque intervention est adaptée à vos besoins spécifiques.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Garantie de qualité</h4>
                  <p className="text-sm text-muted-foreground">Toutes nos interventions sont garanties 15 jours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-6 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nos valeurs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Nos valeurs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="p-2 bg-accent/10 rounded-lg w-fit">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Zone de contact */}
        <div className="text-center bg-gradient-to-r from-secondary to-muted p-8 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Prêt à résoudre vos problèmes techniques ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est disponible 24h/24 pour vous accompagner. 
            Diagnostic gratuit et intervention rapide garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={scrollToBooking}>
              Réserver une intervention
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('tel:4187184931', '_self')}>
              <Phone className="h-4 w-4 mr-2" />
              Appeler maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
