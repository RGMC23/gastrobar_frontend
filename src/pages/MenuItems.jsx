import { useEffect, useState } from 'react';
import menuItemService from '../services/menuItemService';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/card';
import { UtensilsCrossed, GlassWater, Coffee } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { toast } from 'sonner'; // Para mostrar notificaciones  // Asegúrate que la ruta del alias @ sea correcta

function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await menuItemService.getMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error('Error al obtener los ítems del menú:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredMenuItems = menuItems.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIconForCategory = (category) => {
    switch (category.toLowerCase()) {
      case 'comida':
        return <UtensilsCrossed className="h-6 w-6 text-primary" />;
      case 'bebida':
        return <GlassWater className="h-6 w-6 text-primary" />;
      case 'café':
        return <Coffee className="h-6 w-6 text-primary" />;
      default:
        return <UtensilsCrossed className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-300 to-gray-500">
      <Navbar />
      <div className="p-4">
        <Input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mb-4 border-2 border-gray-600 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-gray-800"
        />
        {filteredMenuItems.length === 0 ? (
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-gray-700">Producto no disponible</p>
            <p className="text-sm text-gray-500 mt-2">¿Te gustaría que tuviéramos este producto?</p>
            <div className="mt-4 flex justify-center gap-4">
              <Button
                onClick={() => toast.success('¡Gracias! Hemos registrado tu interés en este producto.')}
                className="bg-green-500 text-white hover:bg-green-600"
              >
                Sí
              </Button>
              <Button
                onClick={() => toast.success('¡Gracias por tu respuesta!')}
                className="bg-red-500 text-white hover:bg-red-600"
              >
                No
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMenuItems.map((item) => (
              <Card key={item.id} className="hover:shadow-2xl transition-shadow border-2 border-black">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-primary">{item.itemName}</CardTitle>
                  {getIconForCategory(item.category)}
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-extrabold text-green-600">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">Categoría: {item.category}</p>
                  <p className="text-sm text-gray-600">Stock: <span className="font-bold text-blue-500">{item.stock}</span></p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItems;