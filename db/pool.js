const { Pool } = require('pg')
require('dotenv').config()

const LOCAL_URL =
  `postgres://${encodeURIComponent(process.env.LOCAL_USER)}` +
  `:${encodeURIComponent(process.env.LOCAL_PASSWORD)}` +
  `@${process.env.LOCAL_HOST}` +
  `:${process.env.LOCAL_PORT}` +
  `/${process.env.LOCAL_DATABASE}`

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL || LOCAL_URL,
  ssl: { rejectUnauthorized: false },
})
