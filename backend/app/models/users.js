const { db } = require('../config/db.js');
const dbName = 'lanboard';
const collectionName = 'users';

exports.create = async function (username, password, score, token) {
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
    var dbo = db.db(dbName)
    return dbo.collection(collectionName).findOne({ 'username': username })
        .then(function (val) {
            return val.token
        }).catch(function () {
            return null
        })
}
/**
 * verifies the token given and resolves with the username if the token is valid
 */
exports.getUsernameFor = async function (token) {
    var dbo = db.db(dbName)
    return dbo.collection(collectionName).findOne({ 'token': token })
        .then(function (val) {
            if (val === null) {
                return null
            }
            return val.username
        }).catch(function (err) {
            console.log(err)
            return null
        })
}