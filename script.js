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
  //trim ex of pw
let password = prompt("Enter your password");
let newPassword = password.trim();
console.log(password);
console.log(newPassword);
//o/p if pw is '  jkask  ' it trims it an assign to new pw

------------------------------------------------------------------
  //toUpperCase
let name = "Nammu";
str=name.toUpperCase() //it will convert all the letters in string into uppercase and return a new string
console.log(str);
--------------------------------------------------------------------------------------------------------------
  //toLowerCase
let name = "NAMMU";
str=name.toLowerCase();//it will convert all the letter in string into lowercase and returns a new string
console.log(str);
------------------------------------------------------------------------------------------------------------

//Method chaining
let msg = '   Hello   ';
console.log(msg.trim().toUpperCase());
---------------------------------------------
//slice
let name = "Narmada Gogineni";
console.log(name.slice(-1));
console.log(name.slice(-3));
console.log(name.slice(4));
console.log(name.slice(3,8));
  ------------------------------------
//Replace
    
let msg = "hi this is my laptop";
console.log(msg);
console.log(msg.replace("my", "your"));

let word = "whatever";
console.log(word);
console.log(word.replace("e", "o"));
---------------------------------------------
  //ex1 - replace
let msg = "college";
console.log(msg);
console.log(msg.replace("l", "t").replace("l", "t"));
  -----------------------------------------------------
//Repeat
let fruit = "mango ";
console.log(fruit.repeat(3));

  ------------------------------------------------
    //practice
let msg = "       help!";
console.log(msg.trim().toUpperCase());
-------------------------------------------
//ARRAYS

let arr = ["Nammu", 1, 9.6];
console.log(arr[0]);
console.log(arr[0][0]);

console.log(arr.length);
console.log(arr[0].length);
----------------------------------------
  //Arrays are mutable

let fruits = ["mango", "banana", "custard apple"];
console.log(fruits);
fruits[0] = "orange";
console.log(fruits);
-------------------------------------------------------
  ARRAY METHODS

//push
let cars = ["bmw", "porshe", "mercedes"];
(cars.push("tata")); 
console.log(cars); 
------------------------------------------------
//pop
(cars.pop());
console.log(cars);

(cars.pop(2));
console.log(cars);
-------------------------------------------------------

//Unshift
veggies = ["brinjal", "Onion", "chillies", "potato"];
(veggies.unshift(-4,-8));
console.log(veggies);
-----------------------------------------------------
//shift
(veggies.shift());
console.log(veggies);
---------------------------------
  //Ex
  
let followers = ["a", "b", "c"];
let blocked = followers.shift(); 
console.log(followers);
console.log(blocked);
-------------------------------------
  //ex prob
let months = ["jan", "july", "mar", "aug"];
//req o/p is ["july", "jjune", "mar", "aug"]
months.shift();
months.shift();
console.log(months);
months.unshift("june");
months.unshift("july");
console.log(months);
----------------------------------------------
  //IndexOf

let colors = ["red", "blue", "green"];
console.log(colors.indexOf("green"));
console.log(colors.indexOf("pink"));
//returns -1 which means pink is not present
--------------------------------------------------
//includes

console.log(colors.includes("red"));
console.log(colors.includes("pink"));

---------------------------------------------------
  //Concat

let primColors = ['red', 'blue', 'green'];
let secColors = ['pink', 'yellow', 'white'];
let allColors =(primColors.concat(secColors));
console.log(allColors);
---------------------------------------------------

//Reverse 
let names = ["nammu", "hemu", "sam", "anu"];
let reversedArray = names.reverse();
console.log(reversedArray);
------------------------------------------------
  //slice method
  
let colors = ["red", "blue", "green", "yellow", "saffron", "white", "black", "cyan", "grey"];
console.log(colors.slice(4));
console.log(colors.slice());
console.log(colors.slice(-2));
console.log(colors.slice(2, 5));
--------------------------------------------------------------------------------------------------
  
//SPLICE Method
let items = ["apple", "ball", "cup", "doll", "egg", "fan", "gloves", "hat", "ice", "jug"];

//to add 2 elemts at index 3 without deleting any elmt
console.log(items.splice(3, 0, "carrot", "carrom"));
console.log(items);

//all items from index 7 are deleted
console.log(items.splice(7)); //elements from index4 are spliced and 6 elmnts(till index5) are reamined in array
console.log(items); // only 6 items till 5 index are remaining and are printed

//to delete 2 elemt in array from start (0 index)
items.splice(0, 2);
console.log(items);

//to delete elmt at index 2 and add 3 elmnts
items.splice(2, 1, "item1", "item2", "item3");
console.log(items);

------------------------------------------------------------------------------------------------------------------------
  //Sort 
let alphabets = ["d", "e", "x", "s" , "k"];
newArr = alphabets.sort();
console.log(newArr);

//note: nums are sorted differently 
--------------------------------------------------
  //ex
let arr = ["jan", "july", "mar", "aug"];
console.log(arr.splice(0, 2, "july", "june"));
console.log(arr);
--------------------------------------------------
  
//ex
let lang = ["c", "c++", "html", "js", "python", "java", "c#", "sql"];
store = lang.reverse();
console.log(store);
console.log(store.indexOf("js"));
//or
console.log(lang.reverse().indexOf("js"));
-------------------------------------------------------------------------
  //Array references
  
let arr = [1, 2,3];
console.log(arr);
let arrCopy = arr;
console.log(arrCopy);


address are compared not the values so arrays are not same
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

if(arr1 == arr2) {
    console.log("same");
} else {
    console.log("not same");
}
-----------------------------------------------------------------------
  //const array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// here const array values can be changed but not its refrence so its const array
-----------------------------------------------------------------------------------
 //NESTED ARRAY [ARRAY OF ARRAYS] 
let arry = [[1, 2], [3, 4], [5, 6, 7]];  
console.log(arry);
console.log(arry[0][0]);
console.log(arry.length);
console.log(arry[0].length);
console.log(arry[2].length);
-------------------------------------------------
  
//tic tac toe game state

let game = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
console.log(game);

// target a position 
game[0][1] = "O";
console.log(game);
-------------------------------------------------------------------------
  //ex prob

let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(0, n);
console.log(ans);
-------------------------------
  //ex 2
let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(-3);
console.log(ans);
-------------------------------------
  
let str = "";

if(str.length == 0) {
    console.log("empty");
} else {
    console.log("not emppty");
}

//or

let str = prompt("enter a string");
if(str.length == 0) {
    console.log("empty");
} else {
    console.log("not empty");
}
---------------------------------------
  //Character at index 3 is lower case or not
let str = "NarMaDa GogiNeni";
let idx = 3;

if(str[idx] == str[idx].toLowerCase()) {
    console.log("lower case");
} else {
    console.log("not lower case");
}
-------------------------------------------------
  // to check whole string is upper or lower
let str = "narmada gogineni";

if(str == str.toLowerCase()) {
    console.log("lower case");
} else {
    console.log("not lower case");
}
--------------------------------------------------
  //Trim ex
let str = prompt("enter a string");

let originalStr = str;
let newStr = (str.trim());
console.log(originalStr);
console.log(newStr);
-------------------------------------------

//element present in arr or not
  
let arr = [1, 2, 3, 4, 5];

if(arr.includes(2)) {
    console.log("present");
} else {
    console.log("absent");
}

or

let arr = [2, 65, 78, 2, -5, -34];
let elmt = -5;

if(arr.indexOf(elmt) == -1) {
    console.log("absent");
} else {
    console.log("present");
}

--------------------------------------------

                       //LOOPS

                    //FOR LOOPS
  
for(let i=1; i<=5; i++) {
    console.log(i);
}
---------------------------------------------------
//backwards
  
for(i=5; i>=1; i--) {
    console.log(i);
}
-------------------------------------------------
  for(i=1; i<=10; i=i+3) {
    console.log(i);
}
----------------------------------------------
  //BACKWARDS

  for(i=10; i>=1; i=i-2) {
    console.log(i);
}
------------------------------------------
  //odd num
for(i=1; i<=15; i++) {
    if(i%2!=0) {
        console.log(i);
    }
}
//or
  
for(i=1; i<=15; i=i+2) {
    console.log(i);
}
-----------------------------------------
  //backwards ODD NUM
  
for(i=15; i>=1; i=i-2) {
    console.log(i);
}
----------------------------
  //even num 
for(i=1; i<=15; i++) {
    if(i%2==0) {
        console.log(i);
    }
}
//or
for(i=2; i<=15; i=i+2) {
    console.log(i);
}
--------------------------------------
//backwrds
  
for(i=14; i>=2; i=i-2) {
    console.log(i);
}
-----------------------------------
  //even odd
for(i=1; i<=20; i++) {
    if(i%2==0) {
        console.log(`${i} is even`);
    } else if(i%2!=0) {
        console.log(`${i} is odd`);
    }
}
--------------------------------------------
  //multiplication table
  
for(i=5; i<=50; i=i+5) {
    console.log(i);
}

let n = 10;
for(let i=n; i<=n*10; i=i+n) {
    console.log(i)
}
//or
  
let n = prompt("enter a num");
n = parseInt(n);

for(i=n; i<=n*10; i=i+n) {
    console.log(i);
}
----------------------------------------
  // Nested for loop

for(i=1; i<=3; i++) {
    console.log("outer loop")
    for(j=1; j<=3; j++) {
        console.log(j); 
    }
}
-------------------------------------
                                     //WHILE LOOP

let i = 1;  //initialize
while(i<=5) {  //condition
    console.log(i);
    i++;  //increment
}
---------------
//backwards
let i=5;
while(i>=1) {
    console.log(i);
    i--;
}
----------------------------------------------
// nums from 0 to 20
let j = 0;
while(j<=20) {
    console.log(j);
    j++;
}
-----------------------------------------
// print even no.s
let i = 2;
while(i<=10) {
    console.log(i);
    i= i+2;
}
---------
//backwards even no
let i=10;
while(i>=2) {
    console.log(i);
    i=i-2;
}
----------------------------------------------
//odd nums
let i=1;
while(i<=10) {
    console.log(i);
    i=i+2;
}
----------------
//Backwards off no
let i = 9;
while(i>=1) {
    console.log(i);
    i= i-2;
}
----------------------------------------------
//FAV =ORITE MOVIE task 2

  const favMovie = "avatar";
let guess = prompt("Guess my Favorite movie: ");

while(guess != favMovie) {
    if(guess == "quit") {
        console.log("You Quit");
        break;
    }
    guess = prompt("Wrong guess! Please Try again.");
}

if(guess == favMovie) {
    console.log("Congrats! You guessed it right!");
}
-----------------------------------------------------------
 // loop on arrays
  
  let fruits = ["mango", "apple", "litchi", "orange", "pineapple"];

for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}
------------------------------------------------------------------------------
//even 
  
let fruits = ["mango", "apple", "litchi", "orange", "pineapple"];
fruits.push("custard apple", "chikku");
// console.log(fruits);
for(let i=0; i<fruits.length; i=i+2) {
    console.log(i, fruits[i]);
}

-------------------------
//backwards
let fruits = ["mango", "apple", "litchi", "orange", "pineapple", "custard apple", "chikku"];
for(let i=fruits.length-1; i>=0; i=i-2) {
    console.log(i, fruits[i]);
}

  ----------------------------------------------------------------------------------
//odd
let fruits = ["mango", "apple", "litchi", "orange", "pineapple", "custard apple", "chikku"];
for(let i=1; i<fruits.length; i=i+2) {
    console.log(i, fruits[i]);
}

--------------------------
//backwards
let fruits = ["mango", "apple", "litchi", "orange", "pineapple", "custard apple"];
for(let i=fruits.length-1; i>=1; i=i-2) {
    console.log(i, fruits[i]);
}
-------------------------------------------------------------------------------------
// NESTED LOOPS WITH NESTED ARRAYS
  
// ex 1
let heroes = [
    ["Prabhas", "Mahesh", "Ram"],
    ["srk", "ameer khan", "salman khan"]
];

for(let i=0; i<heroes.length; i++) {
    console.log(i,heroes[i], heroes[i].length );
    for(j=0; j<heroes[i].length; j++) {
        console.log(j, heroes[i][j]);
    }
}
--------------------------
//ex 2
let students = [
    ["nammu", 21],
    ["hemu", 23],
    ["rekha", 30]
];

for(let i=0; i<students.length; i++) {
    console.log(i, students[i], students[i].length);
    for(let j=0; j<students[i].length; j++) {
        console.log(j, students[i][j]);
    }
}
----------------------------------------------------------------------------------
//FOR OF LOOPS
  
//it can be applied to both string and arrays
let fruits = ["mango", "banana", "orange", "grapes", "avacado", "pineapple"];

for(let fruit of fruits) {
    console.log(fruit);
}
------------------------------------------
//ex 2
let string = "Bengaluru";

for(let char of string) {
    console.log(char);
}
========================================================================
  
//NESTED FOR OF LOOP
  
let lists = [
    ["hemanth", "prasbhas", "mahesh"],
    ["nammu", "kajal", "sam"]
];

for(let list of lists) {
    // console.log(list);
    for(let name of list) {
        console.log(name);
    }
}
================================================================
//TODO APP task 2
  
let todo = [];

let req = prompt("Enter your REQUEST:");

while(true) {
    if(req == "quit") {
        console.log("quitting the App");
        break;
    }

    if(req == "list") {
        console.log("----------------------");
        for(let i = 0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------------");
    } else if(req == "add") {
        let task = prompt("Enter a task to ADD");
        todo.push(task);
        console.log("1 new task added");
    } else if(req == "delete") {
        let idx = prompt("Enter the index od task to be deleted");
        todo.splice(idx, 1);
        console.log("Task deleted");
     } else { 
             console.log("Wrong request")
             }

    req = prompt("Enter your REQUEST:");

}
======================================================================
//JS program to delete all occurrences of element ‘num’ in a given array.
//if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
//Result arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
num = 2;

for(i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);
-----------------------------------------------------------------------------
// total no of digits in a number.
// Example : if number = 287152, count = 6

let num = 287152;
let number = num.toString();
let count = 0;

for(let i=0; i<number.length; i++) {
    if(i>=0){
        count++;
    }
}
console.log(count);
---------------------------------------------------
//sum of digits of a num;
let number = 287152;
let sum = 0;

while(number>0) {
    sum+=number % 10
    number = Math.floor(number/10);
}
console.log(sum);
-------------------------------------------------
//factorial of a num
let n = 5;
fact = 1;

for(let i=1; i<=n; i++) {
    fact= fact * i
}
console.log(fact);
------------------------------------------------
// largest num in array
let arr = [28, 4, 15, 9, 3, 75, 23];
let largest = 0;

for(let i=0; i<arr.length; i++) {
    if(largest<arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);
------------------------------------------
// OBJECT LITERALS
// SYNTAX
let student = {
    name : "Narmada",
    age : 21,
    marks : 96,
    place : Bangalore
};
------------------------------------------------
//arrys can be stored in obj literals ex
let item = {
    price : "50.60 paisa",
    quatity : "500g",
    color : ["pink", "green", "red"],
};
--------------------------------------
let post = {
    username : "@narmadagogineni",
    based : "Bharat",
    content : "This is my first post",
    likes : 150,
    reposts : 10,
    tags : ["@alpha", "@delta"]
}

console.log(post.content);
console.log(post.likes);
//or
console.log(post["likes"]);

//NOTE : tags and 5 together is called as property
//to access property we can use dot oparator as above insr=tead we use
let propertyy = "reposts";
console.log(post[propertyy]);
------------------------------------------------------------------------------
//COVERSION IN GET VALUES
let obj = {
    1 : "a",
    2 : "b",
    null : "c",
    undefined : "d",
    true : "e"
}

console.log(obj.null);
//console.log(obj."1"); //error
console.log(obj[1]); //no error
console.log(obj.true);
console.log(obj.undefined);
---------------------------------------------------------------------
//add / update / delete object literals

let employee = {
    name : "Narmada",
    city : "bengaluru",
    // nationality : "indian",
    
};
---------------------
//to update 
console.log(employee.marks);
console.log(employee.marks = 100);  //marks updated to 100
console.log(employee);
-----------------------
//to add
employee.gender = "female";
employee.age = "21";
console.log(employee);
-----------------
//to delete
delete employee.age;
console.log(employee);
----------------------------------------------------------------
//OBJECT OF OBJECTS
let classInfo = {
    nammu : {
        age : 21,
        marks : 90
    },
    hemu : {
        age : 23,
        marks : 97
    },
    somu : {
        age : 53,
        marks : 99
    }
};
console.log(classInfo);
console.log(classInfo.somu)
console.log(classInfo.hemu)
console.log(classInfo.nammu)
console.log(classInfo.hemu.age);
console.log(classInfo.nammu.marks);
---------------------------------------
//ARRAY OF OBJECTS
const classInfo = [
    {
        name : "nammu",
        grade : "A+",
        city : "bangalore"
    },
    {
        name : "hemu",
        grade : "O",
        city: "bangalore"
    },
    {
        name : "ramu",
        garde : "A",
        city : "Hyd"
    }
];
console.log(classInfo);
console.log(classInfo[0].name);
console.log(classInfo[2].city);
--------------------------------------------------
//MATH OBJ
//RANDOM NUMBER
  //syntax
let num = Math.floor(Math.random() * 10 ) + 1;
console.log(num);
-------------------------------------------------
//ex1
let num = Math.floor(Math.random() * 100) + 1;
console.log(num);
---------------------------------------------------
//ex2
let num = Math.floor(Math.random() * 5) + 1;
console.log(num);
-----------------------------------------------------
//ex3 TO GENERATE FROM 20 TO 24
let num = Math.floor(Math.random() * 5 ) + 20;
console.log(num);
---------------------------------------------------
//ex4 TO GENERATE FROM 21 TO 25
let num = Math.floor(Math.random() * 5 ) + 21;
console.log(num);
-------------------------------------------------------------------------

//TASK 3
  
const max = prompt("Enter the max range of number you want to play: ");

const rand = Math.floor(Math.random() * max) + 1;
// console.log(rand);
let guess = prompt("Guess the number: ")
while(true) {
    if(guess == "quit") {
        alert("Quitting the game");
        break;
    }

    if(guess == rand) {
        alert('You got it right! Congrats!!', rand);
        console.log('You got it right! Congrats!!, The random number was', rand);
        break;
    } else if(guess < rand) {
        guess = prompt("Hint: Enter a larger number!");
    } else if(guess > rand) {
        guess = prompt("Hint: Enter a smaller number!");
    }

}
--------------------------------------------------------------------------------

//DICE ROLL 1-6 NUMS

let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);
-----------------------------------------------
// object literal
let car = {
    name : "porshe",
    model : "g12",
    color : "black"
}

console.log(car.name);
----------------------------------------------
//ex 2
let person = {
    name :"nammu",
    age: 21,
    city: "New Jersey"
}
person.city = "New York";
console.log(person.city);
person.country = "United States";
console.log(person);
--------------------------------------------
//FUNCTION
function hello() {
    console.log("Hello, This is James! welcome to my coding area. Hope you like it..");
    console.log("Keep Exploring! Keep Learning");
}

hello();
--------------------------------------------------------------------------------------------
//ex 2
function printName() {
    console.log("My name is Narmada Gogineni");
    console.log("My age is 21");
    console.log("Im a coder and Porgrammer");
}

printName();
------------------------------------------------------
//loops in func
function toPrintNum() {
    for(let i=1; i<=10; i++) {
        console.log(i);
    }
};
toPrintNum();
--------------------------------------------
//if else in function
function isAdult() {
    let age = 21;
    if(age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not an adult");
    }
};
---------------------------------------------------------------
// ex2
function poem() {
    console.log("Twinkle twnikle, little star,");
    console.log("How I wonder what you are");
    console.log("Up above the sky so high");
    console.log("Like a diamond in the sky");
}

poem();
-------------------------------------------------------
//ex3 dice roll
function dice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
};

dice();
-----------------------------------------------------
//functions with arguments
function printName(name) {
    console.log("Welcome", name);
};

printName("Narmada");
----------------------------------------------
//ex 2
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
};
printInfo("Narmada", 21);
-----------------------------------------------
//missing arguments
printInfo("Hemanth");
-------------------------------
//sum of two num
function sum(a, b) {
    return a+b;
}
console.log(sum(2, 6));
//or---------
function sum1(a, b) {
    console.log(a+b);
};
sum1(3, 6);
-----------------------------------
//avg of 3 num
function avg(a, b, c) {
    console.log((a+b+c)/3);
};
avg(3, 6, 9);

//or ------------

function calcAvg(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg);
};
calcAvg(2,6,4);
------------------------------------------
  //print Table
function printTable(n) {
    for(let i=n; i<=n*10; i=i+n) {
       console.log(i);
    }
};
printTable(4);
-------------------------------------------
----//RETURN KEYWORD----------

//sum of two num
function sum(a, b) {
    return a+b;
}
console.log(sum(2, 6));
//or
let s = sum(2, 6);
console.log(s);
---------------------------------------------------
//sum of 3 num using return
function sum_three(a, b) {
    return a+b;
};
let s1 = sum(sum(1,2),3);
console.log(s1);
-------------------------------------
//sum of 3 without return
function sum3() {
    console.log(a+b);
};
let s2 = sum(sum(1, 2), 6);
console.log(s2);
-------------------------------------------------------------
//ANYTHING written after RETURN keyword will NOT be excuted
// ex1
function calc() {
    console.log(a+b);
    console.log(a-b);
    return a*b;
    console.log(a/b); //not be executed 
}
-------------------------------------------------
// ex2
function adult(age) {
    if(age>=18) {
        return ("adult");
    } else {
        return ("not an adult");
    }
    console.log("bye"); //doesnt gets executed
};

console.log(adult(15));
--------------------------------------------------
//return the sum of n naural numbers
function naturalNum(n) {
    let sum=0;

    for(let i=1; i<=n; i++) {
        sum +=i;
    }
    return sum;
}
console.log(naturalNum(3));

-------//or

function getSum(m) {
    let sum = 0;

    for(let i=0; i<=m; i++) {
        s = sum+=i;
    }
    return s;
};
console.log(getSum(4));
console.log(getSum(4000));
-------------------------------------------------
//concatenation of strings in an array

let str = ["hello", "hi", "bye", "bye"];

function concat(str) {
    let result = "";

    for(let i=0; i<=str.length; i++) {
        result += str[i];
    }

    return result;
};

console.log(concat(str));
------------------------------------------------------
--------SCOPE--------------

//functional scope
function calSum(a, b) {
    let sum = a+b;
    console.log(sum);       //prints the sum since its called inside the function
};

calSum(2, 4);
//console.log(sum);        //sum doesn't gets printed if called outisde the function 
----------------------------------------------------------------------------------------
//global scope
let sum = 50;                //global variable
function calSum(a,b) {
    let sum = a+b;          //functiona; variable
    console.log(sum);       //prints a+b value due to func scope
};
calSum(4, 6);
console.log(sum);           //prints 50 due to global scope

---------------------------------------------------------------------------------
//global scope
let sum = 50;                //global variable
function calSum(a,b) {
    // let sum = a+b;          //if functional scope variable is not defined it prints global variable
    console.log(sum);       //prints a+b value due to func scope
};
calSum(4, 6);
console.log(sum);           //prints 50 due to global scope
--------------------------------------------------------------------
// Block scope
{
    let a = 5;
    const b = 10;
    var c = 15;
}

// console.log(a);    //error - a is undefined due to block scope {}
// console.log(b);     // error - b is undefined due to bocl scope 
console.log(c);         //prints c because var keyword doesn't have block scope 
------------------------------------------------------------------------------------
//ex 2
for(let i=0; i<=10; i++) {
    console.log(i);    //prints 0 - 10 
};

console.log(i);        //error- i not defined due to block scope
----------------------------------------------------------------------
//ex3 
let age = 21;

if(age>=18) {
    let str = "adult";  //prints adult
    console.log(str);
};

// console.log(str);    //error -  str undefined

--------------------------------------------------------
//lexical scope
function outerFunc() {
    let x = 5;
    let y = 10;
    function innerfunc() {
        console.log(x);
    }
    // innerfunc();
}

--------------------------------------------------
//case 2
function outerFunc() {
    let x = 5;
    let y = 10;
    function innerfunc() {
        console.log(x);
    }
    innerfunc(); //accesible inside
}

// innerfunc(); //not accesible outside
------------------------------------------------------

//case 2
function outerFunc() {
    let x = 5;
    let y = 10;
    function innerfunc() {
        let a = 2;
        console.log(x);    //can access x from outerfunc but viceversa not possible
        console.log(a);  //acessible by itself
    }
    innerfunc();
    // console.log(a);    //a is not accesbile by outerfunc
}
------------------------------------------------------------------------------
//case 3
function outerFunc() {
    let x = 5;
    let y = 10;
    console.log("hi")
    function innerFunc() {
        let a = 2;
        console.log(x);    //can access x from outerfunc but viceversa not possible
        console.log(a);    //acessible by itself
    }
    innerFunc();          //if commented out innerfunc doesnt get executed
    // console.log(a);    //a is not accesbile by outerfunc
}
outerFunc();  
---------------------------------------------------------------------------------------
//guess the ouput
let greet = "Hello!";             //global scope

function changeGreet() {
    let greet = "Namaste!";     //functional scope
    console.log(greet);
    function innerGreet() {
        console.log(greet);      //lexiacl scope
    }
    // innerGreet();
}

console.log(greet);
changeGreet();

// o/p
hello
namaste
namaste
-----------------------------------------------------------------------
// function expressions
let name = "narmada";
//similarly func is defined and stored in a variable
let sum = function(a, b) {
    return a+b;
}
s = sum(2, 4);
console.log(s);
-------------------------------------------------------
//ex 2
let hello = function() {
    console.log("hello, welcome back");
}

hello();
hello();
-----------------------------------------------
//hello func value can be updated
hello = function() {
    console.log("Namaste!");
}

hello();
-----------------------------------------------
//Higher order functions
//cond 1 : takes one or more functions as an arguments
// ex 
function multipleGreet(func, n) {
    for(let i=1; i<=n; i++) {
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

let greet2 = function() {
    console.log("Namaste!");
}

multipleGreet(greet, 4);
multipleGreet(greet2, 2);
--------------------------------------------------
//odd func

let odd = function(n) {
        console.log(n%2!=0);
}

odd(5);
--------------------------------
//even function

let even = function(n) {
    console.log(n%2==0);
}

even(80)
---------------------------------------
//higher order function
//condition 2 : that returns a function

function oddOrEvenTestFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(n%2 != 0);
        }
    } else if (request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        } 
        } else {
            console.log("wrong request");
        }
    }    

//check
let request = "odd";
console.log(request);
let f = oddOrEvenTestFactory(request);
console.log(f);
f(134679);
f(1394);

//check 2
let request = "even";
console.log(request);
let f1 = oddOrEvenTestFactory(request);
console.log(f1);
f1(1346);
f1(134679);
------------------------------------------------

// type 2
function evenOddTest(req) {
    if(req=="odd") {
        let odd = function(n) {
            console.log(n%2!=0);  
        }

        return odd;
    } else if(req=="even") {
        let even = function(n) {
            console.log(n%2==0);
        }

        return even;
    } else {
        console.log("Wrong req");
    }
}

//check 
let req = "odd"; //even
console.log(req);
let func = evenOddTest(req);  
console.log(func);
func(3); 
func(8); 

//check 2
let req = "even";
console.log(req);
let func2 = evenOddTest(req);
console.log(func2);
func2(6);
func2(61);

--------------------------------------------------------
//Methods
let calculator = {
    num : 20,
    add : function(a, b) {
        return a+b;
    },
    sub : function(a, b) {
        return a-b;
    },
    mul : function(a, b) {
        return a*b;
    }
};

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(2,5));
console.log(calculator.sub(12,3));
console.log(calculator.mul(20,5));
-----------------------------------------------------------
  
//Shorthand of Methods
const calculator = {
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    },
    mul(a, b) {
        return a*b;
    }
};

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(20,5));
console.log(calculator.sub(12,3));
console.log(calculator.mul(20,5));
-------------------------------------------------------------------
  
//return all array element which are larger than a given num
let num = 50;
let arr = [45, 76, 3, 89, 35, 78, 24, 90, 88];
function getLarger(arr, num) { 
    for(let i=0; i<arr.length; i++) {
        if(num<arr[i]) {
            console.log(arr[i]);
        }    
    }
}

getLarger(arr, num);
--------------------------------------------------------
//largest country name in output
let country = ["Bharat", "Usa", "uae", "peru"];


function longestname(country) {
    let ansIdx = 0;
    for(let i=0; i<country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
    
};

console.log(longestname(country));
------------------------------------------------------------
//THIS keyword
This method is used in objects and not in functuons

let student = {
    name : "Narmada",
    age : 21,
    eng : 99,
    mat : 98,
    sci : 97,
    place : "New york",
    calAvg() {
        let avg = ((this.eng + this.mat + this.sci)/3)
        console.log(avg);
           console.log(`${name}'s avg marks is ${avg}`);
    }
    
}
student.calAvg();

-------------------------------------------------------------------
//WITHOUT this keyword
//to do this we have to define functions and not objects
function stud() {
    let name = "nammu";
    let age = 21;
    let mat = 98;
    let sci = 34;
    function getAvg() {
        let avg = (mat + sci) / 2;
        console.log(avg);
    }   
    getAvg();
};

stud();
------------------------------------------------------------------
// to check this value
let student = {
    eng : 99,
    mat : 98,
    sci : 97,
    calAvg() {
        console.log(this);                  //check console - so basically here "this" is the student object and all the objects inside it
        let avg = (this.eng + this.mat)/ 2;
        console.log(avg);      
    }   
}
student.calAvg();
------------------------------------------------------------------
  
//to check this outside a method / or in a function
function getAvg() {
    console.log(this);       //here "this" is window object i.e when there is no object window is the default obj
}
getAvg();     
------------------------------------------------------------------
  
//try and catch

console.log("Hello");
console.log("Hello");
console.log(a);          //throws error
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
------------------------------------------------------------------
//to solve the above error
console.log("Hello");
console.log("Hello");
try {
    console.log(a);
} catch {
    console.log("There is a error");
}
console.log("Hello");
console.log("Hello");
console.log("Hello");
------------------------------------------------------------------
//to print the content of the error
console.log("Hello");
console.log("Hello");
try {
    console.log(a);
} catch(e) {
    console.log("There is a error");
    console.log(e);
}
console.log("Hello");

//error e can be written as e , err, error
--------------------------------------------------------------------------------------------------
//----------------MISCELLANEOUS FUNCTIONS---------------

// //Arrow functions
// const addNumbers =(num1, num2)=> num1+num2 ;   //arrow function with one parameter
// console.log(addNumbers);

// ex1
let sum = (a, b) => {
    console.log(a+b);
};
sum(2,5);
--------------------------------------------------------------------------------------------------
//ex2
const cube = (n) => {
    console.log(n*n*n);
};
cube(3);
--------------------------------------------------------------------------------------------------
//ex3
const pow = (c, d) => {
    console.log(c**d);
};
pow(4, 4);
--------------------------------------------------------------------------------------------------
//ex4
let hello = () => {
    console.log("Hello!");
};
hello();
--------------------------------------------------------------------------------------------------
//ex5 using return
let power = (x, y) => {
    return x**y
};
console.log(power(2, 4));
--------------------------------------------------------------------------------------------------
//Arrow functions - IMPLICIT RETURN

// ex1
let mul = (e, f) => (e*f);
console.log(mul(60, 789));
--------------------------------------------------------------------------------------------------
//ex2
let div = (i, j) => (
    i/j
);
console.log(div(10, 2));
--------------------------------------------------------------------------------------------------
// ex3
let sum = (a, b) => 
    (a+b)
console.log(sum(2,5));
--------------------------------------------------------------------------------------------------
//ex4
const cube = (n) => (n*n*n);
console.log(cube(3));
--------------------------------------------------------------------------------------------------
//ex5
const pow = (c, d) => (c**d);
console.log(pow(4, 4));
--------------------------------------------------------------------------------------------------
//ex6
let hello = () => ("Hello!");    //not working same as above hello arrow func
console.log(hello);         

--------------------------------------------------------------------------------------------------
//setTimeout function

// ex1 
console.log("Hi, There");

setTimeout(() => {
    console.log("Javascript Mastery");
}, 4000);

console.log("Welcome to");
--------------------------------------------------------------------------------------------------
//ex2 
console.log("Hey");

setTimeout(() => {hello}, 5000);

console.log("Bye");    

let hello = () => ("Hellow elcome to js");
--------------------------------------------------------------------------------------------------

// setInteval function
console.log("Hi");
setInterval( () => {
    console.log("Javascript mastery");
}, 2000);
console.log("bye");

to stop the executing after some time we use clearInterval
--------------------------------------------------------------------------------------------------
// clearInterval using ids
console.log("Hi");
let id1 = setInterval( () => {
    console.log("Javascript mastery");
}, 2000);
console.log("hello");

clearInterval(id1);

console.log("bye");
let id2 = setInterval( () => {
    console.log("React now");
}, 2000);
console.log("bye again");

clearInterval(id2);

console.log(id1);
console.log(id2);

--------------------------------------------------------------------------------------------------

//This with Arrow functions
let marks = 78;
const student = {
    name : "Nammu",
    marks : 96,
    property : this,             //global scope --> window
    getName : function () {
        console.log(this);       //functional scope --> student
        return this.name;
    },
    getMarks : () => {
        console.log(this);       //arrow scope = parent scope, and parent scope is global scope --> window
        return this.marks;
    },
};

student;
student.getName();
console.log(student.getName());
student.getMarks();         //this.marks gives undefined to get marks printed check next code
console.log(student.getMarks());
--------------------------------------------------------------------------------------------------
//get marks printed
let marks = 78;
const student = {
    name : "Nammu",
    marks : 96,
    property : this,             //global scope --> window
    getName : function () {
        console.log(this);       //functional scope --> student
        return this.name;
    },
    getMarks : () => {
        console.log(this);       //arrow scope = parent scope, and parent scope is global scope --> window
        return marks;
    },
};

student;
student.getName();
console.log(student.getName());
student.getMarks();
console.log(student.getMarks());
--------------------------------------------------------------------------------------------------
// case 2
// arrow func = lexical scope - parent this is my this (the one who called me, their this is my this)
// normal func - my this is my this (the one who called me is my this)

const student = {
    name : "Hemu",
    marks : 98,
    getInfo1 : function () {       //parent func of arrow func 
        setTimeout(() => {         //arrow func
            console.log(this)       //student - bcz my parent is func and func this is student so student is my this
        }, 1000);
    },
    getInfo2 : function() {
        setTimeout (function () {      //parent func
            console.log(this);         //window - bcz setTimeout is a window inbuilt func
        }, 1000);
    },
};
--------------------------------------------------------------------------------------------------
//practice Qs
const square = (n) => (n*n);
console.log(square(13));

// Qs2 write a func that prints "hello world" 5 times at the interval of 2 sec each
let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran")
}, 10000);

--------------------------------------------------------------------------------------------------
// ARRAY METHODS
  
// 1. forEach 

// foreach for arrays

// passing functionName

let arr = [1, 2, 4, 6, 7, 8];

let print = function(elmt) {
    console.log(elmt);
};
arr.forEach(print);

// or----

// directly passing function definition

arr.forEach(function(elmt) {
    console.log(elmt);
})

// or----

//arrow function

arr.forEach((element) => {
    console.log(element);
});

--------------------------------------------------------------------------------------------------
// NOTE : forEach for objects of objects is not possible bcz these are array methods and not object methods
--------------------------------------------------------------------------------------------------
// //foreach of array of objects

let student = [{
    Name : "Nammu",
    age : 21,
},
 {
    Name : "Hemu",
    age : 23,
 },
  {
    Name : "Karan",
    age : 25,
  }];

 student.forEach((element) => {
    console.log(element);
 });

 student.forEach((element) => {
    console.log(element.Name);
 });

 student.forEach((element) => {
    console.log(element.age);
 }); 
--------------------------------------------------------------------------------------------------
//MAP 

// ex1
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});

console.log(double);
-------------------------------------------------------------------------------------------------------------------------
// ex2
let square = num.map((el) => {
    return el*el;
});
console.log(square);

const student = [
    {
        name : "Nammu",
        marks : 98,
    },
    {
        name : "Hemu",
        marks : 89,
    },
    {
        name : "jyo",
        marks : 86,
    }
];

let gpa = student.map((el) => {
    return (el.marks/10);
});

console.log(gpa); 
-------------------------------------------------------------------------------------------------------------------------
//filter

//ex filter even nums
let nums = [2,3,4,5,6,8,9,1,2,31,45];
let evens = nums.filter((el) => {
    return el%2==0;    //true for even, false for odd
});

console.log(evens);
-------------------------------------------------------------------------------------------------------------------------
// ex2 filter odd nums
let numbers = [2, 3, 4, 6, 7, 8, 9, 14, 9, 0, 7, 4, 3, 17, 2];
let odds = numbers.filter((el)=> {
    return el%2!=0;  //truw for odds, false for even
});

console.log(odds);
-------------------------------------------------------------------------------------------------------------------------
//ex3 filter values less than 5

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let values = nums.filter((el) => {
    return el < 5;
});

console.log(values);
-------------------------------------------------------------------------------------------------------------------------
//EVERY 
//returns true only if all elements satisfy the given condition
// ex1 even 

let num = [2, 4, 6, 8];
num.every((el)=>(el%2==0));

//   or syntax

even = num.every((el) => {
    return el%2==0;
});

console.log(even);
-------------------------------------------------------------------------------------------------------------------------
// ex2 odd 
let nums = [1, 3, 5, 7];
odd = nums.every((el) => {
    return el%2!=0;
});

console.log(odd);
-------------------------------------------------------------------------------------------------------------------------
// ex3 
let arr = [6, 7, 8, 9];
array = arr.every((el) => {
    return el > 5;
})

console.log(array);
-------------------------------------------------------------------------------------------------------------------------
//SOME

//ex1

let num = [ 3, 5, 7, 11, 9];

arr = num.some((el) => {
    return el%2!=0;
});

console.log(arr);
-------------------------------------------------------------------------------------------------------------------------
// ex2

let num = [2, 4, 8, 6];
greaterNum = num.some((el) => {
    return el > 5;
});

console.log(greaterNum);

-------------------------------------------------------------------------------------------------------------------------
//Reduce - reduces an array to single value

let arr = [1, 2, 3, 4];

let newArr = arr.reduce((accumulator, element) => {
    return accumulator + element;
});

console.log(newArr);
-------------------------------------------------------------------------------------------------------------------------
//cal sum of num in array
let num = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

let sum = num.reduce((res, el) => {
    // console.log(res);
    return res + el;
});

 console.log(sum);
-------------------------------------------------------------------------------------------------------------------------
//ex subtraction

let num = [104, 12, 15, 17];

let sub = num.reduce((res, el) => {
    // console.log(res);
    return res - el;
});

console.log(sub);

-------------------------------------------------------------------------------------------------------------------------
//ex to find max num using 1) loops and 2) reduce method

// using loop
let num = [1, 2, 3, 7, 9, 4, 12, 45, 8, 34];
let max = -1    //or 0

for(let i=0; i<num.length; i++) {
    if(max<num[i]) {
        max = num[i];
    }
}

console.log(max);
-------------------------------------------------------------------------------------------------------------------------
//using reduce

let arr = [1, 2, 3, 7, 9, 4, 12, 45, 8, 34];

let result = arr.reduce((max, el) => {
    if(max> el) {
        return max;
    } else {
        return el;
    }
});

console.log(result);

-------------------------------------------------------------------------------------------------------------------------
// practice Qs

//check if all nums in array are multiples of 10 or not
//all nums means every

let arr = [60, 10, 20, 40, 50, 100];
let muls = arr.every((el) => {
    return el%10==0;
});

console.log(muls);
-------------------------------------------------------------------------------------------------------------------------
  
//check min num in array
let arr = [2, 3, 4, 7, 9, 1, 5];

let min = arr.reduce((min, el) => {            //min as new array and min also as accumulator but no error bcz one is global scope other is func scope
    if(min<el) {
        return min;
    } else {
        return el;
    };
});

console.log(min);

// or-------

//using combination of functions and reduce (array methods)

function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if(min<el) {
            return min;
        } else {
            return el;
        };
    });
    return min;
};

let nums = [2, 3, 5, -1, -23, 43, 67];
console.log(getMin(nums));
-------------------------------------------------------------------------------------------------------------------------
//default parameter

function sum(a, b=3) {
    return a+b;
};

console.log(sum(2));
-------------------------------------------------------------------------------------------------------------------------
// Spread

// ex -- to get min num
console.log(Math.min(11, 2, 4, 6, 10));
console.log(Math.min(11, 2, 4, 6, 10, 33, 56, 1, 7, 3, 9));

-------------------------------------------------------------------------------------------------------------------------
let arr = [23, 45, 3, 6, 2];
console.log(Math.min(arr));  //gives NaN
console.log(Math.min(arr[0], arr[1], arr[2], arr[3], arr[4])); //to solve this issue

// we use spread (...arrayName) to solve this
console.log(Math.min(...arr));
-------------------------------------------------------------------------------------------------------------------------
// ex2-- to get max 
console.log(Math.max(...arr));
-------------------------------------------------------------------------------------------------------------------------
//ex3-- spread array

let evenNum = [2, 4, 6, 8, 10, 12, 14, 16, 28];
console.log(evenNum);

console.log(2, 4, 6, 8, 10, 12, 14, 16, 28);

//to spread evenNum array
console.log(...evenNum);
-------------------------------------------------------------------------------------------------------------------------
  
//ex4 -- to spread string

let str = "Narmada Gogineni";
console.log(...str);
-------------------------------------------------------------------------------------------------------------------------

// spread ARRAY LITERALS
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];
console.log(newArr);

let char = [..."hello"];
console.log(char);

let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7, 9];

let nums = [...odd, ...even];
console.log(nums);
-------------------------------------------------------------------------------------------------------------------------
  
//spread - OBJECT LITERALS

const data = {
    email : "ironman@gmail.com",
    password : "abcd"
};

dataCopy = {...data};
console.log(dataCopy);
-------------------------------------------------------------------------------------------------------------------------
  
//can add few more properties

const data = {
    email : "ironman@gmail.com",
    password : "abcd"
};

dataCopy = {...data, id : 123 , country : "India"};
console.log(dataCopy);
-------------------------------------------------------------------------------------------------------------------------

//spreading array literals into obj literals
let arr = [1, 2, 3, 4, 5, 6];
let obj1 = {...arr};              //obj - key-val pair   so index is taken as key

console.log(obj1);

let obj2 = {..."Hello"};       //  index is taken as key 
console.log(obj2);
-------------------------------------------------------------------------------------------------------------------------
  
// REST
// to see how rest is working 

function sum(...args) {
    for(let i=0; i<args.length; i++) {
        console.log("You gave input as: ", args[i]);
    }

};

sum(1);
sum(1, 4, 5, 6);
sum(2, 4, 5);
-------------------------------------------------------------------------------------------------------------------------
  
function min(a, b, c, d) {
    console.log(arguments);        //doesnt throw error even though we didnt declare arguments variable bcz it is an inbuilt default parameter
}
min(1,3,5,7);
-------------------------------------------------------------------------------------------------------------------------
  
function min() {
    console.log(arguments);      //here we removed parameters still no error
}
min(1,3,5,7); 

-------------------------------------------------------------------------------------------------------------------------
function min(a, b, c, d) {
    console.log(arguments);
    console.log(arguments.length);      //we can also  print length of arguments
}
min(1,3,5,7,5,6,9,9);
-------------------------------------------------------------------------------------------------------------------------
function min(a, b, c, d) {
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);       // throws error bcz these are functions and array methods which doesnt work on collection
}                              //to make it work rest comes into picture
min(1,3,5);
-------------------------------------------------------------------------------------------------------------------------
  
function sum() {
    return arguments.reduce((sum, el) => (sum+el));
};         // throws error bcz reduce is a array method and arguments is not an array but a collection


//to make it work we use rest
function sum(...args) {
    return args.reduce((sum, el) => sum+el);
};

console.log(sum(2,3 ,4 ,5));
-------------------------------------------------------------------------------------------------------------------------
// ex2
function min(...args) {
    return args.reduce((min, el) => {
        if(min>el) {
            return el;
        } else {
            return min;
        }
    })
}
console.log(min(2, 3,5,5));
-------------------------------------------------------------------------------------------------------------------------
  
//we can add other parameters like msg or input
// to send message along with args 
function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if(min>el) {
            return el;
        } else {
            return min;
        }
    })
}
console.log(min("hi",2, 3,5,5));
console.log(min("hello",2, 3,5,5));
console.log(min(10  ,2, 3,5,5));     //note : here i put 10 in place of msg

-------------------------------------------------------------------------------------------------------------------------
//DESTRUCTURING

//for arrays

//traditional method
let names = ["Nammu", "Hemu", "Sonu", "Rocky", "Sonu", "Lilly", "Karan", "Komal", "Lucky"];
let winner = names[0];
let runner = names[1];
 etc

//using destructuring
let names = ["Nammu", "Hemu", "Sonu", "Rocky", "Sonu", "Lilly", "Karan", "Komal", "Lucky"];
let [winner, runner, secondRunnerup, ...others] = names;      //...others is rest 

console.log(winner, runner);
console.log(winner);
console.log(secondRunnerup);
console.log(others);
-------------------------------------------------------------------------------------------------------------------------
  
//destructuring for objects
let student = {
    name : " Nammu",
    city : "Banaglore",
    age : 21,
    username : "nammu@123",
    password : "abcd",
};

let {username, city, age} = student
console.log(username);
console.log(username, city);
-------------------------------------------------------------------------------------------------------------------------
  
let student = {
    name : " Nammu",
    city : "Banaglore",
    age : 21,
    classes : "12th",
    username : "nammu@123",
    password : "abcd"
};

//updating keys of the properties and accessing them
let {username : user, city : place} = student;
console.log(username);    //throws error
console.log(city);        //throws error
console.log(user);         //prints value bcz we updated username key to user
console.log(place);
-------------------------------------------------------------------------------------------------------------------------
  
let student = {
    name : " Nammu",
    city : "Banaglore",
    age : 21,
    classes : "12th",
    username : "nammu@123",
    password : "abcd",
    profession : "SDE"
};

//giving default parameter class 9th
let {city = "mumbai", age} = student;
console.log(city);      //prints mumbai if city: blore doesnt exist in object
console.log(age);
-------------------------------------------------------------------------------------------------------------------------
  
let student = {
    name : " Nammu",
    city : "Banaglore",
    age : 21,
    classes : "12th",
    username : "nammu@123",
    password : "abcd",
    // profession : "SDE"
};

//undefined variable profession - if we dont have profession in object student it prints undefined when asked for
let {name, profession} = student;
console.log(name);
console.log(profession);
console.log(name, profession);

-------------------------------------------------------------------------------------------------------------------------

  //LAST 3 SETS OF QUESTIONS BEFORE DOM RESOURCES
Qs1
let arr = [2, 8, 9, 5, 3, 9, 65, 34, 54, 6, 7, 4];
let num=5;

function getElements(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>num) {
            console.log(arr[i]);
        }
    }
}

// getElements(arr, num);
---------------------------------------------------------------
// Qs2
let str = "abchdssjskksamlkw";
let ans ="";

function getUnique(str) {
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            ans+=currChar;
        }
    }
    return ans;  
}

console.log(getUnique(str));
---------------------------------------------------------------

//Qs3
let country = ["Australia", "Brazil", "United Kingdom", "Germany", "Canada"];


function longestName(country) {
    let ansIdx = 0;
    for(let i=0; i<country.length; i++) {
        let ansName = country[ansIdx].length;
        let currName = country[i].length;
        if(currName > ansName) {
            ansIdx=i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country));
---------------------------------------------------------------
//Qs4
let str = "narmada gogineni"
let count = 0;

function countVowels(str) {
    for(let i=0; i<str.length; i++) {
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 
        ) {
            count++;
        }        
    }
    return count;
}

console.log(countVowels(str));
---------------------------------------------------------------
// Qs5
let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(100, 200));
---------------------------------------------------------------
// Q1
let avgArray = (arr) => {
    let total = 0;
    for(let number of arr) {
        total +=number;
    }
    return total / arr.length;
};

let arr = [2, 4,65, 7, 67,432,9];
console.log(avgArray(arr) );

//Q2
const isEven = (num) => {
    if(num%2==0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

isEven(58);
---------------------------------------------------------------
//Q3
const object = {
    message : "Hello world!",

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

setTimeout(()=>{
    console.log("hello");
    console.log(this);
}, 2000);

let student = {
    name : "john", 
    prop : this
}
setTimeout(() => {
    console.log("hi")
    console.log(this);
},2000);
setTimeout(student.prop, 4000);
---------------------------------------------------------------
Qs4
confusing
---------------------------------------------------------------
//Q1
let nums = [2, 5, 6, 7, 8, 10];

const square = nums.map((el) => el * el);
console.log(square);

let sum = square.reduce((res, el) => (res + el));
console.log(sum);

let avg = sum/nums.length;
console.log(avg);
---------------------------------------------------------------
//Q2
let nums = [2, 3, 4, 5, 6, 7];

let increase = nums.map((el) => (el + 5));
console.log(increase);
---------------------------------------------------------------
//Q3
let arr = ["anu", "aman", "benny", "cloy", "dan"];
let names = arr.map((el)=>(el.toUpperCase()));
console.log(names);
---------------------------------------------------------------
//Q4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((values)=>(values*2)),
];

console.log(doubleAndReturnArgs([2,4, 5, 6], 5, 7));
-------------------------------------------------------------
//Q5
let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a : 1, b: 2}, {c : 3, d:4}));
--------------------------------------------------------------











  
