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
    class: "Human",
    health: 100,
    get tittle() { //getters
        return this.name + "the" + this.class;
    },
    set maxHealth(h) {
        this.health = h;
    },
    xPos: 0,
    items: ["Knife", "Food"],
    move: function(x) {
        this.xPos += x;
    }
};
// GETTERS AND SETTERS



/*
var name = gameCharacter.name; //accessing values
gameCharacter.items = ["axe", "bread"]; //changing values
gameCharacter.moves(5);
var x = gameCharacter.xPos;

gameCharacter.yPos = 0;
gameCharacter.move = function(x,y) { //COPYING THE REFERENCE
    this.xPos += x;
    this.yPos += y;
}
*/