const express = require('./app/config/express')
const PORT = process.env.PORT || 5000
const { connectToMongoDb } = require('./app/config/db.js');

connectToMongoDb()
    .then(() => {
        console.log('MongoDB: Successfully connected');
        const app = express()
        app.listen(PORT, () => {
            console.log('listening on port: ' + PORT)
        })
    });
