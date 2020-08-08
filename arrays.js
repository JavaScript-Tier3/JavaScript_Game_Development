/*
Arrays 
    allow us to store multiple values in asingle variable
    access values by index
    come with various operators tp retrive propertoes or modify the values in some way
    can have multidimensional arrays(matrices)
*/

var inventory = ["shirt", "axe", "bread"];
// inventory = ["water", "pants"];

let shirt = inventory[0]; //if the number is outof bounds it will return error like #5
inventory[2] = "cheese"; // changes bread to cheese

var lenght =inventory.length; // 3
length = inventory[0].length; // 5

inventory.push("water"); //adds water add the end of an array
var water = inventory.pop(); // removes the final item and will return it 

// MULTIDIMENTIONAL ARRAYS

var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2 , 2.3],
    [3.1, 3,2], 
    [4.1, 4.2]
];

var firstWorld = levels[0]; // [1.1,,,,]
var firstLevel = levels[0][1]; // 1.2
// firstLevel[0][1] = 1.4
