import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config()
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB 
})

module.exports = db;