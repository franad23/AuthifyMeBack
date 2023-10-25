import pool from "./db"

export const CREATETABLE = async () => {
    const query = 'CREATE TABLE IF NOT EXISTS mainUsersAuthifyMe (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)'
    const response = await pool.query(query);
    return response;
}

export const CREATEUSER = async (apikey:string, username:string, email:string, password:string) => {
    const query = 'INSERT INTO mainUsersAuthifyMe (apikey, username, email, password) VALUES ($1, $2, $3, $4)';
    const response = await pool.query(query, [apikey, username, email, password]);
    return response;
}

export const FINDUSERIFEXISTS = async (email:string) => {
    const query = 'SELECT * FROM mainUsersAuthifyMe WHERE email = $1'
    const response = await pool.query(query, [email]);
    return response;
}