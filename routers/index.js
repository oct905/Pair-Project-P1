
'use strict'

const router = require('express').Router()

const router1 = require('./router1')
const router2 = require('./router2')
const AuthenController = require('../controllers/AuthenController')
const AuthenMiddleware = require('../middleware/authenMiddleware')

router.get('/', AuthenController.rename_this)

router.get('/login', AuthenMiddleware.isLoggedOut, AuthenController.rename_this)
router.get('/signup', AuthenMiddleware.isLoggedOut, AuthenController.rename_this)
router.post('/login', AuthenMiddleware.isLoggedOut, AuthenController.rename_this)
router.post('/signup', AuthenMiddleware.isLoggedOut, AuthenController.rename_this)

router.use('/endpoint_A', AuthenMiddleware.isLoggedIn, router1)
router.use('/endpoint_B', AuthenMiddleware.isLoggedIn, router2)

module.exports = router
