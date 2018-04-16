// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Unable to connect to db")
    }
    console.log("Connected to db")
    const db = client.db("TodoApp")

    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5ad3dd53b22dbc114ca0daa8')
    }, {
      $set: {
        completed: 1
      }
    }, {
      returnOriginal: false
    }).then((result) =>{
      console.log(result)
    })

} );
