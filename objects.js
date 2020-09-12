// what are objects
/* 
Almost everything is an object except for primative values
(booleans, numbers, strings, null, undefined)
Typically we refer to objects as collections of name:value pairs
Similar to dictionaries or hash maps in other languages
can hold values or functions
*/

var gameCharacter = {
    name: "Ana",
    xPos: 0,
    items: ["Knife", "Food"],
    move: function(x) {
        this.xPos += x;
    }
};

var name = gameCharacter.name; //accessing values
gameCharacter.items = ["axe", "bread"]; //changing values
gameCharacter.moves(5);
var x = gameCharacter.xPos;

gameCharacter.yPos = 0;
gameCharacter.move = function(x,y) {
    this.xPos += x;
    this.yPos += y;
}