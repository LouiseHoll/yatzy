
/* 
var playerz = [];

var player = {
    playerId: 123,
    password: "StoraKatten1",
    name: "Katten Kattzon",
    nickname: "Yatzter",
    email: "katten@katthub.com",
    lastGame: 234,
    bestGame: 324,
}

var gamez = [];

var game = {
    player = playerz[i],
}

 

var sum = document.getElementById("sum");
sum.addEventListener("click", function (event)
*/

function checkNaN(player) {
    if (document.getElementById(player).value === ""){
    return 0;
    }
    else return document.getElementById(player).value;
}
    function sumPlayer1 (){
    let setSum= document.getElementById("Player1_sum")
    let aSumOnes = parseInt(checkNaN("Player1_ones"));
    let aSumTwos = parseInt(checkNaN("Player1_twos"));
    let aSumThrees = parseInt(checkNaN("Player1_threes"));
    let aSumFours = parseInt(checkNaN("Player1_fours"));
    let aSumFives = parseInt(checkNaN("Player1_fives"));
    let aSumSix = parseInt(checkNaN("Player1_six"));
    let sum = aSumOnes + aSumTwos +aSumThrees + aSumFours + aSumFives +aSumSix;
    setSum.value = sum;
}

    var ones = document.getElementById("Player1_ones");
    ones.addEventListener("change", sumPlayer1);
    var twos = document.getElementById("Player1_twos");
    twos.addEventListener("change", sumPlayer1);    
    var threes = document.getElementById("Player1_threes");
    threes.addEventListener("change", sumPlayer1);    
    var fours = document.getElementById("Player1_fours");
    fours.addEventListener("change", sumPlayer1);    
    var fives = document.getElementById("Player1_fives");
    fives.addEventListener("change", sumPlayer1);    
    var six = document.getElementById("Player1_six");
    six.addEventListener("change", sumPlayer1);


    function getRandomInt () {
        return Math.floor(Math.random() * (6 - 1)) + 1;
    }

    function saveDice() {
        if (document.getElementById("dice1save") == false) {
            document.getElementById("dice1").value = getRandomInt();
        }

    }

    var roll = document.getElementById("roll");
    roll.addEventListener("click", saveDice(){

    })
