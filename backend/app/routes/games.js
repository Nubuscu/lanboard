const games = require('../controllers/games')

module.exports = function(app) {
    app.route('/games').get(games.getNames)
    app.route('/games/:game/rules').get(games.getRules)
    app.route('/games/reset').get(games.reset)
}