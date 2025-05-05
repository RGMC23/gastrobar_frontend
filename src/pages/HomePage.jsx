import Navbar from "@/components/Navbar"; // Asegúrate que la ruta del alias @ sea correcta
import Footer from "@/components/Footer"; // Asegúrate que la ruta del alias @ sea correcta
import { Button } from "@/components/ui/button"; // Asegúrate que la ruta del alias @ sea correcta
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Asegúrate que la ruta del alias @ sea correcta
import { UtensilsCrossed, Coffee, GlassWater } from "lucide-react"; // Íconos para servicios
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

function HomePage() {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar ocupa todo el ancho */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-background to-primary/10 relative">
          <img
            src="/src/assets/hero_principal.webp"
            alt="Hero Principal"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          {/* Contenedor centrado con ancho máximo */}
          <div className="relative container px-4 md:px-6 max-w-[1240px] mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                  Bienvenido a Gastrobar
                </h1>
                <p className="text-white mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Disfruta de una experiencia culinaria única con nuestros
                  platos innovadores, cócteles artesanales y un ambiente
                  acogedor.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" onClick={() => navigate('/Menuitems')}>Ver Menú</Button>{" "}
                {}
                <Button variant="outline" size="lg">
                  Reservar Mesa
                </Button>{" "}
                {/* Podría enlazar a /reservations */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          {/* Contenedor centrado con ancho máximo */}
          <div className="container px-4 md:px-6 max-w-[1240px] mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Nuestros Servicios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Qué Ofrecemos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desde cenas íntimas hasta eventos especiales, tenemos algo
                  para cada ocasión.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cocina Exquisita
                  </CardTitle>
                  <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Platos elaborados con ingredientes frescos y de temporada,
                    fusionando tradición y vanguardia.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Bar de Cócteles
                  </CardTitle>
                  <GlassWater className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Una selección de cócteles clásicos y creaciones de autor
                    preparadas por nuestros expertos mixólogos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Ambiente Único
                  </CardTitle>
                  <Coffee className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Un espacio diseñado para el confort y el disfrute, perfecto
                    para relajarse o celebrar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Puedes añadir más secciones aquí (ej. Testimonios, Galería) */}
        {/* Asegúrate de envolver su contenido principal en <div className="container px-4 md:px-6 max-w-[1240px] mx-auto"> también */}
      </main>
      <Footer /> {/* Footer ocupa todo el ancho */}
    </div>
  );
}

export default HomePage;
