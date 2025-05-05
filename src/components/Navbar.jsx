import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Asegúrate que la ruta del alias @ sea correcta
import { MountainIcon } from "lucide-react"; // Un ícono genérico para el logo

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("authToken"); // Verifica si el usuario está logueado

  const handleAuthAction = () => {
    if (isAuthenticated) {
      localStorage.removeItem("authToken");
      navigate("/"); // Redirige a home después de logout
      window.location.reload(); // Recarga para asegurar estado limpio
    } else {
      navigate("/login");
    }
  };

  return (
    // Usar justify-between para espaciar los elementos principales
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-b">
      {/* Izquierda: Logo */}
      <Link to="/" className="flex items-center justify-center">
        <MountainIcon className="h-6 w-6" />{" "}
        <span className="sr-only">Gastrobar</span>
        <span className="ml-2 font-semibold text-lg">Gastrobar</span>
      </Link>

      {/* Centro: Navegación - Oculta en pantallas pequeñas, centrada en medianas y grandes */}
      <nav className="hidden md:flex gap-4 sm:gap-6 items-center flex-grow justify-center">
        <Link
          to="/"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Inicio
        </Link>
        <Link
          to="/Menuitems"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Menú
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contacto
        </Link>
        {isAuthenticated && (
          <Link
            to="/dashboard"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Dashboard
          </Link>
        )}
      </nav>

      {/* Derecha: Botón de Autenticación */}
      {/* Envolver el botón en un div asegura que justify-between funcione correctamente */}
      <div className="flex items-center">
        <Button onClick={handleAuthAction} variant="outline" size="sm">
          {isAuthenticated ? "Cerrar Sesión" : "Iniciar Sesión"}
        </Button>
        {/* Aquí podrías añadir un botón para menú móvil en el futuro */}
      </div>
    </header>
  );
}

export default Navbar;
