const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Rutas relacionadas con productos
router.use('/productos', productController);
module.exports = router;