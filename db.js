const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "qwerty",
    host: "localhost",
    port: 5433,
    database: "postgres"
})




module.exports = pool
