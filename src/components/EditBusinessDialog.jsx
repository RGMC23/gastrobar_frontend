import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';

function EditBusinessDialog({ isOpen, onClose, onSave, initialData }) {
    const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button className="hidden">Abrir diálogo</Button>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Editar Información del Negocio</DialogTitle>
          <DialogDescription>Por favor, edita los campos necesarios para actualizar la información del negocio.</DialogDescription>
        </DialogHeader>
        <form>
          <div className="mb-4">
            <Label htmlFor="businessName">Nombre del Negocio</Label>
            <Input
              id="businessName"
              name="businessName"
              value={formData.businessName || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="address">Dirección</Label>
            <Input
              id="address"
              name="address"
              value={formData.address || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="phoneNumber">Teléfono</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="corporateReason">Razón Social</Label>
            <Input
              id="corporateReason"
              name="corporateReason"
              value={formData.corporateReason || ''}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <DialogFooter>
          <Button onClick={handleSave}>Guardar</Button>
          <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditBusinessDialog;