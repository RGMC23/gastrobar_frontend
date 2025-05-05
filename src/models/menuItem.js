// Este archivo define el modelo de menú para el frontend basado en el modelo del backend

export class MenuItem {
  constructor(id, itemName, category, price, stock, description, createdAt) {
    this.id = id;
    this.itemName = itemName;
    this.category = category;
    this.price = price; // Se espera que sea un número o string que represente un decimal
    this.stock = stock;
    this.description = description;
    this.createdAt = new Date(createdAt);
  }
}