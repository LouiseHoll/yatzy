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

var roll = document.getElementById("count");
roll.addEventListener("click", sumOfThrow);

$(document).ready(function () {
    $("#roll").click(function () {
        $('.transform').toggleClass('transform-active');
    });
 });

function sumOfThrow() {
    var sumOfThrow = document.querySelectorAll(".throw");
    var skrivHar = document.querySelector("#countHere");
    var sum = 0;
    for (var i = 0; i < sumOfThrow.length; i++) {
        if (sumOfThrow[i].previousElementSibling.checked){

            sum += parseInt(sumOfThrow[i].value);
        }
console.log(sum);
    }
    skrivHar.innerHTML = " " + sum;
}
/*
//placerar värdet av tärningarna i rätt ruta
function sumOfThrow() {
    var sumOfThrow = document.querySelectorAll(".throw");
    var sum = 0;
    for (var i = 0; i < sumOfThrow.length; i++) {
        sum += sumOfThrow[i].value;
        return sum;
    }


    
    var choose_input = document.querySelector(".choose_input");
    choose_input.addEventListener("change", saveRoundHere);

    function saveRoundHere() {
        console.log("Jag finns!");
        var here = choose_input.value;
        var writeHere = document.querySelector('.player1' + " ." + here);
        writeHere.textContent = sumOfThrow;
    }







    var writeHere = document.querySelector('.player1' + " ." + listQ)
    //var chosenThrow= document.querySelector("#choose_input").

    function listQ() {
        writeHere.textContent = this.value;
        var adress = this.value;
    }
     $("#list").on("change",listQ); 
    document.getElementById("#choose_input").onchange = listQ;





    //var ska summan sättas? väljs från dropdownmeny = sum;
}*/