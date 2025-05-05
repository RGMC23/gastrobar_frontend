import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted/40">
      <p className="text-xs text-muted-foreground">
        &copy; {currentYear} Gastrobar. Todos los derechos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="/terms" className="text-xs hover:underline underline-offset-4">
          Términos de Servicio
        </Link>
        <Link to="/privacy" className="text-xs hover:underline underline-offset-4">
          Política de Privacidad
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;