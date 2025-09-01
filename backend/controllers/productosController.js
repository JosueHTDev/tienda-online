const {
  getAllProductosDB,
  getProductosByCategoriaDB,
  getProductoByIdDB,
  createProductoDB,
  updateProductoDB,
  deleteProductoDB
} = require('../models/productosModel');

const getAllProductos = async (req, res) => {
  try {
    const productos = await getAllProductosDB();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductosByCategoria = async (req, res) => {
  try {
    const productos = await getProductosByCategoriaDB(req.params.categoria_id);
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductoById = async (req, res) => {
  try {
    const producto = await getProductoByIdDB(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProducto = async (req, res) => {
  try {
    const nuevo = await createProductoDB(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProducto = async (req, res) => {
  try {
    const actualizado = await updateProductoDB(req.params.id, req.body);
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const eliminado = await deleteProductoDB(req.params.id);
    res.json(eliminado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProductos,
  getProductosByCategoria,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
