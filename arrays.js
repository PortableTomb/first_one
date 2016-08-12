var myArray=['Elie','Janey','Matt','Parker','Tim'];
console.log(myArray);

var favPetNames=['Chico','Fish','Poindexter','Jerk','GruGru'];
console.log(favPetNames);

console.log(myArray[100]);
console.log(myArray[-1]);


var books =['JavaScript:The Good Parts', 'Eloquent JS', 'You Don\'t Know JS'];

for (var i = 0; i < books.length; i++) {
    var book = books[i];
    console.log(book);
}

var arrNum =[1,2,3,4];
for (var i = 0; i < arrNum.length; i++) {
    arrNum[i] = arrNum[i] * 2;
}
console.log(arrNum);

var lines = ['It\'s me.','Can you hear me?','from the other side','from the outside'];

for (var i = 0; i < lines.length; i++) {
    console.log('Hello, ' + lines[i]);
}


var myArray = [];

myArray.push("Matt");
myArray.push("Elie");
console.log(myArray);

myArray.unshift("Jade");
console.log(myArray);

myArray.shift();
console.log(myArray);

var aName;
aName = myArray.pop();
console.log(myArray);

myArray.pop();
console.log(myArray);
