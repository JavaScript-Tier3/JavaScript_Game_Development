/*
Operators
    Allow us to perform test or modify variable values

    Assignment 
    arithmetic 
    comperison 
    logical
    teranry
*/
//assignment
var health = 50;

// arithmetic + - * / % **

health = health + 10; // 60
health = history % 50; //10
// health % 2 == 0 // true
health = health ** 2; // 100

//arithmetic assignment operator
// += -= *= /=
health -+ 20; // health = health - 20

// ++ -- 
health++; // 81

//health = (health * 2) + (health / 5);

// increase by 1
health++;
health += 1;
health = health + 1;

// adding strings
var hello = "hello"
var world = "world"

var result = hello + world;

// compariso operators > >= < <= == !=
var number1 = 5;
var number3 = 10;

var result = number1 > number3; // false
result = number1 != number3; // true

result2 = hello == world; false;

// logical operators
// !, ||, &&
result = !result; //return the opposite
result = number1 > number3 && hello == world; // both have to be true in order to store true 
number3 = number1;
result = number1 == number3 || hello == world; //true

// ? :

result = number1 > number3 ? number1 : number3;
// if its true return the thing on the left of : that and if its false return whats on the right of : this