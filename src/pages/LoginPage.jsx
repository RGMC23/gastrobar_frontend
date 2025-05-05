import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Asegúrate que la ruta del alias @ sea correcta
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Asegúrate que la ruta del alias @ sea correcta
import { Input } from "@/components/ui/input"; // Asegúrate que la ruta del alias @ sea correcta
import { Label } from "@/components/ui/label"; // Asegúrate que la ruta del alias @ sea correcta
import authService from "@/services/authService"; // Asegúrate que la ruta del alias @ sea correcta
import { toast } from "sonner"; // Para mostrar notificaciones

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevenir recarga de página por defecto del form
    setIsLoading(true);
    try {
      const data = await authService.login(username, password);
      // Asumiendo que el backend devuelve un objeto con una propiedad 'token'
      if (data.token) {
        localStorage.setItem("authToken", data.token); // Guarda el token
        toast.success("Inicio de sesión exitoso!");
        navigate("/dashboard"); // Redirige al dashboard o ruta protegida
      } else {
        // Si no hay token, incluso con respuesta 200 OK, es un error lógico
        throw new Error("No se recibió token de autenticación.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Muestra el mensaje de error del backend si está disponible, sino uno genérico
      toast.error(
        error.message || "Error al iniciar sesión. Verifica tus credenciales."
      );
      localStorage.removeItem("authToken"); // Asegura limpiar cualquier token viejo si falla
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-300 to-gray-500">
      <Card className="w-full max-w-sm border border-black bg-gradient-to-r from-gray-100 to-gray-300 hover:shadow-2xl hover:shadow-black transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
          <CardDescription>
            Ingresa tu usuario y contraseña para acceder.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                type="text"
                placeholder="tu_usuario"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Ingresando..." : "Ingresar"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
