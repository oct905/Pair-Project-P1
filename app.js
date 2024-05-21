
'use strict'

const express = require('express')
const app = express()
const router = require('./routers/index')
const PORT = 3002

//config
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

//routing
app.use(router)

app.listen(PORT, () => {
    console.log('LOCALSERVER STARTED AT PORT ' + PORT);
})
