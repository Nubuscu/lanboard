const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
module.exports = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(cors())

    require('../routes/users.js')(app)
    require('../routes/scores.js')(app)
    return app
}