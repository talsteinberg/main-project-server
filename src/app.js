const express = require('express');
const app = express();


app.get('/',  (req, res) => {
    res.status(200).send('Hello Express!')
});


app.get('*',  (req, res) => {
    res.status(404).send('My 404 not found')
})

app.listen(3030,  ()=> {
    console.log('listening on localhost:3030')
});


// TODO - pass to another folder

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //var myobj = { firstName: "Stav", lasName: "Rabinovitch" };
  //dbo.collection("users").insertOne(myobj, function(err, res) {
    dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.firstName);
    db.close();
  });
});




