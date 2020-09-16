/*
Strings are slightly more complex as they represent arrays of characters and have more functionality attached to them
*/
var characterName = "ana";
characterName = "zenva";
var age = 25;

var characterNameLength = characterName.length;
var alternateTitle = characterName.toUpperCase();

//interpolation
let message = 
`Hi, my name is ${CharacterName} and my age is ${age}`;

//string slices

let zen = characterName.slice(0, 3); 