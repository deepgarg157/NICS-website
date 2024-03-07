const express = require('express')
const router = express.Router()
const controllerSignup = require('../controller/userController')

router.post('/register', controllerSignup)

module.exports = router