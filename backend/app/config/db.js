const mongodb = require('mongodb');

const DB_URL = "mongodb://localhost:27017/"; //TODO abstract this

exports.db = null;

exports.connectToMongoDb = async function() {
    const db = await mongodb.MongoClient.connect(DB_URL);

    db.on('close', () => console.log('MongoDB: Connection lost'));
    db.on('reconnect', () => console.log('MongoDB: Reconnected'));

    exports.db = db;
};
