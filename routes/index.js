const express = require('express')
const router = express.Router()
const users = require('./users')

router.use('/api', users)

module.exports = router