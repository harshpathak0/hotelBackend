import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Database Connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test Database Connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL successfully');
    release();
  }
});

// Server Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
