const express = require('express');
const router = express.Router();
const {
  getAllProductos,
  getProductosByCategoria,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productosController');

router.get('/', getAllProductos);
router.get('/categoria/:categoria_id', getProductosByCategoria);
router.get('/:id', getProductoById);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;
