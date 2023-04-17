const yargs = require('yargs')

yargs.version('1.1.0');


yargs.command({
    command :'add',
    describe:'Adds two number',
    builder: {
        firstNum:{
            describe:'First Number',
            demandOption:true,
            type:'number'
        },
        secNum:{
            describe:'First Number',
            demandOption:true,
            type:'number'
        }
    },
    handler(argv){
        console.log("addition:",(argv.firstNum+argv.secNum));
    }
});

yargs.argv