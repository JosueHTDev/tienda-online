const mysql = require('mysql2/promise')
// para usar las varialbles de entorno 
require('dotenv').config({ path: __dirname + '../../.env' })

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tienda',
})

pool.on('error', (err) => {
    console.error('Error inesperado en el pool de Mysql: ', err);
})

module.exports=pool;
