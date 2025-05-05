import { useEffect, useState } from 'react';
import businessService from '../../services/businessService';
import { Card, CardHeader, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import EditBusinessDialog from '../../components/EditBusinessDialog';
import { toast } from 'sonner'; // Para mostrar notificaciones  // Asegúrate que la ruta del alias @ sea correcta

function ManageBusiness() {
  const [business, setBusiness] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Obtén el token desde el almacenamiento local
        console.log('Token:', token); // Verifica que el token se obtenga correctamente
        const businessData = await businessService.getBusiness(token);
        console.log('Datos del negocio:', businessData); // Verifica que los datos se obtengan correctamente
        setBusiness(businessData);
      } catch (error) {
        console.error('Error al obtener la información del negocio:', error);
      }
    };

    fetchBusiness();
  }, []);

  const handleSave = async (updatedData) => {
    
    try {
      const token = localStorage.getItem('authToken');
      const updatedBusinessData = { 
        "business_name":updatedData.businessName,
        "address": updatedData.address,
        "phone_number": updatedData.phoneNumber,
        "email": updatedData.email,
        "corporate_reason": updatedData.corporateReason,
        "id":updatedData.id,
      }
      const updatedBusiness = await businessService.updateBusiness(token, updatedBusinessData);
      toast.success('Información del negocio actualizada con éxito!');
      setBusiness(updatedBusiness);
    } catch (error) {
      console.error('Error al actualizar la información del negocio:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestionar Información del Negocio</h1>
      {business ? (
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">{business.businessName}</h2>
          </CardHeader>
          <CardContent>
            <p><strong>Dirección:</strong> {business.address}</p>
            <p><strong>Teléfono:</strong> {business.phoneNumber}</p>
            <p><strong>Email:</strong> {business.email}</p>
            <p><strong>Razón Social:</strong> {business.corporateReason}</p>
            <p><strong>Creado el:</strong> {business.createdAt.toLocaleDateString()}</p>
            <p><strong>Actualizado el:</strong> {business.updatedAt.toLocaleDateString()}</p>
          </CardContent>
          <Button onClick={() => setIsDialogOpen(true)}>Editar</Button>
        </Card>
      ) : (
        <p>Cargando información del negocio...</p>
      )}

      {isDialogOpen && (
        <EditBusinessDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSave={handleSave}
          initialData={business}
        />
      )}
    </div>
  );
}

export default ManageBusiness;