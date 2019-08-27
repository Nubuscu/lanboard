const mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/" //TODO abstract this
var dbName = 'lanboard'
var collectionName = 'users'

exports.create = async function (username, password, score, token) {
    let db = await mongo.connect(url)
    var dbo = db.db(dbName)
    return dbo.collection(collectionName).updateOne(
        {
            "username": username
        },
        {
            $setOnInsert: {
                "username": username,
                "password": password,
                "score": score,
                "token": token
            }
        },
        { upsert: true })
        .then(function (res) {
            console.log('inserted ' + username + ' into db')
            db.close()
            return true
        }).catch(function (err) {
            console.log(err)
            return false
        })
}
exports.verifyPassword = async function (username, password) {
    let db = await mongo.connect(url)
    var dbo = db.db(dbName)
    return dbo.collection(collectionName).findOne({ 'username': username })
        .then(function (val) {
            if (val.password === password) {
                return true
            }
            return false
        }).catch(function () {
            return false
        })
}
exports.getTokenFor = async function (username) {
    let db = await mongo.connect(url)
    var dbo = db.db(dbName)
    return dbo.collection(collectionName).findOne({ 'username': username })
        .then(function (val) {
            return val.token
        }).catch(function () {
            return null
        })
}
