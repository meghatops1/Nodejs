var users ='{"persons":[{"name":"Megha","city":"Surat"},{"name":"Malay","city":"Vadodra"}]}';

var userObject = JSON.parse(users);

console.log(userObject);
//print first user name
console.log(userObject.persons[0].name);