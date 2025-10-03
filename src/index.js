let cardOne = 5
let cardTwo = 10
let sum = cardOne + cardTwo

let messageEl = document.querySelector("#message-el")
let message = " "
  
let startGameBtn = document.querySelector("#start-game-btn")
startGameBtn.addEventListener("click", startGame)

function startGame(){
    if(sum <= 20){
        message = "Do you want another card?"
    }else if(sum === 21){
        message = "BlackJack!"
    }else {
        message = "GameOver!"
    }
    messageEl.textContent = message
}