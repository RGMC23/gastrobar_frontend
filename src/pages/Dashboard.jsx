import { Link, Outlet } from "react-router-dom"; // Importar Outlet
import { AppSidebar } from "../components/dashboard/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Asegúrate que la ruta del alias @ sea correcta
import { Separator } from "@/components/ui/separator"; // Asegúrate que la ruta del alias @ sea correcta
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"; // Asegúrate que la ruta del alias @ sea correcta

export default function Dashboard() {
  return (
    // SidebarProvider envuelve todo para que los componentes internos funcionen
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden w-full">
        {" "}
        {/* Contenedor Flex principal */}
        <AppSidebar className="h-full" /> {/* Sidebar ocupa altura completa */}
        {/* SidebarInset contiene el contenido principal que se ajusta */}
        <SidebarInset className="flex flex-col flex-1 overflow-y-auto">
          {" "}
          {/* Permitir scroll vertical */}
          {/* Header opcional dentro del contenido principal */}
          <header className="sticky top-0 z-10 bg-background flex h-14 lg:h-[60px] items-center gap-4 border-b px-6">
            <SidebarTrigger className="-ml-1" />{" "}
            {/* Botón para colapsar/expandir en móvil/icono */}
            {/* Breadcrumb de ejemplo - Necesitaría lógica para ser dinámico */}
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/dashboard">Panel Admon</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {/* Aquí podrías añadir más items basados en la ruta actual */}
                {/* <BreadcrumbSeparator />
                 <BreadcrumbItem>
                   <BreadcrumbPage>Página Actual</BreadcrumbPage>
                 </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
            {/* Puedes añadir más elementos al header aquí (ej. perfil de usuario) */}
          </header>
          {/* Contenido principal donde se renderizan las sub-rutas */}
          {/* Añadir w-full para asegurar que ocupe todo el ancho */}
          <main className="flex-1 w-full p-4 md:p-6 lg:p-8">
            <Outlet />{" "}
            {/* Aquí se cargarán las páginas (DashboardOverview, ManageMenuItems, etc.) */}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
