const fs= require('fs');
const { exit } = require('process');

const args= process.argv;





const currentWorkingDirectory = args[1].slice(0, -10);

console.log(currentWorkingDirectory);


//Checking file if ! exist then create 

if(fs.existsSync(currentWorkingDirectory + 'todo.txt')== false){
    let createStream=fs.createWriteStream('todo.txt');
    createStream.end();
}

if(fs.existsSync(currentWorkingDirectory + 'done.txt')){
    let createStream=fs.createWriteStream('done.txt');
    createStream.end();
}
// 
const InfoFunction= () =>{
    const UsageText = `
$ node index.js add "todo item"  # Add a new todo
$ node index.js ls               # Show remaining todos
$ node index.js del NUMBER       # Delete a todo
$ node index.js done NUMBER      # Complete a todo
$ node index.js help             # Show usage
$ node index.js report           # Statistics`;
    console.log(UsageText);
}
//=============================List.js====================================


const listFunction = () =>{
    let data = [];

const fileData = fs.readFileSync(
currentWorkingDirectory + 'todo.txt'
).toString();

data = fileData.split('\n');

let filterData = data.filter(function (value){
 return value !== '';
});

if(fileData.length === 0){
console.log("there are no task");
}

for(let i=0; i<fileData.length;i++){
    console.log((filterData.length-1)+" . "+filterData[i]);
}

};


//==============================end list==================================

//==============================add list==================================


const AddFunction = () =>{
    const newTask = args[3];

    if(newTask){
        let data = [];

        const fileData = fs.readFileSync(currentWorkingDirectory+'todo.txt')
        .toString();

        fs.writeFile(
            currentWorkingDirectory + 'todo.txt',
            newTask + '\n' + fileData, 
        function(err){
            if(err) throw err;

            console.log('Added todo: "' + newTask + '"');
        },
        );
    }else{
        console.log('Error: Missing todo string. Nothing added!');
    }
}


//==============================end add list==============================
switch(args[2]){
    case 'add':{
        AddFunction();
        break;
    }
    case 'ls':{
        listFunction();
        break;
    }
    default:{
        InfoFunction();
    }
}
