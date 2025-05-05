import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"; // Importa HomePage
import Dashboard from './pages/Dashboard'; // Importa el nuevo layout/página Dashboard
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import ManageMenuItems from "./pages/dashboard/ManageMenuItems";
import ManageOrders from "./pages/dashboard/ManageOrders";
import ManageTables from "./pages/dashboard/ManageTables";
import ManageEmployees from "./pages/dashboard/ManageEmployees";
import ManageTasks from "./pages/dashboard/ManageTasks";
import ManageBusiness from "./pages/dashboard/ManageBusiness";
import MenuItems from "./pages/MenuItems";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Menuitems" element={<MenuItems />} />
      {/* La ruta /dashboard ahora usa el componente Dashboard como layout */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Las rutas anidadas se renderizarán en el <Outlet /> de Dashboard.jsx */}
        <Route index element={<DashboardOverview />} />
        <Route path="menu-items" element={<ManageMenuItems />} />
        <Route path="orders" element={<ManageOrders />} />
        <Route path="tables" element={<ManageTables />} />
        <Route path="employees" element={<ManageEmployees />} />
        <Route path="tasks" element={<ManageTasks />} />
        <Route path="business" element={<ManageBusiness />} />
      </Route>

      {/* ... (otras rutas públicas) ... */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
