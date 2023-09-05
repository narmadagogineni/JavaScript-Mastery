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












  


















  
