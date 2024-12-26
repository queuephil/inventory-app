#! /usr/bin/env node

const { Client } = require('pg')
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ),
  author VARCHAR ( 255 ),
  genre VARCHAR ( 255 )
);

INSERT INTO items (title, author, genre) 
VALUES
  ('The Catcher in the Rye', 'J.D. Salinger', 'Fiction'),
  ('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 'Non-Fiction'),
  ('The Hobbit', 'J.R.R. Tolkien', 'Fantasy'),
  ('A Brief History of Time', 'Stephen Hawking', 'Science'),
  ('Pride and Prejudice', 'Jane Austen', 'Romance');
`

// dotenv variables
async function main() {
  console.log('seeding...')
  const client = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()