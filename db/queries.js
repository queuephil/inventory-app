const pool = require('./pool')

exports.create = async (title, author, genre) => {
  await pool.query(
    `INSERT INTO items (title, author, genre) 
    VALUES ($1, $2, $3)`,
    [title, author, genre]
  )
}

exports.read = async (column = '*', condition = '') => {
  const { rows } = await pool.query(
    `SELECT ${column} FROM items ${condition} ORDER BY id DESC`
  )
  return rows
}

exports.update = async (title, author, genre, id) => {
  await pool.query(
    `UPDATE items SET title = $1, author = $2, genre = $3 WHERE id = $4`,
    [title, author, genre, id]
  )
}

exports.destroy = async (id) => {
  await pool.query(`DELETE FROM items WHERE id = $1`, [id])
}
