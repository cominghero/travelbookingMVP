import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import greeceImg from "@/assets/destination-greece.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";
import japanImg from "@/assets/destination-japan.jpg";
import peruImg from "@/assets/destination-peru.jpg";
import africaImg from "@/assets/destination-africa.jpg";
import icelandImg from "@/assets/destination-iceland.jpg";

const Destinations = () => {
  const allDestinations = [
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Todos los Destinos</h1>
          <p className="text-xl">Encuentra tu próximo viaje perfecto</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="container mx-auto px-4 -mt-10 mb-12">
        <SearchBar />
        <div className="flex justify-end mt-6">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Mostrando {allDestinations.length} destinos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
