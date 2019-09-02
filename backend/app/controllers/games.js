const Games = require('../models/games')

exports.getNames = function (req, res) {
    Games.getNames().then( function(games) {
        res.json(games)
    }).catch( function (err) {
        res.json({'err': err})
    })
}

exports.getRules = function (req, res) {
    const name = req.params.game.toLowerCase()
    Games.getRulesFor(name).then( function(rules) {
        res.json(rules)
    }).catch(function(err) {
        res.json(err)
    })
}

exports.reset = function (req, res) {
    Games.insertFromFile().then( function(success) {
        if (success) {
            res.sendStatus(200)
        } else {
            res.sendStatus(500)
        }
    })
}