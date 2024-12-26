const express = require('express')
const app = express()
const router = require('./routes/router')
const path = require('node:path')

const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use('/', router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
