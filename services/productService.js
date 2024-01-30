

const ProductModel = require('../models/productModel');

class ProductService {
  constructor() {
    this.ProductModel = new ProductModel();
  }

  async insertarProducto(name, description, price) {
    try {
      const filasAfectadas = await this.ProductModel.insertarProducto(name, description, price);
      return filasAfectadas;
    } catch (error) {
      console.error('Error en el servicio al insertar producto', error);
      throw error;
    }
  }
  async verProductos() {
    try {
      const filasAfectadas = await this.ProductModel.verProductos();
      return filasAfectadas;
    } catch (error) {
      console.error('Error en el servicio al insertar producto', error);
      throw error;
    }
  }
  async modificarProducto(id,name,description,price) {
    try {
      const filasAfectadas = await this.ProductModel.modificarProducto(id,name,description,price);
      return filasAfectadas;
    } catch (error) {
      console.error('Error en el servicio al insertar producto', error);
      throw error;
    }
  }
  async eliminarProducto(id) {
    try {
      const filasAfectadas = await this.ProductModel.eliminarProducto(id);
      return filasAfectadas;
    } catch (error) {
      console.error('Error en el servicio al insertar producto', error);
      throw error;
    }
  }

  // Agrega otros métodos según sea necesario

  async cerrarConexion() {
    await this.productoModel.cerrarConexion();
  }
}

module.exports = ProductService;
