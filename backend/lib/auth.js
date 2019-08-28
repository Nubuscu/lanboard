const UsersModel = require('../app/models/users')
exports.authenticate = function (req, res, next) {
    const token = req.header('x-authentication')
    console.log(token);

    if (token === null) {
        res.sendStatus(401)
    } else {
        UsersModel.getUsernameFor(token).then(function (username) {
            console.log(username + ' validated')
            req.locals = { 'token': token } // attach the token somewhere more convenient
            next()
        }).catch(function (reason) {
            console.log(reason)
            res.sendStatus(401)
        })
    }
}