const fs = require('fs');
const { argv } = require('process');

var  task =  process.argv;


const addData = () =>{

var jsonData ='[{"name":"Megha","subject":"node"},{"name":"malay","subject":"php"}]';

var userObj = JSON.parse(jsonData);


var userString = JSON.stringify(userObj);



fs.writeFileSync("users.json",userString,'utf8',function(err){
    if(err){
        console.log("Error occure");
        return console.log(err);
    }
    console.log("Json file created!!");
})

}
//=======================read data============================
const readData = () =>{

    try{
        const jsonString = fs.readFileSync('users.json');
        const users = JSON.parse(jsonString);
        console.log(users);
    }
    catch(err){
        console.log(err);
    }
}
const appendData = () =>{
    var name = argv[3];
    var subject = argv[4];
    const jsonString = fs.readFileSync('users.json');
    const users = JSON.parse(jsonString);
    console.log(users);
    users.push({'name':name,'subject':subject});

    userString= JSON.stringify(users);
    fs.writeFileSync("users.json",userString,'utf8',function(err){
    if(err){
        console.log("Error occure");
        return console.log(err);
    }
    console.log("Json file created!!");
})


}
const findData = () =>{
    var name = argv[3];
    console.log(name);
      const jsonString = fs.readFileSync('users.json');
      const users = JSON.parse(jsonString);
      var arr = users.values();
        for(let x of arr){
            if(x.name == name)
            {
                console.log("user Found name="+ x.name +" subject="+x.subject);
            }
      }
     
     
}
var menu = "add : add user info\nshow : show user info";
console.log(menu);
var taskindex = argv[2];
console.log(taskindex);
if(taskindex){
switch(taskindex){
    case 'add':
        addData();
        break;
    case 'show':
        readData();
        break;
    case 'append':
        appendData();
        break;
    case 'checkuser':
        findData();
        break;
    default:
        console.log("something wrong");        
}
}



