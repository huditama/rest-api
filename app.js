require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routes)

app.listen(port, () => console.log(`Listening on port ${port}!`))