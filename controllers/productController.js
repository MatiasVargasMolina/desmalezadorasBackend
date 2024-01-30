const express = require('express');
const ProductService = require('../services/productService');

const router = express.Router();

// Ruta para insertar un nuevo producto
router.post('/insertarProducto', async (req, res) => {
  try {
    const productService = new ProductService();
    const { name, description, price } = req.body;
    // Llama al método del servicio para insertar el producto
    const filasAfectadas = await productService.insertarProducto( name, description, price);

    // Devuelve la respuesta al cliente
    res.json({ filasAfectadas });
  } catch (error) {
    console.error('Error en la solicitud', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});
router.get('/', async (req, res) => {
  try {
    const productService = new ProductService();
    // Llama al método del servicio para insertar el producto
    const productos = await productService.verProductos();

    // Devuelve la respuesta al cliente
    res.json({ productos });
  } catch (error) {
    console.error('Error en la solicitud', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});
router.put('/', async (req, res) => {
  try {
    const {id}=req.body;
    const productService = new ProductService();
    // Llama al método del servicio para insertar el producto
    const productos = await productService.eliminarProducto(id);

    // Devuelve la respuesta al cliente
    res.json({ productos });
  } catch (error) {
    console.error('Error en la solicitud', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});
router.put('/modificar', async (req, res) => {
  try {
    const {id,name,description,price}=req.body;
    const productService = new ProductService();
    // Llama al método del servicio para insertar el producto
    const productos = await productService.modificarProducto(id,name,description,price);

    // Devuelve la respuesta al cliente
    res.json({ productos });
  } catch (error) {
    console.error('Error en la solicitud', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});
module.exports=router