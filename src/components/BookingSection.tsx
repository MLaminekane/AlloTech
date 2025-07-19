import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    homeService: false,
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const services = [
    "Transfert de données",
    "Installation de logiciels", 
    "Configuration d'appareils",
    "Antivirus & Sécurité",
    "Réparation mobile/tablette",
    "Vente d'appareils",
    "Service personnalisé"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Réservation confirmée !",
      description: "Nous vous contacterons sous 24h pour confirmer votre rendez-vous.",
    });

    setIsSubmitting(false);
    // Reset form
    setFormData({
      service: "",
      date: "",
      time: "",
      homeService: false,
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Réserver votre intervention
            </h2>
            <p className="text-xl text-muted-foreground">
              Planifiez facilement votre service technique en quelques étapes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulaire de réservation */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Détails de la réservation</span>
                  </CardTitle>
                  <CardDescription>
                    Remplissez les informations ci-dessous pour planifier votre intervention
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service et options */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service demandé *</Label>
                        <Select 
                          value={formData.service} 
                          onValueChange={(value) => setFormData({...formData, service: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir un service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="homeService">Type d'intervention</Label>
                        <Select 
                          value={formData.homeService ? "home" : "office"} 
                          onValueChange={(value) => setFormData({...formData, homeService: value === "home"})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Lieu d'intervention" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office">En atelier</SelectItem>
                            <SelectItem value="home">À domicile (+15€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Date et heure */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date souhaitée *</Label>
                        <Input
                          id="date"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Heure préférée *</Label>
                        <Select 
                          value={formData.time} 
                          onValueChange={(value) => setFormData({...formData, time: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir l'heure" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Informations personnelles */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          placeholder="Votre nom et prénom"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>

                    {/* Description du problème */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Description du problème (optionnel)</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre problème ou vos besoins spécifiques..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    {/* Bouton de soumission */}
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting || !formData.service || !formData.date || !formData.name || !formData.email || !formData.phone}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Confirmer la réservation"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informations complémentaires */}
            <div className="space-y-6">
              {/* Support 24h/24 */}
              <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    <span>Support immédiat</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Besoin d'aide urgente ? Contactez notre support 24h/24
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      01 23 45 67 89
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Chat en ligne
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tarifs */}
              <Card className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Infos tarifs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Intervention atelier</span>
                    <span className="font-medium">À partir de 29€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Déplacement domicile</span>
                    <span className="font-medium">+15€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diagnostic gratuit</span>
                    <span className="font-medium text-success">Inclus</span>
                  </div>
                  <div className="pt-2 border-t border-border text-xs text-muted-foreground">
                    * Tarifs TTC. Devis gratuit et sans engagement
                  </div>
                </CardContent>
              </Card>

              {/* Garanties */}
              <Card className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                <CardContent className="pt-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Garantie 30 jours sur toutes interventions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Paiement sécurisé après intervention</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Techniciens certifiés et assurés</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;