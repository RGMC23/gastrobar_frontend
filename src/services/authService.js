const API_URL = "http://localhost:8080"; // Dirección base del backend

/**
 * Realiza la solicitud de inicio de sesión al backend.
 * @param {string} username - El nombre de usuario.
 * @param {string} password - La contraseña.
 * @returns {Promise<object>} - Una promesa que resuelve con la respuesta del backend (incluyendo el token) o rechaza con un error.
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      // Intenta obtener el mensaje de error del cuerpo si existe
      const errorData = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        errorData.message || `Error ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data; // Debería contener el token, ej: { token: "..." }
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Re-lanza el error para que el componente que llama pueda manejarlo
  }
};

/**
 * Cierra la sesión del usuario eliminando el token de autenticación.
 */
export const logout = () => {
  try {
    // Elimina el token del localStorage
    localStorage.removeItem('authToken');
    // Opcional: Podrías añadir lógica adicional aquí si es necesario,
    // como limpiar el estado de Redux/Context o redirigir, aunque
    // la redirección suele manejarse en el componente que llama a logout.
    console.log("User logged out successfully.");
  } catch (error) {
    console.error("Error during logout:", error);
    // Aunque es raro que removeItem falle, es bueno tener un catch.
    throw error;
  }
};


// Puedes añadir más funciones relacionadas con la autenticación aquí si es necesario
// Por ejemplo: register, checkAuthStatus, etc.

const authService = {
  login,
  logout, // Añade logout al objeto exportado
};

export default authService;
