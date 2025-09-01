const express = require('express');
const router = express.Router();
const {
  getAllCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria
} = require('../controllers/categoriasController');

router.get('/', getAllCategorias);
router.post('/', createCategoria);
router.put('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

module.exports = router;
