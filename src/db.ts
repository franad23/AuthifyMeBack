import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.POSTGRESQLURL as string,
  ssl: true
});

pool.connect((err, client, done) => {
  if (err) {
    return console.error('Error al conectarse a la base de datos', err);
  }
  console.log("DB Connected");
  process.on('SIGINT', () => {
    console.log('Cerrando la conexión a la base de datos...');
    pool.end(() => {
      console.log('Conexión a la base de datos cerrada.');
      process.exit(0);
    });
  });
});

export default pool;
