const validator = require('validator')

var url ="https://careercenter.tops-int.com/";
var mail="megha@gmail.com";


console.log(validator.isURL(url));
console.log(validator.isEmail(mail));
