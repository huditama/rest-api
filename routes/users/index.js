const express = require('express')
const router = express.Router()

//Controllers
const userController = require('../../controllers/userController')
const authController = require('../../controllers/authController')

//Middlewares
const authenticate = require('../../middlewares/authenticate')
const authorize = require('../../middlewares/authorize')
const isThatPerson = require('../../middlewares/isThatPerson')

//SIGN IN / SIGN UP
router.post('/signup', authController.signUp)
router.post('/signin', authController.signIn)

//MIDDLEWARE CHECKPOINT
router.use(authenticate)

//USERS
router.get('/users', authorize, userController.findAll)
router.get('/users/:id', isThatPerson, userController.findOne)
router.post('/users', authorize, userController.create)
router.delete('/users/:id', authorize, userController.delete)
router.put('/users/:id', isThatPerson, userController.update)


module.exports = router