const fs= require('fs');

const args= process.argv;

const currentWorkingDirectory = args[1].slice(0, -8);

//Checking file if ! exist then create 

if(fs.existsSync(currentWorkingDirectory + 'todo.txt')== false){
    let createStream=fs.createWriteStream('todo.txt');
    createStream.end();
}

if(fs.existsSync(currentWorkingDirectory + 'done.txt')){
    let createStream=fs.createWriteStream('done.txt');
    createStream.end();
}
//display todo task list
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