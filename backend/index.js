// importando lso módulso de express y cors 
const express = require('express'); // framework para construir APIs de una manera sencilla
const cors = require('cors'); // ayuda a que compartas tus recursos a otros origenes o dominios externos
require('dotenv').config(); //  permite cargar las variables de entorno de un archivo .env que tiene información sensible

// se crea un instancia de express 
const app = express();

// Middleware -> son funciones que se ejecutan entre la solicitud y la respuesta del servidor
// permite validar, modificar, registrar, etc
app.use(cors()); // ejecuta el middleware de cors, en todas las solicitudes que se realizan
app.use(express.json()); // pasa de JSON(cuerpo solicitud) -> objeto de JavaScript para req.body

// primero trata de usar la variable de entorno de .env si no hay conecta al puerto 3000
const PORT = process.env.PORT || 3000;

//ruta de prueba
app.get('/', (req, res) => {
    res.send('servidor corriendo')
})
// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})