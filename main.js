var botScore=0;
playerScore=0;

var rockBtn=document.querySelector("#rockBtn").addEventListener("click")
var paperBtn=document.querySelector("#paperBtn").addEventListener("click")
var scissorsBtn=document.querySelector("#scissorsBtn").addEventListener("click")
var lizardBtn=document.querySelector("#lizardBtn").addEventListener("click")
var spockBtn=document.querySelector("#spockBtn").addEventListener("click")
var shootBtn=document.querySelector("#shoot").addEventListener("click")

function checkWhoWon(){
  shoot.addEventListener("click", ()=>{
    let randomNum= Math.Random()
    var botItem="rock"
      if(randomNum < .4){
        botItem == "paper"
        console.log(randomNum, botItem)
      }
      else if(randomNum > .4 && randomNum < .6){
        botItem == "scissors"
      }
      else if(randomNum >.6 && randomNum < .8){
        botItem == "lizard"
      }
      else(randomNum >.8 && randomNum < 1){
        botItem == "spock"
      })
    if(rockBtn=="rock" || paperBtn=="paper" || scissorsBtn=="scissors" || lizardBtn=="lizard" || spockBtn=="spock"){
      console.log("It's a match")
      alert ("It's a tie!")
    }
    else if(rockBtn == "paper" || rockBtn == "spock" || || p){
      alert("You Lose!")
      botScore++
    }
    else(rockBtn == "scissors"|| paperBtn ="rock" || rockBtn=="lizard" || lizardBtn == "spock" || spockBtn=="rock"){
      alert ("You win!")
      playerscore++
    }
  })
}
