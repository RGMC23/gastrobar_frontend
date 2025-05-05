import axios from 'axios';
import Business from '../models/business';

const API_URL = 'http://localhost:8080'; // Cambia esto a la URL de tu backend

const businessService = {
  getBusiness: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/business`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return new Business(
        response.data.id,
        response.data.business_name,
        response.data.address,
        response.data.phone_number,
        response.data.email,
        response.data.corporate_reason,
        new Date(response.data.created_at),
        new Date(response.data.updated_at)
      );
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener la información del negocio');
    }
  },

  updateBusiness: async (token, businessData) => {
    try {
      const response = await axios.put(`${API_URL}/business`, businessData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return new Business(
        response.data.id,
        response.data.business_name,
        response.data.address,
        response.data.phone_number,
        response.data.email,
        response.data.corporate_reason,
        new Date(response.data.created_at),
        new Date(response.data.updated_at)
      );
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al actualizar la información del negocio');
    }
  },
};

export default businessService;