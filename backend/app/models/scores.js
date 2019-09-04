const { db } = require('../config/db.js');
var dbName = 'lanboard'
var collectionName = 'users'

exports.update = async function (token, delta) {
    var dbo = db.db(dbName)
    return dbo.collection(collectionName).updateOne(
        {
            "token": token
        },
        {
            $inc: {
                "score": delta
            }
        })
        .then(function (res) {
            console.log('update score for ' + token)
            db.close()
            return true
        }).catch(function (err) {
            console.log(err)
            return false
        })
}
exports.scoreboard = async function () {
    var dbo = db.db(dbName)
    return dbo.collection(collectionName).find({}, { projection: { username: 1, score: 1}}).toArray().then(function(users) {
        console.log('found some users')
        return users
    }).catch (function (reason) {
        console.log(reason)
        return []
    })
}