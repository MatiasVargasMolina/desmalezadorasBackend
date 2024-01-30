

const CartModel = require('../models/cartModel');

class CartService {
  constructor() {
    this.CartModel = new CartModel();
  }

  async crearCarrito(idUser, total) {
    try {
      const filasAfectadas = await this.CartModel.crearCarrito(idUser, total);
      return filasAfectadas;
    } catch (error) {
      console.error('Error en el servicio al insertar carrito', error);
      throw error;
    }
  }
  async verCarritos() {
    try {
      const filasAfectadas = await this.CartModel.verCarritos();
      return filasAfectadas;
    } catch (error) {
      console.error('Error en el servicio al ver carritos', error);
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

module.exports = CartService;
