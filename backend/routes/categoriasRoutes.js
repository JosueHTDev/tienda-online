const express = require('express');
const router = express.Router();
const {
  getAllCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria
} = require('../controllers/categoriasController');

const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

// 📌 Ruta pública
router.get('/', getAllCategorias);

// 📌 Rutas protegidas (solo admin)
router.post('/', authMiddleware, adminMiddleware, createCategoria);
router.put('/:id', authMiddleware, adminMiddleware, updateCategoria);
router.delete('/:id', authMiddleware, adminMiddleware, deleteCategoria);

module.exports = router;

