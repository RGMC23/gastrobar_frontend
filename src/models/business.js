
// Este archivo define el modelo de negocio para el frontend basado en el modelo del backend

class Business {
  constructor(id, businessName, address, phoneNumber, email, corporateReason, createdAt, updatedAt) {
    this.id = id;
    this.businessName = businessName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.corporateReason = corporateReason;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default Business;