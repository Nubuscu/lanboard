const users = require('../controllers/users')
const auth = require('../../lib/auth')
module.exports = function (app) {
    app.route('/users/login').post(users.login)
    app.route('/users/create').post(users.create)
}