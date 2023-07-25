import pkg from 'pg';
const { Client } = pkg;
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  host: process.env.dbhost,
  user: process.env.dbuser,
  port: process.env.dbport,
  password: process.env.dbpass,
  database: process.env.db,
});

client.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

export default client;
