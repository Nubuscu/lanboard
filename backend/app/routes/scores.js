const scores = require('../controllers/scores')
const auth = require('../../lib/auth')
module.exports = function (app) {
    app.route('/scores/update').post(auth.authenticate, scores.update)
    // TODO open websocket
}
