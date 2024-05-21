
'use strict'

const {  } = require('./models/index')

module.exports = class Controller1 {

    static async rename_this(req, res) {
        try {
            res.render("/path")

        } catch(error) {
            console.log(error)
            res.send(error)
        }
    }
}
