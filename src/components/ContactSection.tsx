import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nous contacter
          </h2>
          <p className="text-xl text-muted-foreground">
            Notre équipe est disponible 24h/24 pour vous aider
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-accent"
                onClick={() => window.open('tel:0123456789', '_self')}
              >
                01 23 45 67 89
              </Button>
              <CardDescription>Support 24h/24</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-accent"
                onClick={() => window.open('mailto:contact@techsupport.fr', '_self')}
              >
                contact@techsupport.fr
              </Button>
              <CardDescription>Réponse sous 24h</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Localisation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-foreground">Chicoutimi - La Baie</div>
              <CardDescription>Saguenay, Québec</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
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