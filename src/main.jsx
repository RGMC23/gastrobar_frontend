import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        {" "}
        {/* Envuelve App con BrowserRouter */}
        <App />
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        duration={2000}
        richColors
        expander
        containerClassName="z-50"
      />
    </ThemeProvider>
  </StrictMode>
);
