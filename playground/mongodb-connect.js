// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Unable to connect to db")
    }
    console.log("Connected to db")
    const db = client.db("TodoApp")


    db.collection('Todos').insertOne({
        text: "something",
        completed: 0
    }, (err, result) => {
        if (err){
            return console.log(err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    Insert new doc into Users (name, age, location)

    db.collection('Users').insertOne({
        name: 'David',
        age: 25,
        location: "CA"
    },  (err, result) => {
        if (err){
            return console.log(err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    }
    )


    client.close();

} )
