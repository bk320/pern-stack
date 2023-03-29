const {Pool} = require('pg');
//const {db} = require("./config");   para no exportar al github la credenciales
//pero falta relacionar con config.js

const pool = new Pool({
    user: 'postgres',
    password: 'richard',
    host: 'localhost',
    port: '5432',
    database: 'tasksdb'
});

module.exports = pool;
