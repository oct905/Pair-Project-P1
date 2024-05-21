
'use strict'
const { User } = require('../models/index')
const bcryptjs = require('bcryptjs')

module.exports = class AuthenController {

    static async handleLogin(req, res) {
        try {
            const { username, password } = req.body

            const user = await User.findOne({
                where: {
                    username: username
                }
            })
            if(!user) throw new Error('Account not found')

            const isValid = bcryptjs.compare(password, user.password)
            if(!isValid) throw new Error('Incorrect password')

            res.render("/path")

        } catch (error) {
            console.log(error)
            res.redirect(`/login?error=${error.message}`)
        }
    }

    static async rename_this(req, res) {
        try {


            res.render("/path")

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}
