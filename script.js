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
//Truthy value

if(" ") {
    console.log("it has true value");
} else {
    console.log("it has false value");
}
----------------------------------------------------

  //Falsy value

if("") {
    console.log("it has flase value");
} else {
    console.log("it has true value")
}

--------------------------------------------------

  //TRUE 

if(true) {
    console.log("it has flase value");
} else {
    console.log("it has true value")
}
--------------------------------------------------

  //Flase

if(false) {
    console.log("it has flase value");
} else {
    console.log("it has true value")
}
--------------------------------------------------
  
   //EX2
let stringgg = " "
if(stringgg) {
    console.log("The string is not empty");
} else {
    console.log("The string is empty")
} 
----------------------------------------------------

  //ex3
let num = 0;
if(num) {
    console.log("num is not equal to zero");
} else {
    console.log("num is equal to zero")
}
----------------------------------------------------------
  
//SWITCH STATEMENT

let color = "green";

switch(color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("wait");
        break;
    default:
        console.log("light is broken");            
}
------------------------------------------------------------

let value = "1";

switch(value) {
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("tueday");
        break;
    case "3":
        console.log("wednesday");
        break;
    case "4":
        console.log("thurday");
        break;
    case "5":
        console.log("friday");
        break;
    case "6":
        console.log("saturday");
        break;
    case "7":
        console.log("sunday");
        break;
    default:
        console.log("NO day");
}
-------------------------------------------

  //Months in quarter
let quarter = 4;

switch(quarter) {
    case 1:
        console.log("jan, feb, mar ");
        break;
    case 2:
        console.log("apr, may, june");    
        break;
    case 3:
        console.log("July, aug, sep");
        break;
    case 4:
        console.log("Oct, nov , dec");
        break;
    default:
        console.log("Not a quarter");            
}
------------------------------------------------

  //LOG ERROR AND WARN MESSAGES

console.log("This is a normal log msg");
console.error("This is a error msg");
console.warn ("This is a warning msg");

----------------------------------------------------
  
  //alert n prompt
  
//Prompt

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
console.log(`Welcome, ${firstName} ${lastName}`);
  
------------------------------------------------------
  
  //Alert
  
  let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let msg = `Welcome, ${firstName} ${lastName}`;
alert(msg);
  
  --------------------------------------------------
    
  // PROBLEMS num div by 10
n = 50

if(n%10 == 0) {
    console.log("Good string");
} else {
    console.log("bad string");
}
  
---------------------------------------------------
  
//prob 2 name and age
  
let userName = prompt("Enter your name");
let age = prompt("Enter your age");

alert(`${userName} is ${age} years old`);
  
--------------------------------------------------

  let Str = "arecanut";

if((Str[0] == "A") || (Str[0] == "a") && (Str.length>5)) {
    console.log("Golden string");
} else {
    console.log("Not a Golden string");
}

  ----------------------------------------------------------
    
// greatest of 3 nums
    
let num1 = 45;
let num2 = 588;
let num3 = 62;

if(num1>num2) {
    if(num1>num3) {
        console.log(`${num1} is greater`);
    } else {
        console.log(`${num3} is greater`);
    }
} else {
    if(num2>num3) {
        console.log(`${num2} is greater`);
    } else {
        console.log(`${num3} is greater`);
    }
}

------------------------------------------------

  // Q - check if last digit of two num is same or not
let num1 = 3242522;
let num2 = 47852;

if(num1%10 == num2%10) {
    console.log("num1 and num2 have same last digit");
} else {
    console.log("last digits are different");
}
------------------------------------------------------------

  //TEMPLATE LIERALS
  
let pencilPrice = 10;
let eraserPrice = 5;
console.log(`Total price is: ${pencilPrice + eraserPrice}rs`);
------------------------------------------------------------------

                                           //       --STRING METHODS--
--------------------------------------------------------------------------------------------------------------------

//Trim method
  
let msg = '   Hello   ';
console.log(msg.trim());
//note: it doesnt change the actal value of the string msg
//it just returns a new one
console.log(msg);

let newMsg = '  He  llo   ';
console.log(newMsg);
console.log(newMsg.trim()); // trims only the start n end and not in the middle
--------------------------------------------------------------------------------------

  




















  
