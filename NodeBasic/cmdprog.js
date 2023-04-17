var arglist = process.argv;

function squareFind(number){
    return number*number;
}

var sq= squareFind(arglist[2]);
console.log("square of "+arglist[2]+" = "+sq);