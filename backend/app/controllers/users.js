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
                res.send({ "token": token })
            }))
        })
        .catch(function (err) {
            res.status(500)
            res.send(err)
        })

}
exports.login = function (req, res) {
    let username = req.body.username
    let password = req.body.password
    if (!username || !password) {
        res.sendStatus(400)
    }
    Users.verifyPassword(username, password).then((correct) => {
        if (correct === true) {
            res.status(200)
            Users.getTokenFor(username).then((token => {
                res.send({ "token": token })
            }))
        } else {
            res.sendStatus(400)
        }
    }
    ).catch((reason) => {
        res.status(400)
        res.send(reason)
    })
}