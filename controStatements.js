/**
 * Break, Continue, and Return Statements
 * Break statements are used to exit loops and if statements prematurely. 
 * They will halt a loop exacution and exit out regardless of whether or not the while loop test returns true or false.
 * 
 * 
 */

 var xPos = 1;
 var enemyPos = 3;
 let endPos = 5;

 //break
 while(xPos < endPos) {
    xPos++;
    if(xPos == enemyPos) {
        break;
    }
}

/**
 * Continue statements on the other hand, skip over any remining code in the current loop iteration and move directly onto next.
 * 
 * 
 */
/*
while(xPos < endPos) {
    if (xPos % 2 == 1 ) {
        xPos += 2;
        continue;
    }
    xPos++;
    if(xPos == enemyPos) {
        break;
    }
}
*/

function doSomething(someNum) {
    var a = 5;
    var result = a + someNum;
    return result;//return the function and exits outs the function and nothing else gets executed
    a += 10;
}