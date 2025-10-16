import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, HeadphonesIcon } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";
import greeceImg from "@/assets/destination-greece.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";
import japanImg from "@/assets/destination-japan.jpg";
import peruImg from "@/assets/destination-peru.jpg";
import africaImg from "@/assets/destination-africa.jpg";
import icelandImg from "@/assets/destination-iceland.jpg";

const Index = () => {
  const featuredDestinations = [
    {
      id: "grecia",
      title: "Islas Griegas",
      location: "Santorini, Grecia",
      image: greeceImg,
      price: "1,299",
      duration: "8 días",
      groupSize: "2-12 personas",
      badge: "Más Popular",
    },
    {
      id: "maldivas",
      title: "Paraíso Maldivas",
      location: "Maldivas",
      image: maldivesImg,
      price: "2,499",
      duration: "10 días",
      groupSize: "2-8 personas",
      badge: "Lujo",
    },
    {
      id: "japon",
      title: "Japón Tradicional",
      location: "Tokio, Japón",
      image: japanImg,
      price: "1,799",
      duration: "12 días",
      groupSize: "2-15 personas",
    },
    {
      id: "peru",
      title: "Machu Picchu",
      location: "Cusco, Perú",
      image: peruImg,
      price: "1,499",
      duration: "9 días",
      groupSize: "2-10 personas",
    },
    {
      id: "africa",
      title: "Safari Africano",
      location: "Tanzania",
      image: africaImg,
      price: "2,199",
      duration: "11 días",
      groupSize: "2-8 personas",
      badge: "Aventura",
    },
    {
      id: "islandia",
      title: "Aurora Boreal",
      location: "Reikiavik, Islandia",
      image: icelandImg,
      price: "1,899",
      duration: "7 días",
      groupSize: "2-12 personas",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Descubre Tu Próxima Aventura
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explora destinos exóticos y crea recuerdos inolvidables con nuestros paquetes todo incluido
          </p>
          <Button variant="secondary" size="lg" className="text-lg">
            Explorar Destinos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-10 relative z-20 mb-20">
        <SearchBar />
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Destinos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los destinos más populares y experiencias únicas seleccionadas para ti
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más de 10 años de experiencia creando viajes inolvidables
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Viajes Seguros</h3>
              <p className="text-muted-foreground">
                Tu seguridad es nuestra prioridad. Todos nuestros viajes incluyen seguro completo.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mejor Precio</h3>
              <p className="text-muted-foreground">
                Garantizamos los mejores precios sin comprometer la calidad de tu experiencia.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
              <p className="text-muted-foreground">
                Nuestro equipo está disponible las 24 horas para ayudarte en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para tu próxima aventura?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contacta con nuestros expertos en viajes y planifica la experiencia perfecta
          </p>
          <Button size="lg" className="text-lg">
            Contactar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
