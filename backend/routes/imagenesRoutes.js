const express = require('express');
const router = express.Router();
const {
  getImagenesByProducto,
  createImagen,
  deleteImagen
} = require('../controllers/imagenesController');

router.get('/:producto_id', getImagenesByProducto);
router.post('/', createImagen);
router.delete('/:id', deleteImagen);

module.exports = router;
