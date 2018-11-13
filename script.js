
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

 */

var sum = document.getElementById("sum");
sum.addEventListener("click", function (event) {
    let setSum= document.getElementById()
    let aSumOnes = parseInt(document.getElementById("Player1_ones").value);
    let aSumTwos = parseInt(document.getElementById("Player1_twos").value);
    let aSumThrees = parseInt(document.getElementById("Player1_threes").value);
    let aSumFours = parseInt(document.getElementById("Player1_fours").value);
    let aSumFives = parseInt(document.getElementById("Player1_fives").value);
    let aSumSix = parseInt(document.getElementById("Player1_six").value);
    let sum= aSumOnes + aSumTwos +aSumThrees + aSumFours + aSumFives +aSumSix;
    aSumOnes.value=sum;
    console.log(sum);
});