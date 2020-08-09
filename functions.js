/* 
Allow us to  code and choose where and when to execute it
implement a function to specify what code to run
call a function to execute the code within
can take values as input via parameters
can output values via return value
*/
var currentHealth = 50;
var healAmount = 10;

function heal() {
    currentHealth += healAmount;
    // function nested() {

    // }
}

heal(); // calling upon the function current health = 60

//a reference to a functions
var func = function heal() {
    currentHealth += healAmount;
}

//FUNCTION PARAMETERS -just inputs
function healTwo(healAmount) {
    currentHealth += healAmount;
}
heal(10); // currentHealth = 60

