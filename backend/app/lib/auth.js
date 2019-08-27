
exports.authenticate = function (req, res, next) {
    const token = req.header('x-authentication')
    if (token === null) {
        res.sendStatus(401)
    } // TODO get user from db
    next()
}