const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url="mongodb://localhost:27017";

const dbname="crudproject";

const client = new MongoClient(url);


client.connect(function(err){
    assert.equal(null,err);
    console.log("connected successfully");

    const db = client.db(dbname);

    client.close();
});