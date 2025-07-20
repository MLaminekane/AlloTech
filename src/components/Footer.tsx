import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TechSupport</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en support technique. 
              Disponible 24h/24 avec intervention possible à domicile.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-background transition-smooth">Transfert de données</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-background transition-smooth">Installation logiciels</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-background transition-smooth">Configuration appareils</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-background transition-smooth">Antivirus & Sécurité</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-background transition-smooth">Réparation mobile</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-background transition-smooth">Vente d'appareils</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support client</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">FAQ</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Suivi de commande</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Garanties</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <button onClick={() => window.open('tel:4187184931', '_self')} className="font-medium hover:text-accent transition-colors">418 718 4931</button>
                  <div className="text-background/60">Support 24h/24</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <div>
                  <button onClick={() => window.open('mailto:contact@techsupport.fr', '_self')} className="font-medium hover:text-accent transition-colors">contact@techsupport.fr</button>
                  <div className="text-background/60">Réponse sous 24h</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <div>
                  <div className="font-medium">Chicoutimi, QC</div>
                  <div className="text-background/60">Intervention au Saguenay-Lac-Saint-Jean</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-accent" />
                <div>
                  <div className="font-medium">24h/24 - 7j/7</div>
                  <div className="text-background/60">Assistance continue</div>
                </div>
              </div>
            </div>

            <Button variant="accent" size="sm" className="w-full" onClick={() => window.open('mailto:contact@techsupport.fr', '_self')}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat en ligne
            </Button>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2024 TechSupport. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-smooth">Mentions légales</a>
              <a href="#" className="hover:text-background transition-smooth">CGV</a>
              <a href="#" className="hover:text-background transition-smooth">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;