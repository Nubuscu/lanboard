const express = require('./app/config/express')
const PORT = process.env.PORT || 5000
const app = express()
const { connectToMongoDb } = require('./app/config/db.js');

connectToMongoDb()
    .then(() => {
        console.log('MongoDB: Successfully connected');
        app.listen(PORT, () => {
            console.log('listening on port: ' + PORT)
        })
    });
