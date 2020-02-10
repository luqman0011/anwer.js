console.log("Hello World");
// Creating a variable name with value Mohamed
var name = "Mohamed"
console.log(name);

// String
var city = "pj";
console.log(city);
// String concatenation - combining variable to string 
var message = "MY name is "+name
console.log(message);
// You can decalare string with "" or ''
var hobby = 'movie';
console.log(hobby);

var sentences = "he's coming today";
var anotherSentence = 'he says "hello"';
console.log(sentences);
console.log(anotherSentence);

// Number

var a = 10;
var b = 3;

var sum = a+b;
console.log(sum);

var minus = a-b;
console.log(minus);

var product = a/b;
console.log(product);

var division = a/b;
console.log(division);

var modulo = a % b;
console.log(modulo);

// Boolean
var eaten = false
console.log(eaten);

// If else statement

if(eaten == true){
  console.log("i'm full")
}
else {
  console.log("i'm hungry")
}

// Example with cinema
var age = 20;
if (age < 18){
  console.log("you cannot enter");
}
else {
  console.log("you may enter");
}
if (age < 13){
  console.log("you cannot enter");
}
else if (age < 18){
  console.log("you may enter with parents")
}
else {
  console.log("you may enter");
}

var umur = 8;
var price = 100
if (umur < 18){
  console.log("price is RM " +price*0.5)
}
else if (umur < 41){
  console.log("price is RM" +price);
}
else if (umur < 65){
  console.log("price is RM"+price*0.75)
}
else {
  console.log("price is RM"+price*0.5)
}

// For loop - repetion
// from 0, until 10, every iteration add by 1
for (var i= 0; i< 10; i++){
  // print/ show the number
    console.log(i);
}

//Create a for loop that will show all odd numbers from 1 to 10
for (var i = 1; i < 10; i+=2){
  console.log(i);
  
}

//multiplication table

var table = 4;
var lines = 13;
for (var i =1; i<lines;i++){
  console.log(i+"x"+table+"="+i*table);
}

for (i=1;1 <101; i++){
  if (i%15 == 0){
    console.log("Fizzbuzz");
  }
  else if (i% 5 == 0) {
    console.log("Buzz");
  }
  for (i=1; i<=101; i++) {
    if (i%3) && (i%3) 
        console.log('Fizz');
               
}

