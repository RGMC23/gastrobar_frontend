import axios from 'axios';
import { MenuItem } from '../models/menuItem';

const API_URL = 'http://localhost:8080'; // Cambia esto a la URL de tu backend

const menuItemService = {
  async getMenuItems() {
    try {
      const response = await axios.get(`${API_URL}/menu-items`);
      return response.data.map((item) => new MenuItem(
        item.id,
        item.item_name,
        item.category,
        parseFloat(item.price),
        item.stock,
        item.description,
        item.created_at
      ));
    } catch (error) {
      console.error('Error al obtener los ítems del menú:', error);
      throw error;
    }
  },

  async getMenuItemById(id) {
    try {
      const response = await axios.get(`${API_URL}/menu-items/${id}`);
      const item = response.data;
      return new MenuItem(
        item.id,
        item.item_name,
        item.category,
        parseFloat(item.price),
        item.stock,
        item.description,
        item.created_at
      );
    } catch (error) {
      console.error(`Error al obtener el ítem del menú con ID ${id}:`, error);
      throw error;
    }
  },

  async createMenuItem(menuItemData) {
    try {
      const response = await axios.post(`${API_URL}/menu-items`, menuItemData);
      const item = response.data;
      return new MenuItem(
        item.id,
        item.item_name,
        item.category,
        parseFloat(item.price),
        item.stock,
        item.description,
        item.created_at
      );
    } catch (error) {
      console.error('Error al crear un ítem del menú:', error);
      throw error;
    }
  },

  async updateMenuItem(id, menuItemData) {
    try {
      const response = await axios.put(`${API_URL}/menu-items/${id}`, menuItemData);
      const item = response.data;
      return new MenuItem(
        item.id,
        item.item_name,
        item.category,
        parseFloat(item.price),
        item.stock,
        item.description,
        item.created_at
      );
    } catch (error) {
      console.error(`Error al actualizar el ítem del menú con ID ${id}:`, error);
      throw error;
    }
  },

  async deleteMenuItem(id) {
    try {
      await axios.delete(`${API_URL}/menu-items/${id}`);
    } catch (error) {
      console.error(`Error al eliminar el ítem del menú con ID ${id}:`, error);
      throw error;
    }
  },
};

export default menuItemService;