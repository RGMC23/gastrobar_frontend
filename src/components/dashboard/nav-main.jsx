"use client";

import { Link, useLocation } from "react-router-dom"; // Importar Link y useLocation
import { cn } from "@/lib/utils"; // Asegúrate que la ruta del alias @ sea correcta
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"; // Asegúrate que la ruta del alias @ sea correcta

// Props ahora es 'items' que contendrá nuestra estructura de navegación
export function NavMain({ items, groupLabel = "Navegación" }) {
  // Añadido label por defecto
  const location = useLocation(); // Hook para obtener la ruta actual

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.href}>
            {/* Usar Link en lugar de <a> */}
            <Link to={item.href} className="w-full">
              <SidebarMenuButton
                // Aplicar variante 'secondary' si la ruta actual coincide
                variant={
                  location.pathname === item.href ? "secondary" : "ghost"
                }
                className="w-full justify-start" // Asegurar que ocupe todo el ancho
                tooltip={item.title} // Tooltip para modo icono
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}{" "}
                {/* Añadir margen al icono */}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
