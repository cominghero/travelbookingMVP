import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Check, Clock, Star } from "lucide-react";
import greeceImg from "@/assets/destination-greece.jpg";

const DestinationDetail = () => {
  const { id } = useParams();

  // Mock data - in real app would fetch based on id
  const destination = {
    title: "Islas Griegas - Santorini",
    location: "Santorini, Grecia",
    image: greeceImg,
    price: "1,299",
    duration: "8 días / 7 noches",
    groupSize: "2-12 personas",
    rating: "4.9",
    reviews: "127",
    description:
      "Descubre la magia de las islas griegas en este viaje inolvidable a Santorini. Explora playas de arena negra, pueblos blancos icónicos y disfruta de las puestas de sol más espectaculares del Mediterráneo.",
  };

  const highlights = [
    "Vuelos internacionales incluidos",
    "Hotel 4 estrellas con desayuno",
    "Tours guiados por expertos locales",
    "Excursión en barco por la caldera",
    "Cata de vinos en viñedos locales",
    "Seguro de viaje completo",
    "Visita a playas exclusivas",
    "Cena tradicional griega",
  ];

  const itinerary = [
    { day: "Día 1", title: "Llegada a Santorini", description: "Traslado al hotel y bienvenida" },
    { day: "Día 2", title: "Tour por Oia", description: "Explora el famoso pueblo blanco" },
    { day: "Día 3", title: "Excursión en barco", description: "Navega por la caldera volcánica" },
    { day: "Día 4", title: "Playas y relax", description: "Día libre para disfrutar las playas" },
    { day: "Día 5", title: "Cata de vinos", description: "Visita a viñedos tradicionales" },
    { day: "Día 6", title: "Akrotiri", description: "Ruinas arqueológicas antiguas" },
    { day: "Día 7", title: "Día libre", description: "Explora a tu ritmo" },
    { day: "Día 8", title: "Despedida", description: "Traslado al aeropuerto" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <Badge className="mb-4 bg-secondary">Más Popular</Badge>
              <h1 className="text-4xl font-bold mb-4">{destination.title}</h1>
              <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
                  <span>{destination.rating} ({destination.reviews} reseñas)</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                {destination.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Lo que incluye</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Itinerario</h2>
                <div className="space-y-4">
                  {itinerary.map((item, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                      <div className="flex items-center mb-1">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-semibold">{item.day}</span>
                      </div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Booking */}
          <div>
            <Card className="sticky top-20 p-6">
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">{destination.price}€</span>
                  <span className="text-muted-foreground ml-2">por persona</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Duración</span>
                  </div>
                  <span className="font-medium">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Grupo</span>
                  </div>
                  <span className="font-medium">{destination.groupSize}</span>
                </div>
              </div>

              <Button className="w-full mb-4" size="lg">
                Reservar Ahora
              </Button>
              <Button variant="outline" className="w-full">
                Contactar Asesor
              </Button>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  ✓ Cancelación gratuita hasta 30 días antes
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
