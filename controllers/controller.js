const db = require('../db/queries')

// create
exports.postCreate = async (req, res) => {
  const { title, author, genre } = req.body
  await db.create(title, author, genre)
  res.redirect('/')
}

// read
exports.getFilter = async (req, res) => {
  const filter = req.query.filter === '' ? undefined : req.query.filter
  const rows = await db.read(filter)
  res.render('index', { rows })
}
exports.getSearch = async (req, res) => {
  const search = `WHERE title = '${req.query.search}' OR author = '${req.query.search}' OR genre = '${req.query.search}'`
  const rows = await db.read('*', search)
  res.render('index', { rows })
}

// update
exports.postUpdate = async (req, res) => {
  const { title, author, genre, id } = req.body
  await db.update(title, author, genre, id)
  res.redirect('/')
}

// destroy
exports.postDestroy = async (req, res) => {
  const { id } = req.body
  await db.destroy(id)
  res.redirect('/')
}
