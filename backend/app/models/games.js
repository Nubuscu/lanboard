const mongo = require('mongodb').MongoClient
const fs = require('fs')
var url = "mongodb://localhost:27017/" //TODO abstract this
var dbName = 'lanboard'
var collectionName = 'games'

/**
 * returns a list of game names e.g. ['TTT', 'Unreal Tournament', 'nexuiz']
 * for as many games as are in the database
 */
exports.getNames = async function () {
    let db = await mongo.connect(url)
    let dbo = db.db(dbName)
    return dbo.collection(collectionName).find({}, { projection: { name: 1, _id: 0} }).toArray().then( function(items) {
        console.log(items)
        return items.map(x => x.name)
    }
    )
}
exports.getRulesFor = async function (gameName) {
    let db = await mongo.connect(url)
    let dbo = db.db(dbName)
    return dbo.collection(collectionName).findOne({ 'name': gameName }).then(function (game) {
        console.log(game)
        return game.rules
    }).catch(function (reason) {
        console.log(reason)
        return []
    })
}

exports.insertFromFile = async function () {
    let db = await mongo.connect(url)
    let dbo = db.db(dbName)
    var fileContents = fs.readFileSync('./dummy.json')
    const items = JSON.parse(fileContents)
    console.log(items)
    return dbo.collection(collectionName).insertMany(items, {ordered: true}).then(function (res) {
        console.log(res)
        return true
    }).catch (function (res) {
        console.log(res)
        return false
    })
}