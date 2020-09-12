/**
 * What are classes?
 * JS Classes are syntactic sugar over js objects in an attempt to mimic OO syntax
 * 
 */

class GameCharacter {
    constructor(name, xPos, health) {
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }
    
    move(x) {
        this.xPos += x;
    }
}
// this is subclass and that is superclass down here
class humanCharacter extends GameCharacter {
    constructor(name, xPos, health) {
        super(name, xPos, health);
        this.classification = "Human";
    }
}

var hc1 = new humanCharacter('Zenva', 10, 100);

var gc1 = gameCharacter('Ana', 0, 100);
gc1.move(4);
gc1.name;