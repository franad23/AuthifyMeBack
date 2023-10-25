import app from "./app";
import pool from "./db";

const PORT = process.env.PORT || 3000;

pool.connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

