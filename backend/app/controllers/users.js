const Users = require('../models/users')
const crypto = require('crypto')

exports.create = function (req, res) {
    let username = req.body.username || "placeholder"
    let password = req.body.password || ""
    let score = 0
    let token = crypto.randomBytes(16).toString('hex')
    console.log("hello there");
    Users.create(username, password, score, token)
        .then(function () {
            res.status(201)
            Users.getTokenFor(username).then((token => {
                res.json({ "token": token })
            }))
        })
        .catch(function (err) {
            res.status(500)
            res.json({ "message": err})
        })

}
exports.login = function (req, res) {
    let username = req.body.username
    let password = req.body.password
    console.log(req.body)
    if (!username || !password) {
        console.log('rejected login attempt for bad request (missing details)')
        res.sendStatus(400)
        return
    } 
    Users.verifyPassword(username, password).then((correct) => {
        if (correct === true) {
            res.status(200)
            Users.getTokenFor(username).then((token => {
                res.json({ "token": token })
            }))
        } else {
            console.log('incorrect login attempt')
            res.sendStatus(400)
        }
    }
    ).catch((reason) => {
        res.status(400)
        res.json({ "message": reason})
    })
}