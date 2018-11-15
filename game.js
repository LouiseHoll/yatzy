
function getRandomInt() {
    return Math.floor(Math.random() * (6 - 1)) + 1;
}

function saveDice() {

    for (i = 1; i <= 5; i++) {
        if (document.getElementById("dice" + i + "save").checked === false) {
             document.getElementById("dice" + i).value = getRandomInt();
        }
    }
}

var roll = document.getElementById("roll");
roll.addEventListener("click", saveDice);


//placerar värdet av tärningarna i rätt ruta
var sumOfThrow = document.querySelectorAll(".throw");
