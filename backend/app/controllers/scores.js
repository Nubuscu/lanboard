const Scores = require('../models/scores')
exports.update = function (req, res) {
    const delta = parseInt(req.body.delta)
    if (delta === NaN) {
        res.sendStatus(400)
    } else {
        Scores.update(req.locals.token, delta).then(function (val) {
            res.sendStatus(200)
        }).catch(function (reason) {
            console.log(reason)
            res.sendStatus(418)
        })
    }
}

exports.scoreboard = function (req, res) {
    Scores.scoreboard().then(function (val) {
        res.json(val)
        res.status(200)
    }).catch(function (reason) {
        console.log(reason)
        res.sendStatus(418)
    })
}