
'use strict'
const session = require('express-session')
const express = require('express')
const app = express()
const router = require('./routers/index')
const PORT = 3002

//config
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

// session config
app.use(session({
    secret: 'IntelliTrade',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, sameSite: false },
}))

//routing
app.use(router)

app.listen(PORT, () => {
    console.log('LOCALSERVER STARTED AT PORT ' + PORT);
})
