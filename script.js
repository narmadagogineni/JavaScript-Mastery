//AVG

let hindi = 80;
let eng = 90;
let mat = 100;
let avg = (hindi + eng + mat)/3;
-------------------------------------------
  
//concatenation

firstName = "Narmada";
lastName = "Gogineni";
fullName = firstName + " " + lastName;
console.log(fullName);
---------------------------------------------
//String
  
name = "Narmada Gogineni";
typeof name;
console.log(name.length);
name[0];
---------------------------------------------
//TEMPLATE LITERALS

let a = 5;
let b = 2;
console.log(`Amount to be paid is ${a+b} rupees`);

//EX 2

let eraserPrice = 5;
let pencilPrice = 10;
let output = (`The total price to be paid is ${eraserPrice + pencilPrice} rupees`);
console.log(output);
----------------------------------------------------------------------------------------

 // ARITHEMATIC OPERATIONS
  
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
----------------------------
  
  //UNARY OPERATOR
  
a = 5;
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);
--------------------------------

//comparison operators
  
let age = 18;
console.log(age>18);
--------------------------------

  //if stmt
let age = 21;

if (age>=18) {
    console.log("You can vote");
    console.log("You can drive");
}

------------------------------------

//EX2
let a = 8;

if (a>5){
    console.log(a * 5);
}
-----------------------------------
  
//EX3

let name = "Narmada";

if (name = "Narmada") {
    console.log(`Welcome ${name}!`)
}
-----------------------------------------

//TRAFFIC LIGHT SYSTEM

let color = "red";

if (color === "red") {
    console.log("Stop");
}
if (color === "green") {
    console.log("Go");
}
if (color==="yellow") {
    console.log("Get ready");
}
----------------------------------------
  
//If-Else ladder

let age = 14;

if (age >= 18) {
    console.log("You are an adult. You can vote"); 
} else {
    console.log("you cannot vote");
}
-----------------------------------------------------

  // else - if

let marks = 50;

if(marks>=90) {
    console.log("O grade");
} else if(marks >= 70) {
    console.log("A grdae");
} else if(marks >= 60) {
    console.log("B grade");
} else {
    console.log("Fail")
}
---------------------------------------

// if else
let color = "red";

if(color == "red") {
    console.log("Stop");
} else if (color == "green") {
    console.log("Go");
} else if (color == "yellow") {
    console.log("get ready");
} else {
    console.log("traffic light is broken");
}
-------------------------------------------------
  //EX 2
let size = "XL";

if (size == "XL") {
    console.log("Price is 250");
} else if (size == "L") {
    console.log("Price is 200");
} else if (size == "M") {
    console.log("Price is 150");
} else if (size == "S") {
    console.log("Price is 100");
} else {
    console.log("Out of stock");
}
------------------------------------------

 // Nested if else

let marks = 90;
if(marks >= 33) {
    if(marks >= 80) {
        console.log("O grade");
    } else {
        console.log("A grade");
    } 
} else {
    console.log("Better luck next time");
}
----------------------------------------------
  //LOgical AND
  
 let marks = 90;

 if((marks >= 33) && (marks >= 80)) {
     console.log("pass");
     console.log("A+");
 }

---------------------------------------------------
//Logical OR
  
if((marks >= 33) || (marks >= 80)) {
     console.log("pass");
     console.log("A+");
  
------------------------------------------
//Good string or not Q
    
let str = "apples";

if((str.length >= 3) && (str[0] === "a")) {
    console.log("Good string");
} else {
    console.log('Bad String');
}
  
------------------------------------------------

    //EX
let num = 12;
if((num%3 == 0) && (num-1 == 11) || (num+1 == 15)) {
    console.log("safe");
} else {
    console.log("not safe");
}
  
--------------------------------------------------

    
 

  
