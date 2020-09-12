function gameCharacter(name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move =function(x) {
        this.xPos += x;
    }
    this.class = "Human" //default value
}


var gc1 = new gameCharacter("ana", 0, 100);
var name = gc1.name; //retriving
gc1.health = 150;
gc1.move(10);

var gc2 = new gameCharacter("Zoe", 0, 100);

function petChar(name, race, legs) {
    this.name = name;
    this.race = race;
    this.legs = legs;
    this.walk = function(w) {
        this.legs += w; // kind of stupid since it will increase the number of legs the point is i want it to move or do something
    }
    this.class = "Domestic Pet" //defautl value
}

var pc1 = new petChar("Ponkey", "Shizhu", 4);
var petName = gc1.name;