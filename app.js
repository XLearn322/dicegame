var activePlayer = 0;

var score = [0,0];

var roundScore = 0;
var dice = document.querySelector(".dice");
function tegleh(){
  score = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  dice.style.display = "none";
}
tegleh();
// Togloomiig ehluuleh
document.querySelector(".btn-new").addEventListener("click", tegleh);


document.querySelector(".btn-roll").addEventListener("click", shooShid);

function shooShid(){
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  dice.style.display = "block";
  dice.src = 'dice-' + diceNumber + '.png';
  if(diceNumber!==1){
  roundScore=roundScore+diceNumber;
  document.getElementById("current-"+activePlayer).textContent = roundScore;
  }else{
    if(activePlayer===1){
      activePlayer=0;
    }else{
      activePlayer=1;
    }
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    roundScore=0;

  }
  
}
document.querySelector(".btn-hold").addEventListener("click",saveScore)
  function saveScore(){
      score[activePlayer]=score[activePlayer]+roundScore;
      document.getElementById("score-"+activePlayer).textContent = score[activePlayer];
      roundScore=0;
      document.getElementById("current-"+activePlayer).textContent = 0;
      if(activePlayer===1){
        activePlayer=0;
      }else{
        activePlayer=1;
      }
  }