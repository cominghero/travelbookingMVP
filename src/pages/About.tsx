import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Más de 10 años creando experiencias de viaje inolvidables
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-lg text-muted-foreground mb-4">
              TravelExplorer nació en 2014 con una misión clara: hacer que los viajes exóticos sean accesibles para todos. Comenzamos como una pequeña agencia especializada en destinos mediterráneos y, gracias a la confianza de nuestros clientes, hemos crecido hasta convertirnos en una de las agencias líderes en viajes a medida por todo el mundo.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Nuestra pasión por los viajes y el compromiso con la excelencia nos han permitido crear experiencias únicas para miles de viajeros. Cada destino que ofrecemos ha sido cuidadosamente seleccionado y probado por nuestro equipo de expertos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Países visitados</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">10,000+</h3>
                <p className="text-muted-foreground">Viajeros felices</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Premios ganados</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
                <p className="text-muted-foreground">Valoración media</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nuestros Valores</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Pasión por los Viajes</h3>
                <p className="text-muted-foreground">
                  Amamos lo que hacemos y esa pasión se refleja en cada viaje que diseñamos. Cada destino es una oportunidad para crear recuerdos inolvidables.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compromiso con la Excelencia</h3>
                <p className="text-muted-foreground">
                  Nos esforzamos por superar las expectativas en cada detalle, desde la planificación hasta el último día de tu viaje.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
                <p className="text-muted-foreground">
                  Creemos en un turismo responsable que respeta las culturas locales y el medio ambiente, asegurando que las futuras generaciones también puedan disfrutar de estos destinos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                <p className="text-muted-foreground">
                  Cada viajero es único, por eso adaptamos cada experiencia a tus necesidades y preferencias personales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">¿Listo para tu próxima aventura?</h2>
            <p className="text-center text-muted-foreground">
              Nuestro equipo de expertos está listo para ayudarte a planificar el viaje de tus sueños.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
