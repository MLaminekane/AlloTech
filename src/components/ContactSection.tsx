import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 text-foreground border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent "></div>

      {/* Pattern de points subtil comme dans le footer */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsla(210,40%,98%,0.15)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div>
  
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nous contacter
          </h2>
          <p className="text-xl text-muted-foreground">
            Notre équipe est disponible 24h/24 pour vous aider
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <Card className="text-center bg-transparent/10 transition-smooth">
            <CardHeader>
              <Phone className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="ghost" 
                className="text-foreground "
                onClick={() => window.open('tel:4187184931', '_self')}
              >
                418 718 4931
              </Button>
              <CardDescription>Support 24h/24</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center bg-transparent/10 transition-smooth">
            <CardHeader>
              <Mail className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="ghost" 
                className="text-foreground "
                onClick={() => window.open('mailto:contact@techsupport.ca', '_self')}
              >
                contact@techsupport.ca
              </Button>
              <CardDescription>Réponse sous 24h</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center bg-transparent/10 transition-smooth">
            <CardHeader>
              <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Localisation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-foreground">Chicoutimi - La Baie</div>
              <CardDescription>Saguenay, Québec</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center bg-transparent/10 transition-smooth">
            <CardHeader>
              <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-foreground">24h/24 - 7j/7</div>
              <CardDescription>Assistance continue</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;