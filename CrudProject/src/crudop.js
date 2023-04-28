const mongodb= require('mongodb')
const MongoCilent = mongodb.MongoClient

const url="mongodb://127.0.0.1:27017"

const dbName="testdb"

MongoCilent.connect(url).then(result=>{
    console.log("db connected")

    const myDb= result.db(dbName);

    //====================create collection=========================
    /*myDb.createCollection("student").then(result => {
        console.log("🚀 ~ file: crudop.js:15 ~ myDb.createCollection ~ result:", result)
    })
    */


   //=====================insert data into collection===============
   /*var student={"name":"john","subject":"php","email":"john@gmail.com"};
   myDb.collection("student").insertOne(student).then(result=>{
            console.log("data inserted");
   }).catch(err=>{
        console.log(err);
   })*/


   //======================multiple insert data=====================
   /*var student1={"name":"nilay","subject":"python","email":"nilay@gmail.com"};
   var student2={"name":"clark","subject":"java","email":"clark@gmail.com"};
   var student3={"name":"denis","subject":"android","email":"denis@gmail.com"};
    myDb.collection("student").insertMany([student1,student2,student3]).then(result=>{
         console.log("data inserted");
    }).catch(err=>{
        console.log(err);
    })
    */

    //=========================update one==========================
    /*myDb.collection("student").updateOne({'name':'nilay'},{$set :{"subject":"ui/ux"}}).then(result=>{
        console.log("update data successfully")
    }).catch(err=>{
        console.log(err);
    })*/


    //========================Delete one==========================
    /*myDb.collection("student").deleteOne({'name':'john'}).then(result=>{
        console.log("delete data");
    })
    .catch(err=>{
        console.log(err);
    })
    */

    //=======================find data==========================
    /*myDb.collection("student").find({'name':'nilay'}).toArray().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })*/

    //=======================find one==========================
    /*myDb.collection("student").findOne({'name':'nilay'}).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })*/




})