/**
 * perform atest and run the code if test returns true
 * way to add logic to code
 * variants 
 *  else if to add additional test
 *  and else to add a dafult value* 
 */
var keyPressed = "l";
var xPos = 0;
let endPos = 5;
//comparison/logical if staments
// if (keyPressed == "r" && xPos < endPos) {
//     xPos += 1
// }
//nested if statemend 
if (keyPressed == "r") {
    if (xPos < endPos) {
        xPos += 1;
    }
    xPos += 1;
//concurrent if statements
} else if (keyPressed == "l") { //if the first teest fails we test this line
    if (xPos > endPos) {
        xPos -= 1;
    }
    xPos -= 1;
} else {
    xPos = 0;
}