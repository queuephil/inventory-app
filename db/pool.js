const { Pool } = require('pg')
require('dotenv').config()

// Configure the pool
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false, // Enable SSL in production
})

module.exports = pool
