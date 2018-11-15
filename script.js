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

 




function checkNaN(player) {
    if (document.getElementsByClassName(player).value === ""){
    return 0;
    }
    else return document.getElementsByClassName(player).value;
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

/*
    var ones = document.getElementsByClassName("player1 ones");
    ones.addEventListener("change", sumPlayer);
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
*/
/* ÖVRE DELEN AV SPELPLANEN */
/* Sätter eventlisteners på alla inputs i övre delen*/ 
var inputListeners = document.querySelectorAll(".player1");
for (var i = 0; i < inputListeners.length; i++) {
    inputListeners[i].addEventListener("change", sumPlayer);
}
/* Räknar ut summan i övre delen*/ 
function sumPlayer() {
    var setSum = document.querySelector("#sum1");
    var score = document.querySelectorAll(".player1");
    var sum = 0;

    for (let i = 0; i < score.length; i++) {
        let tempSum = parseInt(score[i].value);
        if (!isNaN(tempSum)) {
            sum += tempSum;
        }
    }
    setSum.value = sum;
}



/* NEDRE DELEN AV SPELPLANEN */
/* Sätter eventlisteners på alla inputs i nedre delen*/ 

var inputListeners = document.querySelectorAll(".player1b");
for (var i = 0; i < inputListeners.length; i++) {
    inputListeners[i].addEventListener("change", sumPlayerB);
}
/* Räknar ut summan i nedre delen*/
function sumPlayerB() {
    var setSum = document.querySelector(".totalSum1");
    var score = document.querySelectorAll(".player1b");
    var upperScore= document.querySelector("#sum1").value;
    var tSum = 0;

    for (let i = 0; i < score.length; i++) {
        let tempSum = parseInt(score[i].value);
        if (!isNaN(tempSum)) {
            tSum += tempSum;
        }
    }
    setSum.value =parseInt(upperScore)+tSum;
}

