
'use strict'

const router = require('express').Router()

const router1 = require('./router1')
const router2 = require('./router2')
const Controller1 = require('../controllers/controller1')

router.get('/', Controller1.rename_this)

router.use('/endpoint_A', router1)
router.use('/endpoint_B', router2)

module.exports = router
