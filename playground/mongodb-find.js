// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Unable to connect to db")
    }
    console.log("Connected to db")
    const db = client.db("TodoApp")
    // db.collection('Todos').find({
    //   _id : new ObjectID("5ad3dd53b22dbc114ca0daa8")
    // }).toArray().then((docs) => {
    //   console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //   console.log(err)
    // })

    db.collection('Todos').find({
      text : "else"
    }).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
      console.log(err)
    })



} )
