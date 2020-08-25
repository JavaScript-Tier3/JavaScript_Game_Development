/**
 * Way to run code multiple times
 * similar to an if sttement but 
 * continue to execute the code as lon as the condition is true
 * Stop running the code once condition is false
 */

 let endPos = 5;
 var pos = 0;
 var enemyPos = 4;
 var isGameOver = false;
/*
 while(pos < endPos) {
    pos++; //increase our position by 1
 }

 //this will run 4 times and the 5th time it woulld exit the code
*/

while(!isGameOver) {
    xPoss++;
    if(xPoss >= endPos || xPos == enemyPos) {
        isGameOver = true;
    }
}

