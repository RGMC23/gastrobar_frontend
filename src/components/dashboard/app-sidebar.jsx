"use client";

import * as React from "react";
// Importar los iconos necesarios para NUESTRAS features
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  BookMarked,
  Clipboard,
  Table,
  Building, // Icono para el negocio
  // ... otros iconos ...
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user"; // Re-importar NavUser
import {
  Sidebar,
  SidebarContent,
  SidebarFooter, // Re-importar SidebarFooter
  SidebarHeader, // Re-importar SidebarHeader
  // SidebarRail // SidebarRail es interno
} from "@/components/ui/sidebar"; 

import {Button} from "@/components/ui/button"; // Asegúrate de que el botón esté importado correctamente

// Definir los elementos de navegación del dashboard
const dashboardNavItems = [
  // ... (tus items existentes: Resumen, Menú, Pedidos, etc.) ...
  {
    title: "Resumen",
    href: "/dashboard",
    icon: LayoutDashboard,
    items: [],
  },
  {
    title: "Menú",
    href: "/dashboard/menu-items",
    icon: BookMarked,
    items: [],
  },
  {
    title: "Pedidos",
    href: "/dashboard/orders",
    icon: Clipboard,
    items: [],
  },
  {
    title: "Mesas",
    href: "/dashboard/tables",
    icon: Table,
    items: [],
  },
  {
    title: "Empleados",
    href: "/dashboard/employees",
    icon: Users,
    items: [],
  },
  {
    title: "Tareas",
    href: "/dashboard/tasks",
    icon: ClipboardList,
    items: [],
  },
  {
    title: "Negocio",
    href: "/dashboard/business",
    icon: Building,
    items: [],
  },
];

// Datos de ejemplo para TeamSwitcher y NavUser
const mainBusiness ={
    label: "Gastrobar ",
    logo: Building
  };
const exampleUser = {
  name: "Usuario Admin",
  email: "admin@ejemplo.com",
  // avatar: "/path/to/avatar.jpg", // Opcional
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
        {/* Reemplaza TeamSwitcher con un elemento que muestre el negocio */}
        {/* Usamos un Button fantasma para un estilo similar, pero no es interactivo */}
        <Button
          variant="ghost"
          className="w-full justify-start px-3 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center" // Ajusta padding/justificación para modo icono
          aria-label={mainBusiness.label} // Accesibilidad
          disabled // Para que no parezca clickeable
        >
          <mainBusiness.logo className="mr-2 h-4 w-4 group-data-[collapsible=icon]:mr-0" /> {/* Icono */}
          <span className="group-data-[collapsible=icon]:hidden">{mainBusiness.label}</span> {/* Nombre, oculto en modo icono */}
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={dashboardNavItems} groupLabel="Gestión" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={exampleUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
