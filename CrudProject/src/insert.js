const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName ='crudproject';



async function insertFunction(name,email,pass,callback){
    try{
        await client.connect();
        console.log("🚀 ~ file: insert.js:12 ~ client.connect:", client.connect)
        const db= client.db(dbName);

        //create collection
        const col= db.collection("usersInfo");

        let userData={
            "name":name,
            "email":email,
            "pass":pass

        };
        const p=await col.insertOne(userData);

         const data= await col.findOne();
        callback({
            userData
        })
        console.log("🚀 ~ file: insert.js:27 ~ run ~ data:", data);


    }
    catch(err){
        callback(undefined,err)
        console.log("🚀 ~ file: insert.js:32 ~ run ~ err:", err.stack)
    }
    finally{
        await client.close();
    }

}


module.exports={insertFunction}