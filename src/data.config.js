import pkg from "pg";
 const { Pool } = pkg;

 const pool = new Pool({
    user: 'postgres',
    password: 'githenduka1687',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'products'
 })

 export default pool;