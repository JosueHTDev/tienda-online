// importando lso módulso de express y cors 
const express = require('express'); // framework para construir APIs de una manera sencilla
const cors = require('cors'); // ayuda a que compartas tus recursos a otros origenes o dominios externos
require('dotenv').config(); //  permite cargar las variables de entorno de un archivo .env que tiene información sensible

const productosRoutes = require('./routes/productosRoutes'); // importa las rutas de productos
const categoriasRoutes = require('./routes/categoriasRoutes'); // importa las rutas de categorías
const imagenesRoutes = require('./routes/imagenesRoutes'); // importa las rutas de imágenes

// se crea un instancia de express 
const app = express();

// Middleware -> son funciones que se ejecutan entre la solicitud y la respuesta del servidor
// permite validar, modificar, registrar, etc
app.use(cors()); // ejecuta el middleware de cors, en todas las solicitudes que se realizan
app.use(express.json()); // pasa de JSON(cuerpo solicitud) -> objeto de JavaScript para req.body

app.use('/api/productos', productosRoutes); // todas las rutas que comiencen con /api/productos se manejan en productosRoutes
app.use('/api/categorias', categoriasRoutes); // todas las rutas que comiencen con /api/categorias se manejan en categoriasRoutes
app.use('/api/imagenes', imagenesRoutes); // todas las rutas que comiencen con /api/imagenes se manejan en imagenesRoutes

// primero trata de usar la variable de entorno de .env si no hay conecta al puerto 3000
const PORT = process.env.PORT || 3000;

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})