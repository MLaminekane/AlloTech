import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Laptop, Monitor, Tablet, Filter } from "lucide-react";

// Sanitization utility for XSS prevention
const sanitizeString = (str: string): string => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
    .slice(0, 100); // Limit length
};

interface Product {
  id: string;
  name: string;
  price: number;
  condition: string;
  category: string;
  brand: string;
  image: string;
  specs?: string[];
}

const UsedProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Sample products data
  const products: Product[] = [
    {
      id: "1",
      name: "iPhone 13 Pro",
      price: 899,
      condition: "Excellent",
      category: "mobile",
      brand: "apple",
      image: "/placeholder.svg",
      specs: ["128GB", "iOS 17", "Face ID"]
    },
    {
      id: "2",
      name: "Samsung Galaxy S23",
      price: 749,
      condition: "Très bon",
      category: "mobile",
      brand: "samsung",
      image: "/placeholder.svg",
      specs: ["256GB", "Android 14", "5G"]
    },
    {
      id: "3",
      name: "Google Pixel 7",
      price: 599,
      condition: "Bon",
      category: "mobile",
      brand: "google",
      image: "/placeholder.svg",
      specs: ["128GB", "Android 14", "Pure Android"]
    },
    {
      id: "4",
      name: "MacBook Pro 14\"",
      price: 1899,
      condition: "Excellent",
      category: "laptop",
      brand: "apple",
      image: "/placeholder.svg",
      specs: ["M2 Pro", "16GB RAM", "512GB SSD"]
    },
    {
      id: "5",
      name: "ThinkPad X1 Carbon",
      price: 1299,
      condition: "Très bon",
      category: "laptop",
      brand: "lenovo",
      image: "/placeholder.svg",
      specs: ["Intel i7", "16GB RAM", "1TB SSD"]
    },
    {
      id: "6",
      name: "Dell XPS 13",
      price: 999,
      condition: "Bon",
      category: "laptop",
      brand: "dell",
      image: "/placeholder.svg",
      specs: ["Intel i5", "8GB RAM", "256GB SSD"]
    }
  ];

  const categories = [
    { id: "all", name: "Tous", icon: Filter },
    { id: "mobile", name: "Mobiles", icon: Smartphone },
    { id: "laptop", name: "PC Portables", icon: Laptop },
    { id: "tablet", name: "Tablettes", icon: Tablet },
    { id: "desktop", name: "PC Bureau", icon: Monitor }
  ];

  const brands = {
    mobile: [
      { id: "all", name: "Toutes marques" },
      { id: "apple", name: "Apple (iOS)" },
      { id: "samsung", name: "Samsung" },
      { id: "google", name: "Google Pixel" },
      { id: "xiaomi", name: "Xiaomi" },
      { id: "oneplus", name: "OnePlus" }
    ],
    laptop: [
      { id: "all", name: "Toutes marques" },
      { id: "apple", name: "Apple MacBook" },
      { id: "dell", name: "Dell" },
      { id: "hp", name: "HP" },
      { id: "lenovo", name: "Lenovo" },
      { id: "asus", name: "ASUS" },
      { id: "acer", name: "Acer" }
    ]
  };

  // Secure filtering with input sanitization
  const filteredProducts = products.filter(product => {
    const sanitizedSearch = sanitizeString(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
    const matchesSearch = sanitizedSearch === "" || 
      product.name.toLowerCase().includes(sanitizedSearch) ||
      product.brand.toLowerCase().includes(sanitizedSearch);
    
    return matchesCategory && matchesBrand && matchesSearch;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeString(e.target.value);
    setSearchTerm(sanitizedValue);
  };

  const handleContactForProduct = (productId: string) => {
    // Sanitize product ID before using
    const sanitizedId = sanitizeString(productId);
    const product = products.find(p => p.id === sanitizedId);
    if (product) {
      const message = `Bonjour, je suis intéressé(e) par le produit: ${sanitizeString(product.name)} au prix de ${product.price}$ CAD.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`mailto:contact@techsupport.fr?subject=Demande produit usagé&body=${encodedMessage}`, '_self');
    }
  };

  return (
    <section id="used-products" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Produits Usagés de Qualité
          </h2>
          <p className="text-xl text-muted-foreground">
            Appareils reconditionnés et testés, garantie incluse
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={handleSearchChange}
                maxLength={100}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filtrer par marque" />
              </SelectTrigger>
              <SelectContent>
                {(selectedCategory === "all" ? brands.mobile : brands[selectedCategory as keyof typeof brands] || brands.mobile).map((brand) => (
                  <SelectItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-muted-foreground">Image produit</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <Badge variant="secondary">{product.condition}</Badge>
                        </div>
                        <CardDescription>
                          Marque: {product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {product.specs && (
                          <ul className="text-sm text-muted-foreground mb-4">
                            {product.specs.map((spec, index) => (
                              <li key={index}>• {spec}</li>
                            ))}
                          </ul>
                        )}
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-accent">{product.price}$ CAD</span>
                          <Button onClick={() => handleContactForProduct(product.id)}>
                            Contacter
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Aucun produit trouvé avec ces filtres.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Card className="inline-block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Garantie et Service</h3>
              <p className="text-muted-foreground">
                Tous nos produits usagés sont testés et garantis 30 jours. 
                Support technique inclus.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UsedProductsSection;