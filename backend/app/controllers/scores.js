const Scores = require('../models/scores')
exports.update = function (req, res) {
    const delta = parseInt(req.body.delta)
    if (delta === NaN) {
        res.status(400)
    } else {
        Scores.update(req.locals.token, delta).then(function (val) {
            res.status(200)
        }).catch(function (reason) {
            res.status(418)
        })
    }
}