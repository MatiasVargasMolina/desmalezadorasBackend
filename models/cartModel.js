// /src/models/productoModel.js

const { Client } = require('pg');

class CartModel {
  constructor() {
    this.client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'repuestosDesmalezadora',
        password: 'Wez84250203',
        port: 5432, // Puerto por defecto de PostgreSQL
    });
    try{
        this.client.connect();
    }
    catch(err){
        console.log(err)
    }
  }

  async crearCarrito( idUser, total) {
    try {
        const result = await this.client.query({
            text: 'SELECT crear_carrito($1, $2)',
            values: [ idUser, total],
          });
    
      return result; // Retorna la cantidad de filas afectadas
    } catch (error) {
      console.error('Error al insertar producto', error);
      throw error;
    }
  }
  async verCarritos() {
    try {
      const result = await this.client.query('SELECT * FROM ver_carrito()');
      return result.rows; // Retorna los resultados de la consulta
    } catch (error) {
      console.error('Error al ver productos', error);
      throw error;
    }
  }
  async modificarCarrito(id, name, description, price) {
    try {
      const result = await this.client.query({
        text: 'SELECT * from actualizar_producto($1, $2, $3, $4)',
        values: [id, name, description, price],
      });

      return result; // Retorna el resultado de la función
    } catch (error) {
      console.error('Error al modificar producto', error);
      throw error;
    }
  }
  async eliminarCarrito(id) {
    try {
        const result = await this.client.query({
            text: 'SELECT marcar_como_eliminado($1)',
            values: [id],
          });
    
      return result; // Retorna la cantidad de filas afectadas
    } catch (error) {
      console.error('Error al eliminar producto', error);
      throw error;
    }
  }

  // Agrega otros métodos según sea necesario

  async cerrarConexion() {
    await this.client.end();
  }
}

module.exports = CartModel;
