import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString:process.env.POSTGRESQLURL as string,
  ssl: true
});

pool.connect((err, client, done) => {
  if (err) {
    return console.error('Error al conectarse a la base de datos', err);
  } 
  console.log("DB Connected");
});


export default pool;